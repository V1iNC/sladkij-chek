import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cream-50 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="h-14 w-14 relative">
              <img 
                src="/src/assets/logo.svg" 
                alt="Сладкий Чек" 
                className="w-full h-full"
              />
            </div>
            <div className="ml-2">
              <h1 className="text-brown-900 font-bold text-xl sm:text-2xl">Сладкий Чек</h1>
              <p className="text-brown-700 text-xs sm:text-sm">Кондитерский магазин</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLinks />
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/account" className="text-brown-800 hover:text-brown-900 transition-colors">
              <User size={24} />
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart 
                className={`w-6 h-6 ${isScrolled ? 'text-brown-900' : 'text-brown-800'} transition-colors duration-200`} 
              />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-caramel-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </Link>
            
            <Button 
              variant="primary" 
              size="sm"
              className="hidden md:block"
              onClick={() => window.location.href = '/contact'}
            >
              Заказать
            </Button>

            <button 
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Меню"
            >
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-brown-900' : 'text-brown-800'}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-cream-50 z-50 flex flex-col py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <div className="h-14 w-14 relative">
                <img 
                  src="/src/assets/logo.svg" 
                  alt="Сладкий Чек" 
                  className="w-full h-full"
                />
              </div>
              <div className="ml-2">
                <h1 className="text-brown-900 font-bold text-xl">Сладкий Чек</h1>
                <p className="text-brown-700 text-xs">Кондитерский магазин</p>
              </div>
            </Link>
            <button onClick={toggleMobileMenu} aria-label="Закрыть меню">
              <X className="w-6 h-6 text-brown-900" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-grow gap-8 text-lg">
            <NavLinks isMobile />
            <Button 
              variant="primary" 
              size="md"
              className="mt-4"
              onClick={() => window.location.href = '/contact'}
            >
              Заказать
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLinks: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  const location = useLocation();
  const activeClass = isMobile 
    ? "text-caramel-600 font-medium"
    : "text-caramel-600 font-medium";
  
  const normalClass = isMobile
    ? "text-brown-900 hover:text-caramel-600 transition-colors duration-200"
    : "text-brown-900 hover:text-caramel-600 transition-colors duration-200";
  
  const isActive = (path: string) => {
    return location.pathname === path ? activeClass : normalClass;
  };

  return (
    <>
      <Link to="/" className={isActive('/')}>Главная</Link>
      <Link to="/catalog" className={isActive('/catalog')}>Каталог</Link>
      <Link to="/promotions" className={isActive('/promotions')}>Акции</Link>
      <Link to="/about" className={isActive('/about')}>О нас</Link>
      <Link to="/delivery" className={isActive('/delivery')}>Доставка</Link>
      <Link to="/contact" className={isActive('/contact')}>Контакты</Link>
    </>
  );
};

export default Header;
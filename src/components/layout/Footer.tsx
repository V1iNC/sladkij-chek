import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brown-900 text-cream-50 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 relative mr-2">
                <img 
                  src="/src/assets/logo-light.svg" 
                  alt="Сладкий Чек" 
                  className="w-full h-full"
                />
              </div>
              <h2 className="text-xl font-bold">Сладкий Чек</h2>
            </div>
            <p className="text-cream-200 mb-4">
              Мы создаем незабываемые вкусовые впечатления для Ваших особых моментов.
            </p>
            <div className="flex space-x-4 mt-auto">
              <a href="https://instagram.com" className="hover:text-caramel-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="hover:text-caramel-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Каталог</h3>
            <ul className="space-y-2">
              <li><Link to="/catalog?category=cakes" className="text-cream-200 hover:text-caramel-400 transition-colors">Торты</Link></li>
              <li><Link to="/catalog?category=cupcakes" className="text-cream-200 hover:text-caramel-400 transition-colors">Капкейки</Link></li>
              <li><Link to="/catalog?category=pastries" className="text-cream-200 hover:text-caramel-400 transition-colors">Пирожные</Link></li>
              <li><Link to="/catalog?category=bread" className="text-cream-200 hover:text-caramel-400 transition-colors">Хлеб</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-cream-200 hover:text-caramel-400 transition-colors">О нас</Link></li>
              <li><Link to="/delivery" className="text-cream-200 hover:text-caramel-400 transition-colors">Доставка</Link></li>
              <li><Link to="/faq" className="text-cream-200 hover:text-caramel-400 transition-colors">Вопросы и ответы</Link></li>
              <li><Link to="/policy" className="text-cream-200 hover:text-caramel-400 transition-colors">Политика конфиденциальности</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 flex-shrink-0 mt-1 text-caramel-400" />
                <span className="text-cream-200">+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 flex-shrink-0 mt-1 text-caramel-400" />
                <span className="text-cream-200">info@sladkiy-chek.ru</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 flex-shrink-0 mt-1 text-caramel-400" />
                <span className="text-cream-200">г. Москва, ул. Кондитерская, д. 123</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 flex-shrink-0 mt-1 text-caramel-400" />
                <span className="text-cream-200">Пн-Вс: 9:00 - 21:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brown-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-cream-300 text-sm">
              © {new Date().getFullYear()} Сладкий Чек. Все права защищены.
            </p>
            <div className="mt-4 md:mt-0">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Visa_2021.svg/1200px-Visa_2021.svg.png" 
                alt="Visa" 
                className="h-6 inline-block mr-2"
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" 
                alt="MasterCard" 
                className="h-6 inline-block mr-2"
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/MIR_logo.svg/2560px-MIR_logo.svg.png" 
                alt="Mir" 
                className="h-6 inline-block"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
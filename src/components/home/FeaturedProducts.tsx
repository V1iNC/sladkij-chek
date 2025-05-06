import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import { formatPrice } from '../../utils/formatters';
import { useCart } from '../../context/CartContext';
import { ShoppingCart } from 'lucide-react';

const FeaturedProducts: React.FC = () => {
  const { addItem } = useCart();
  const popularProducts = products.filter(product => product.popular).slice(0, 4);

  return (
    <section className="py-16 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">
            Популярные десерты
          </h2>
          <p className="text-brown-700 max-w-2xl mx-auto">
            Наши самые любимые и популярные десерты, которые покорили сердца наших клиентов своим неповторимым вкусом и безупречным качеством
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Link to={`/catalog/${product.id}`} className="block">
                <div className="h-60 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-brown-900 mb-2">{product.name}</h3>
                  <p className="text-brown-600 text-sm line-clamp-2 mb-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-caramel-600 font-semibold">{formatPrice(product.price)}</span>
                    <button 
                      className="w-10 h-10 flex items-center justify-center bg-caramel-100 rounded-full hover:bg-caramel-200 transition-colors duration-200"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addItem(product);
                      }}
                    >
                      <ShoppingCart size={18} className="text-brown-800" />
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/catalog" 
            className="inline-block py-3 px-6 bg-brown-700 text-white rounded-md hover:bg-brown-800 transition-colors font-medium"
          >
            Смотреть все товары
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
import React from 'react';
import { Link } from 'react-router-dom';
import { promotions } from '../../data/promotions';
import { Calendar } from 'lucide-react';

const Promotions: React.FC = () => {
  const featuredPromotions = promotions.slice(0, 4);

  return (
    <section className="py-16 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">
            Специальные предложения
          </h2>
          <p className="text-brown-700 max-w-2xl mx-auto">
            Не упустите возможность попробовать наши десерты с выгодой
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPromotions.map((promotion) => (
            <div 
              key={promotion.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={promotion.image} 
                  alt={promotion.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg text-brown-900">{promotion.title}</h3>
                  <span className="bg-caramel-500 text-white px-2 py-1 rounded-full text-sm">
                    -{promotion.discount}%
                  </span>
                </div>
                <p className="text-brown-700 text-sm mb-3 line-clamp-2">{promotion.description}</p>
                <div className="flex items-center text-brown-600 text-sm">
                  <Calendar size={16} className="mr-2" />
                  <span>до {new Date(promotion.endDate).toLocaleDateString('ru-RU')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link 
            to="/promotions" 
            className="inline-block py-2 px-6 bg-brown-700 text-white rounded-md hover:bg-brown-800 transition-colors"
          >
            Все акции
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
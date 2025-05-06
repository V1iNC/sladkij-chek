import React from 'react';
import { promotions } from '../data/promotions';
import { Calendar, Clock, Info } from 'lucide-react';

const PromotionsPage: React.FC = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">
            Акции и специальные предложения
          </h1>
          <p className="text-brown-700 max-w-2xl mx-auto">
            Выгодные предложения для наших любимых клиентов
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promotions.map((promotion) => (
            <div 
              key={promotion.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={promotion.image} 
                  alt={promotion.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-semibold text-brown-900">{promotion.title}</h2>
                  <span className="bg-caramel-500 text-white px-4 py-1 rounded-full text-lg font-semibold">
                    -{promotion.discount}%
                  </span>
                </div>
                <p className="text-brown-700 mb-6">{promotion.description}</p>
                
                <div className="space-y-4">
                  <div className="flex items-center text-brown-600">
                    <Calendar size={20} className="mr-2" />
                    <span>
                      Действует с {new Date(promotion.startDate).toLocaleDateString('ru-RU')} 
                      по {new Date(promotion.endDate).toLocaleDateString('ru-RU')}
                    </span>
                  </div>
                  
                  {promotion.conditions && (
                    <div className="bg-cream-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Info size={20} className="text-caramel-600 mr-2" />
                        <h3 className="font-medium text-brown-900">Условия акции:</h3>
                      </div>
                      <ul className="space-y-2">
                        {promotion.conditions.map((condition, index) => (
                          <li key={index} className="flex items-start">
                            <div className="bg-caramel-100 rounded-full p-1 mr-3 mt-1">
                              <div className="w-2 h-2 bg-caramel-500 rounded-full"></div>
                            </div>
                            <span className="text-brown-700">{condition}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PromotionsPage;
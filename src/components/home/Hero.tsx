import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 lg:min-h-[80vh] lg:flex lg:items-center relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brown-900 mb-4">
              Создаем сладкие <span className="text-caramel-600">шедевры</span> с любовью
            </h1>
            <p className="text-lg md:text-xl text-brown-700 mb-8 max-w-xl mx-auto lg:mx-0">
              Изысканные торты, пирожные и десерты ручной работы для любого праздника и особого случая
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="primary" 
                size="lg"
              >
                <Link to="/catalog">Каталог продукции</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
              >
                <Link to="/contact">Индивидуальный заказ</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="flex items-center">
                <div className="bg-caramel-100 rounded-full p-2 mr-3">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/1046/1046747.png" 
                    alt="Натуральные ингредиенты" 
                    className="w-8 h-8" 
                  />
                </div>
                <span className="text-brown-900">Натуральные ингредиенты</span>
              </div>
              <div className="flex items-center">
                <div className="bg-caramel-100 rounded-full p-2 mr-3">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/6831/6831000.png" 
                    alt="Доставка" 
                    className="w-8 h-8" 
                  />
                </div>
                <span className="text-brown-900">Быстрая доставка</span>
              </div>
              <div className="flex items-center">
                <div className="bg-caramel-100 rounded-full p-2 mr-3">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/2107/2107845.png" 
                    alt="Индивидуальный подход" 
                    className="w-8 h-8" 
                  />
                </div>
                <span className="text-brown-900">Индивидуальный подход</span>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative rounded-full overflow-hidden border-8 border-cream-100 shadow-xl w-[450px] h-[450px] mx-auto">
              <img 
                src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Праздничный торт" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-lg overflow-hidden rotate-12 border-4 border-cream-100 shadow-lg">
              <img 
                src="https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Капкейки" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-12 -right-8 w-36 h-36 rounded-lg overflow-hidden -rotate-6 border-4 border-cream-100 shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3776939/pexels-photo-3776939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Макаруны" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
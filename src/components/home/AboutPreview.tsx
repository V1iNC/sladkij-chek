import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const AboutPreview: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-6">
              О кондитерском магазине <span className="text-caramel-600">Сладкий Чек</span>
            </h2>
            <p className="text-brown-700 mb-4">
              Наша история началась с любви к кондитерскому искусству и желания создавать не просто десерты, а настоящие произведения искусства, которые дарят радость и восторг.
            </p>
            <p className="text-brown-700 mb-6">
              Мы используем только натуральные ингредиенты высшего качества. Каждый десерт готовится с любовью и вниманием к деталям, чтобы порадовать вас не только великолепным вкусом, но и изысканным внешним видом.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <div className="bg-caramel-100 rounded-full p-1 mr-3 mt-1">
                  <div className="w-4 h-4 bg-caramel-500 rounded-full"></div>
                </div>
                <span className="text-brown-700">Индивидуальный подход к каждому заказу</span>
              </li>
              <li className="flex items-start">
                <div className="bg-caramel-100 rounded-full p-1 mr-3 mt-1">
                  <div className="w-4 h-4 bg-caramel-500 rounded-full"></div>
                </div>
                <span className="text-brown-700">Только натуральные и свежие ингредиенты</span>
              </li>
              <li className="flex items-start">
                <div className="bg-caramel-100 rounded-full p-1 mr-3 mt-1">
                  <div className="w-4 h-4 bg-caramel-500 rounded-full"></div>
                </div>
                <span className="text-brown-700">Команда опытных кондитеров</span>
              </li>
              <li className="flex items-start">
                <div className="bg-caramel-100 rounded-full p-1 mr-3 mt-1">
                  <div className="w-4 h-4 bg-caramel-500 rounded-full"></div>
                </div>
                <span className="text-brown-700">Доставка по всему городу</span>
              </li>
            </ul>
            <Button variant="outline" size="lg">
              <Link to="/about">Узнать больше о нас</Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden h-48 shadow-md">
                <img 
                  src="https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Наша кондитерская" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64 shadow-md">
                <img 
                  src="https://images.pexels.com/photos/887349/pexels-photo-887349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Приготовление десертов" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-lg overflow-hidden h-64 shadow-md">
                <img 
                  src="https://images.pexels.com/photos/6105673/pexels-photo-6105673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Наши кондитеры" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-48 shadow-md">
                <img 
                  src="https://images.pexels.com/photos/4916554/pexels-photo-4916554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Оформление тортов" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Button from '../ui/Button';

const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-cream-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-brown-700 max-w-2xl mx-auto">
            Есть вопросы или хотите сделать заказ? Свяжитесь с нами удобным для вас способом.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold text-brown-900 mb-6">Форма обратной связи</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-brown-700 mb-2">Ваше имя</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caramel-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-brown-700 mb-2">Электронная почта</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caramel-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-brown-700 mb-2">Телефон</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caramel-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-brown-700 mb-2">Сообщение</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caramel-500"
                ></textarea>
              </div>
              <Button variant="primary" size="lg" fullWidth type="submit">
                Отправить сообщение
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-xl font-semibold text-brown-900 mb-4">Контактная информация</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Phone size={20} className="mr-3 text-caramel-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-brown-900">Телефон</p>
                    <p className="text-brown-700">+7 (999) 123-45-67</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail size={20} className="mr-3 text-caramel-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-brown-900">Электронная почта</p>
                    <p className="text-brown-700">info@sladkiy-chek.ru</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin size={20} className="mr-3 text-caramel-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-brown-900">Адрес</p>
                    <p className="text-brown-700">г. Москва, ул. Кондитерская, д. 123</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock size={20} className="mr-3 text-caramel-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-brown-900">Часы работы</p>
                    <p className="text-brown-700">Пн-Вс: 9:00 - 21:00</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-[250px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.3079771661396!2d37.62095987680421!3d55.75362997289181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2sru!4v1698938283607!5m2!1sru!2sru" 
                width="100%" 
                height="250" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
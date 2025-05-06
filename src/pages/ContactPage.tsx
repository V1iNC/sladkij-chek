import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import Button from '../components/ui/Button';

const ContactPage: React.FC = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">
            Контактная информация
          </h1>
          <p className="text-brown-700 max-w-2xl mx-auto">
            Мы всегда рады помочь вам с выбором и ответить на любые вопросы
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold text-brown-900 mb-6">Наши контакты</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Phone size={24} className="mr-4 text-caramel-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-brown-900 mb-1">Телефон</p>
                    <p className="text-brown-700 mb-1">+7 (999) 123-45-67</p>
                    <p className="text-brown-600 text-sm">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail size={24} className="mr-4 text-caramel-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-brown-900 mb-1">Электронная почта</p>
                    <p className="text-brown-700 mb-1">info@sladkiy-chek.ru</p>
                    <p className="text-brown-600 text-sm">Мы отвечаем в течение 24 часов</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin size={24} className="mr-4 text-caramel-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-brown-900 mb-1">Адрес</p>
                    <p className="text-brown-700 mb-1">г. Москва, ул. Кондитерская, д. 123</p>
                    <p className="text-brown-600 text-sm">Рядом с метро "Сладкая"</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock size={24} className="mr-4 text-caramel-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-brown-900 mb-1">Часы работы</p>
                    <p className="text-brown-700 mb-1">Пн-Вс: 9:00 - 21:00</p>
                    <p className="text-brown-600 text-sm">Без выходных</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-brown-900 mb-6">Социальные сети</h2>
              <p className="text-brown-700 mb-6">
                Подписывайтесь на наши социальные сети, чтобы быть в курсе всех новостей, акций и новинок
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com" 
                  className="bg-caramel-100 w-12 h-12 rounded-full flex items-center justify-center hover:bg-caramel-200 transition-colors"
                >
                  <Instagram size={24} className="text-brown-800" />
                </a>
                <a 
                  href="https://facebook.com" 
                  className="bg-caramel-100 w-12 h-12 rounded-full flex items-center justify-center hover:bg-caramel-200 transition-colors"
                >
                  <Facebook size={24} className="text-brown-800" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-brown-900 mb-6">Связаться с нами</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-brown-700 mb-2">Ваше имя</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caramel-500"
                  placeholder="Иван Иванов"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-brown-700 mb-2">Электронная почта</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caramel-500"
                  placeholder="email@example.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-brown-700 mb-2">Телефон</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caramel-500"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-brown-700 mb-2">Тема</label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caramel-500"
                >
                  <option value="">Выберите тему</option>
                  <option value="order">Заказ торта</option>
                  <option value="delivery">Доставка</option>
                  <option value="feedback">Отзыв</option>
                  <option value="cooperation">Сотрудничество</option>
                  <option value="other">Другое</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-brown-700 mb-2">Сообщение</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caramel-500"
                  placeholder="Введите ваше сообщение..."
                ></textarea>
              </div>
              <Button variant="primary" size="lg" fullWidth type="submit">
                Отправить сообщение
              </Button>
            </form>
          </div>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-md h-[400px] mb-16">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.3079771661396!2d37.62095987680421!3d55.75362997289181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2sru!4v1698938283607!5m2!1sru!2sru" 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <div className="bg-cream-100 rounded-lg p-8 shadow-md text-center">
          <h2 className="text-2xl font-semibold text-brown-900 mb-4">Давайте работать вместе</h2>
          <p className="text-brown-700 mb-6 max-w-2xl mx-auto">
            Если вы заинтересованы в сотрудничестве, корпоративных заказах или имеете другие предложения, 
            мы будем рады обсудить возможности работы вместе.
          </p>
          <Button variant="primary" size="lg">
            <a href="mailto:partnership@sladkiy-chek.ru">Написать о сотрудничестве</a>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
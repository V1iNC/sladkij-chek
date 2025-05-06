import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const DeliveryPage: React.FC = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">
            Доставка и оплата
          </h1>
          <p className="text-brown-700 max-w-2xl mx-auto">
            Мы доставим ваш заказ быстро и бережно, чтобы вы могли насладиться свежими десертами
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-brown-900 mb-6">Условия доставки</h2>
            
            <div className="bg-cream-50 rounded-lg p-6 mb-6 shadow-md">
              <h3 className="text-xl font-medium text-brown-900 mb-4">Зоны доставки</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-caramel-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-4 h-4 bg-caramel-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-medium text-brown-900">В пределах МКАД</p>
                    <p className="text-brown-700">Доставка 300 ₽, при заказе от 3000 ₽ — бесплатно</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-caramel-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-4 h-4 bg-caramel-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-medium text-brown-900">До 10 км за МКАД</p>
                    <p className="text-brown-700">Доставка 500 ₽, при заказе от 5000 ₽ — бесплатно</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-caramel-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-4 h-4 bg-caramel-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-medium text-brown-900">Свыше 10 км за МКАД</p>
                    <p className="text-brown-700">Рассчитывается индивидуально</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-cream-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-medium text-brown-900 mb-4">Время доставки</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-caramel-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-4 h-4 bg-caramel-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-medium text-brown-900">Стандартная доставка</p>
                    <p className="text-brown-700">Ежедневно с 10:00 до 20:00</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-caramel-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-4 h-4 bg-caramel-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-medium text-brown-900">Срочная доставка</p>
                    <p className="text-brown-700">В течение 3 часов (доплата 500 ₽)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-caramel-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-4 h-4 bg-caramel-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-medium text-brown-900">Время предзаказа</p>
                    <p className="text-brown-700">За 24 часа для стандартных товаров, за 48 часов для индивидуальных заказов</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-brown-900 mb-6">Способы оплаты</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-cream-50 p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-caramel-100 rounded-full flex items-center justify-center mb-4">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/2331/2331941.png" 
                    alt="Оплата наличными" 
                    className="w-6 h-6" 
                  />
                </div>
                <h3 className="text-lg font-medium text-brown-900 mb-2">Наличными</h3>
                <p className="text-brown-700 text-sm">
                  Оплата курьеру при получении заказа
                </p>
              </div>
              <div className="bg-cream-50 p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-caramel-100 rounded-full flex items-center justify-center mb-4">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/9054/9054539.png" 
                    alt="Банковской картой" 
                    className="w-6 h-6" 
                  />
                </div>
                <h3 className="text-lg font-medium text-brown-900 mb-2">Картой</h3>
                <p className="text-brown-700 text-sm">
                  Оплата картой курьеру или онлайн на сайте
                </p>
              </div>
              <div className="bg-cream-50 p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-caramel-100 rounded-full flex items-center justify-center mb-4">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/6963/6963703.png" 
                    alt="Банковский перевод" 
                    className="w-6 h-6" 
                  />
                </div>
                <h3 className="text-lg font-medium text-brown-900 mb-2">Банковский перевод</h3>
                <p className="text-brown-700 text-sm">
                  Оплата по реквизитам для юридических лиц
                </p>
              </div>
              <div className="bg-cream-50 p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-caramel-100 rounded-full flex items-center justify-center mb-4">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/196/196578.png" 
                    alt="Электронные деньги" 
                    className="w-6 h-6" 
                  />
                </div>
                <h3 className="text-lg font-medium text-brown-900 mb-2">Электронные деньги</h3>
                <p className="text-brown-700 text-sm">
                  Apple Pay, Google Pay, YooMoney
                </p>
              </div>
            </div>
            
            <div className="bg-cream-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-medium text-brown-900 mb-4">Важная информация</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-caramel-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-4 h-4 bg-caramel-500 rounded-full"></div>
                  </div>
                  <span className="text-brown-700">Доставка осуществляется в специальных термобоксах, сохраняющих свежесть и форму десертов</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-caramel-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-4 h-4 bg-caramel-500 rounded-full"></div>
                  </div>
                  <span className="text-brown-700">При заказе крупногабаритных тортов необходимо присутствие получателя</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-caramel-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-4 h-4 bg-caramel-500 rounded-full"></div>
                  </div>
                  <span className="text-brown-700">Проверяйте заказ при получении в присутствии курьера</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-caramel-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-4 h-4 bg-caramel-500 rounded-full"></div>
                  </div>
                  <span className="text-brown-700">При самовывозе скидка 5% на весь заказ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-brown-900 mb-6 text-center">Как оформить заказ</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-caramel-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-medium text-brown-900 mb-2">Выберите товары</h3>
              <p className="text-brown-700 text-sm">
                Добавьте понравившиеся десерты в корзину
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-caramel-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-medium text-brown-900 mb-2">Оформите заказ</h3>
              <p className="text-brown-700 text-sm">
                Укажите адрес, дату и время доставки
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-caramel-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-medium text-brown-900 mb-2">Выберите оплату</h3>
              <p className="text-brown-700 text-sm">
                Выберите удобный способ оплаты
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-caramel-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-medium text-brown-900 mb-2">Получите заказ</h3>
              <p className="text-brown-700 text-sm">
                Наслаждайтесь вкусными десертами
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-cream-200 rounded-lg p-8 shadow-md text-center">
          <h2 className="text-2xl font-semibold text-brown-900 mb-4">Остались вопросы?</h2>
          <p className="text-brown-700 mb-6 max-w-2xl mx-auto">
            Если у вас остались вопросы по доставке или оплате, наши специалисты будут рады помочь вам. 
            Свяжитесь с нами любым удобным способом или посетите наш магазин.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg">
              <Link to="/contact">Связаться с нами</Link>
            </Button>
            <Button variant="outline" size="lg">
              <a href="tel:+79991234567">Позвонить</a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DeliveryPage;
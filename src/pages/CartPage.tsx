import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatters';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import Button from '../components/ui/Button';

const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  
  if (items.length === 0) {
    return (
      <div className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-brown-900 mb-6 text-center">Корзина</h1>
          <div className="flex flex-col items-center justify-center py-12">
            <ShoppingBag size={64} className="text-brown-300 mb-4" />
            <h2 className="text-2xl font-semibold text-brown-900 mb-2">Ваша корзина пуста</h2>
            <p className="text-brown-700 mb-6 text-center max-w-md">
              Похоже, вы еще не добавили товары в корзину. Перейдите в каталог, чтобы выбрать вкусные десерты.
            </p>
            <Link 
              to="/catalog" 
              className="inline-block py-3 px-6 bg-brown-700 text-white rounded-md hover:bg-brown-800 transition-colors font-medium"
            >
              Перейти в каталог
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-brown-900 mb-6">Корзина</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-brown-900">Товары в корзине</h2>
              </div>
              
              <div>
                {items.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex flex-col sm:flex-row items-start sm:items-center p-6 border-b border-gray-200 last:border-b-0"
                  >
                    <div className="w-full sm:w-20 h-20 flex-shrink-0 rounded-md overflow-hidden mb-4 sm:mb-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow sm:ml-4">
                      <h3 className="font-medium text-brown-900">{item.name}</h3>
                      {item.weight && (
                        <p className="text-sm text-brown-600 mb-2">Вес: {item.weight}</p>
                      )}
                      <p className="text-caramel-600 font-medium">{formatPrice(item.price)}</p>
                    </div>
                    <div className="flex items-center mt-4 sm:mt-0">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center bg-cream-100 hover:bg-cream-200 rounded-full transition-colors"
                        aria-label="Уменьшить количество"
                      >
                        <Minus size={16} className="text-brown-700" />
                      </button>
                      <span className="w-10 text-center font-medium text-brown-900">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-cream-100 hover:bg-cream-200 rounded-full transition-colors"
                        aria-label="Увеличить количество"
                      >
                        <Plus size={16} className="text-brown-700" />
                      </button>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="w-8 h-8 flex items-center justify-center bg-cream-100 hover:bg-cream-200 rounded-full ml-4 transition-colors"
                        aria-label="Удалить товар"
                      >
                        <X size={16} className="text-brown-700" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-6 bg-cream-50">
                <Link to="/catalog" className="text-brown-700 hover:text-brown-900 transition-colors">
                  ← Вернуться к покупкам
                </Link>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-brown-900">Сумма заказа</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-brown-700">Товары:</span>
                    <span className="font-medium text-brown-900">{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-brown-700">Доставка:</span>
                    <span className="font-medium text-brown-900">300 ₽</span>
                  </div>
                  {totalPrice >= 3000 && (
                    <div className="flex justify-between items-center text-green-600">
                      <span>Скидка на доставку:</span>
                      <span>-300 ₽</span>
                    </div>
                  )}
                </div>
                
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-brown-900">Итого:</span>
                    <span className="text-xl font-bold text-caramel-600">
                      {totalPrice >= 3000 
                        ? formatPrice(totalPrice) 
                        : formatPrice(totalPrice + 300)}
                    </span>
                  </div>
                  {totalPrice < 3000 && (
                    <p className="text-sm text-brown-700 mt-2">
                      Добавьте товаров еще на {formatPrice(3000 - totalPrice)} для бесплатной доставки
                    </p>
                  )}
                </div>
                
                <Button variant="primary" size="lg" fullWidth>
                  Оформить заказ
                </Button>
                
                <div className="mt-6">
                  <h3 className="font-medium text-brown-900 mb-2">Способы оплаты:</h3>
                  <div className="flex space-x-2">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Visa_2021.svg/1200px-Visa_2021.svg.png" 
                      alt="Visa" 
                      className="h-8"
                    />
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" 
                      alt="MasterCard" 
                      className="h-8"
                    />
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/MIR_logo.svg/2560px-MIR_logo.svg.png" 
                      alt="Mir" 
                      className="h-8"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-cream-100 rounded-lg p-6 mt-6 shadow-md">
              <h3 className="font-semibold text-brown-900 mb-3">Информация о доставке:</h3>
              <p className="text-sm text-brown-700 mb-2">
                • Доставка осуществляется ежедневно с 10:00 до 20:00
              </p>
              <p className="text-sm text-brown-700 mb-2">
                • Стоимость доставки по Москве в пределах МКАД: 300 ₽
              </p>
              <p className="text-sm text-brown-700">
                • При заказе от 3000 ₽ доставка бесплатная
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
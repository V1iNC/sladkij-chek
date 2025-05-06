import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Order } from '../types';
import { userLevels } from '../data/userLevels';
import { Gift, Package, Star, Award, Settings, LogOut } from 'lucide-react';
import Button from '../components/ui/Button';

// Временные данные для демонстрации
const mockUser: User = {
  id: '1',
  email: 'user@example.com',
  name: 'Иван Иванов',
  phone: '+7 (999) 123-45-67',
  bonusPoints: 2500,
  level: userLevels[2], // Гурман
  orders: [
    {
      id: '1',
      userId: '1',
      items: [
        {
          id: 1,
          name: 'Шоколадный торт',
          description: 'Нежный шоколадный бисквит',
          price: 2500,
          image: 'https://example.com/cake.jpg',
          category: 'cakes',
          popular: true,
          quantity: 1
        }
      ],
      totalPrice: 2500,
      status: 'completed',
      createdAt: '2024-02-10',
      bonusPointsEarned: 125
    }
  ]
};

const AccountPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'bonuses'>('profile');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout logic
    navigate('/');
  };

  const getNextLevel = () => {
    const currentLevelIndex = userLevels.findIndex(level => level.name === mockUser.level.name);
    return userLevels[currentLevelIndex + 1];
  };

  const nextLevel = getNextLevel();
  const pointsToNextLevel = nextLevel ? nextLevel.minPoints - mockUser.bonusPoints : 0;

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4">
                  <img 
                    src={mockUser.level.icon}
                    alt={mockUser.level.name}
                    className="w-full h-full"
                  />
                </div>
                <h2 className="text-xl font-semibold text-brown-900">{mockUser.name}</h2>
                <p className="text-brown-600">{mockUser.email}</p>
              </div>
              
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'profile' 
                      ? 'bg-brown-700 text-white' 
                      : 'text-brown-700 hover:bg-brown-50'
                  }`}
                >
                  <Settings size={20} className="mr-3" />
                  Профиль
                </button>
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'orders' 
                      ? 'bg-brown-700 text-white' 
                      : 'text-brown-700 hover:bg-brown-50'
                  }`}
                >
                  <Package size={20} className="mr-3" />
                  Мои заказы
                </button>
                <button
                  onClick={() => setActiveTab('bonuses')}
                  className={`w-full flex items-center px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'bonuses' 
                      ? 'bg-brown-700 text-white' 
                      : 'text-brown-700 hover:bg-brown-50'
                  }`}
                >
                  <Gift size={20} className="mr-3" />
                  Бонусы
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut size={20} className="mr-3" />
                  Выйти
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-brown-900 mb-6">Личные данные</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-brown-700 mb-2">Имя</label>
                    <input
                      type="text"
                      value={mockUser.name}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caramel-500"
                    />
                  </div>
                  <div>
                    <label className="block text-brown-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={mockUser.email}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caramel-500"
                    />
                  </div>
                  <div>
                    <label className="block text-brown-700 mb-2">Телефон</label>
                    <input
                      type="tel"
                      value={mockUser.phone}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caramel-500"
                    />
                  </div>
                  <Button variant="primary" type="submit">
                    Сохранить изменения
                  </Button>
                </form>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-brown-900 mb-6">История заказов</h2>
                <div className="space-y-4">
                  {mockUser.orders.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="font-medium text-brown-900">Заказ #{order.id}</p>
                          <p className="text-brown-600">
                            {new Date(order.createdAt).toLocaleDateString('ru-RU')}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          order.status === 'completed' 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.status === 'completed' ? 'Выполнен' : 'В обработке'}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex items-center">
                            <span className="text-brown-700">{item.name}</span>
                            <span className="mx-2 text-brown-400">×</span>
                            <span className="text-brown-700">{item.quantity}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                        <span className="text-brown-900 font-medium">
                          Итого: {order.totalPrice} ₽
                        </span>
                        <span className="text-caramel-600">
                          +{order.bonusPointsEarned} бонусов
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'bonuses' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-brown-900">Бонусная программа</h2>
                    <div className="flex items-center">
                      <Star size={24} className="text-caramel-500 mr-2" />
                      <span className="text-2xl font-bold text-brown-900">{mockUser.bonusPoints}</span>
                    </div>
                  </div>
                  
                  <div className="bg-cream-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center mb-4">
                      <Award size={24} className="text-caramel-600 mr-2" />
                      <div>
                        <h3 className="font-medium text-brown-900">Ваш текущий уровень: {mockUser.level.name}</h3>
                        <p className="text-brown-600">Постоянная скидка {mockUser.level.discount}%</p>
                      </div>
                    </div>
                    {nextLevel && (
                      <div>
                        <p className="text-brown-700">
                          До следующего уровня "{nextLevel.name}" осталось {pointsToNextLevel} бонусов
                        </p>
                        <div className="mt-2 h-2 bg-brown-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-caramel-500 rounded-full"
                            style={{ 
                              width: `${(mockUser.bonusPoints / nextLevel.minPoints) * 100}%` 
                            }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {userLevels.map((level, index) => (
                      <div 
                        key={level.name}
                        className={`p-4 rounded-lg border ${
                          level.name === mockUser.level.name
                            ? 'border-caramel-500 bg-caramel-50'
                            : 'border-gray-200'
                        }`}
                      >
                        <div className="flex items-center mb-2">
                          <img 
                            src={level.icon}
                            alt={level.name}
                            className="w-8 h-8 mr-2"
                          />
                          <h3 className="font-medium text-brown-900">{level.name}</h3>
                        </div>
                        <p className="text-brown-600 mb-2">От {level.minPoints} бонусов</p>
                        <p className="text-brown-900 font-medium">Скидка {level.discount}%</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold text-brown-900 mb-4">Как получать бонусы</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-caramel-100 rounded-full p-1 mr-3 mt-1">
                        <div className="w-4 h-4 bg-caramel-500 rounded-full"></div>
                      </div>
                      <span className="text-brown-700">5% от суммы каждого заказа возвращается бонусами</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-caramel-100 rounded-full p-1 mr-3 mt-1">
                        <div className="w-4 h-4 bg-caramel-500 rounded-full"></div>
                      </div>
                      <span className="text-brown-700">+500 бонусов в день рождения</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-caramel-100 rounded-full p-1 mr-3 mt-1">
                        <div className="w-4 h-4 bg-caramel-500 rounded-full"></div>
                      </div>
                      <span className="text-brown-700">Дополнительные бонусы за отзывы о заказах</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AccountPage;
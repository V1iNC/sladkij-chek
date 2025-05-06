import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">
            О кондитерском магазине Сладкий Чек
          </h1>
          <p className="text-brown-700 max-w-2xl mx-auto">
            Мы создаем сладкие шедевры с любовью к кондитерскому искусству и нашим клиентам
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-brown-900 mb-4">Наша история</h2>
            <p className="text-brown-700 mb-4">
              История "Сладкий Чек" началась в 2015 году с небольшой домашней кондитерской, 
              где наш шеф-кондитер Анна создавала десерты для друзей и семьи. Благодаря уникальным 
              рецептам, натуральным ингредиентам и безупречному вкусу, слава о наших десертах быстро 
              распространилась, и спрос постоянно рос.
            </p>
            <p className="text-brown-700 mb-4">
              В 2017 году мы открыли наш первый магазин в центре Москвы, а сегодня "Сладкий Чек" - 
              это известный бренд, любимый тысячами сладкоежек. Мы сохраняем традиции домашней выпечки,
              приготовленной с любовью, и одновременно следим за современными трендами в кондитерском искусстве.
            </p>
            <p className="text-brown-700">
              Наша миссия - приносить радость и создавать сладкие воспоминания для каждого клиента,
              делая особые моменты жизни еще более вкусными и запоминающимися.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden h-48 shadow-md">
                <img 
                  src="https://images.pexels.com/photos/2064354/pexels-photo-2064354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="История кондитерской" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64 shadow-md">
                <img 
                  src="https://images.pexels.com/photos/2267871/pexels-photo-2267871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Наша кондитерская сегодня" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-lg overflow-hidden h-64 shadow-md">
                <img 
                  src="https://images.pexels.com/photos/4099127/pexels-photo-4099127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Процесс приготовления" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-48 shadow-md">
                <img 
                  src="https://images.pexels.com/photos/8477975/pexels-photo-8477975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Наши ингредиенты" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-brown-900 mb-6 text-center">Наши принципы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream-50 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-caramel-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/2421/2421530.png" 
                  alt="Качество" 
                  className="w-8 h-8" 
                />
              </div>
              <h3 className="text-xl font-medium text-brown-900 mb-3 text-center">Высочайшее качество</h3>
              <p className="text-brown-700 text-center">
                Мы используем только натуральные ингредиенты высшего качества без искусственных добавок и консервантов.
              </p>
            </div>
            <div className="bg-cream-50 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-caramel-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/5217/5217748.png" 
                  alt="Мастерство" 
                  className="w-8 h-8" 
                />
              </div>
              <h3 className="text-xl font-medium text-brown-900 mb-3 text-center">Профессиональное мастерство</h3>
              <p className="text-brown-700 text-center">
                Наши кондитеры - настоящие мастера своего дела, постоянно совершенствующие свои навыки и техники.
              </p>
            </div>
            <div className="bg-cream-50 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-caramel-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/1534/1534938.png" 
                  alt="Индивидуальный подход" 
                  className="w-8 h-8" 
                />
              </div>
              <h3 className="text-xl font-medium text-brown-900 mb-3 text-center">Индивидуальный подход</h3>
              <p className="text-brown-700 text-center">
                Мы с вниманием относимся к каждому заказу и готовы реализовать даже самые смелые и необычные идеи.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-brown-900 mb-6 text-center">Наша команда</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 shadow-md">
                <img 
                  src="https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Анна Смирнова" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-brown-900 mb-1">Анна Смирнова</h3>
              <p className="text-caramel-600 mb-2">Шеф-кондитер, основатель</p>
              <p className="text-brown-700 text-sm">
                Создает уникальные рецепты и следит за качеством каждого десерта
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 shadow-md">
                <img 
                  src="https://images.pexels.com/photos/8105035/pexels-photo-8105035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Михаил Иванов" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-brown-900 mb-1">Михаил Иванов</h3>
              <p className="text-caramel-600 mb-2">Кондитер-шоколатье</p>
              <p className="text-brown-700 text-sm">
                Специалист по работе с шоколадом и кондитерским декором
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 shadow-md">
                <img 
                  src="https://images.pexels.com/photos/6205479/pexels-photo-6205479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Елена Петрова" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-brown-900 mb-1">Елена Петрова</h3>
              <p className="text-caramel-600 mb-2">Кондитер-оформитель</p>
              <p className="text-brown-700 text-sm">
                Создает уникальный дизайн тортов и десертов
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 shadow-md">
                <img 
                  src="https://images.pexels.com/photos/5418928/pexels-photo-5418928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Дмитрий Кузнецов" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-brown-900 mb-1">Дмитрий Кузнецов</h3>
              <p className="text-caramel-600 mb-2">Пекарь</p>
              <p className="text-brown-700 text-sm">
                Мастер по выпечке хлеба и изделий из теста
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-cream-100 rounded-lg p-8 shadow-md">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-brown-900 mb-2">Приглашаем посетить нашу кондитерскую</h2>
            <p className="text-brown-700">
              Приходите к нам, чтобы окунуться в атмосферу уюта и насладиться свежайшими десертами
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Наш магазин" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-caramel-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-4 h-4 bg-caramel-500 rounded-full"></div>
                  </div>
                  <span className="text-brown-700">Широкий ассортимент свежих десертов каждый день</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-caramel-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-4 h-4 bg-caramel-500 rounded-full"></div>
                  </div>
                  <span className="text-brown-700">Уютная атмосфера и приветливый персонал</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-caramel-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-4 h-4 bg-caramel-500 rounded-full"></div>
                  </div>
                  <span className="text-brown-700">Возможность заказать индивидуальный десерт</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-caramel-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-4 h-4 bg-caramel-500 rounded-full"></div>
                  </div>
                  <span className="text-brown-700">Дегустация и консультация при выборе торта на праздник</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-caramel-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-4 h-4 bg-caramel-500 rounded-full"></div>
                  </div>
                  <span className="text-brown-700">Мастер-классы по выпечке для взрослых и детей</span>
                </li>
              </ul>
              <p className="mt-6 text-center text-brown-900 font-medium">
                Ждем вас ежедневно с 9:00 до 21:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
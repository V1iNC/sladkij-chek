import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Анна Петрова',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    text: 'Заказывала торт на день рождения дочери. Все были в восторге! Очень вкусно, красиво и свежо. Буду заказывать еще не раз!',
    rating: 5
  },
  {
    id: 2,
    name: 'Иван Смирнов',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    text: 'Капкейки просто потрясающие! Всегда свежие, с натуральными ингредиентами. Рекомендую эту кондитерскую всем своим друзьям.',
    rating: 5
  },
  {
    id: 3,
    name: 'Елена Кузнецова',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    text: 'Заказывала торт на свадьбу. Получился настоящий шедевр! Гости до сих пор вспоминают, насколько он был красивым и вкусным.',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-cream-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-brown-700 max-w-2xl mx-auto">
            Мы ценим каждого клиента и стремимся превзойти все ожидания. Вот что говорят о нас наши покупатели.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star 
                    key={index}
                    size={18} 
                    className={index < testimonial.rating ? 'text-caramel-500 fill-caramel-500' : 'text-gray-300'}
                  />
                ))}
              </div>
              <p className="text-brown-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <span className="font-medium text-brown-900">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Шоколадный торт',
    description: 'Нежный шоколадный бисквит с кремом из бельгийского шоколада и свежими ягодами.',
    price: 2500,
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'cakes',
    popular: true,
    weight: '1.5 кг',
    ingredients: ['Бельгийский шоколад', 'Сливки', 'Яйца', 'Мука', 'Сахар', 'Ягоды']
  },
  {
    id: 2,
    name: 'Наполеон',
    description: 'Классический торт с тонкими слоями хрустящего теста и нежным заварным кремом.',
    price: 1800,
    image: 'https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'cakes',
    popular: true,
    weight: '1 кг',
    ingredients: ['Слоеное тесто', 'Заварной крем', 'Сливочное масло', 'Сахарная пудра']
  },
  {
    id: 3,
    name: 'Капкейки Ванильные',
    description: 'Воздушные капкейки с ванильным вкусом и нежной кремовой шапочкой.',
    price: 150,
    image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'cupcakes',
    popular: true,
    weight: '80 г',
    ingredients: ['Мука', 'Сахар', 'Яйца', 'Ваниль', 'Сливочное масло', 'Молоко']
  },
  {
    id: 4,
    name: 'Эклеры',
    description: 'Хрустящие эклеры с нежным заварным кремом и шоколадной глазурью.',
    price: 120,
    image: 'https://images.pexels.com/photos/5987010/pexels-photo-5987010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'pastries',
    popular: false,
    weight: '70 г',
    ingredients: ['Заварное тесто', 'Заварной крем', 'Шоколадная глазурь']
  },
  {
    id: 5,
    name: 'Медовик',
    description: 'Нежный медовый торт с карамельными нотками и ароматным кремом.',
    price: 1900,
    image: 'https://images.pexels.com/photos/5419198/pexels-photo-5419198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'cakes',
    popular: true,
    weight: '1.2 кг',
    ingredients: ['Мед', 'Сметана', 'Мука', 'Сахар', 'Сливочное масло']
  },
  {
    id: 6,
    name: 'Макаруны',
    description: 'Изысканные французские пирожные с различными вкусами и начинками.',
    price: 90,
    image: 'https://images.pexels.com/photos/3776939/pexels-photo-3776939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'pastries',
    popular: true,
    weight: '25 г',
    ingredients: ['Миндальная мука', 'Белки', 'Сахарная пудра', 'Начинка']
  },
  {
    id: 7,
    name: 'Чизкейк Нью-Йорк',
    description: 'Классический американский чизкейк с нежной текстурой и сливочным вкусом.',
    price: 2100,
    image: 'https://images.pexels.com/photos/4686960/pexels-photo-4686960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'cakes',
    popular: true,
    weight: '1.3 кг',
    ingredients: ['Сливочный сыр', 'Печенье', 'Сливочное масло', 'Сахар', 'Яйца']
  },
  {
    id: 8,
    name: 'Пирожное Картошка',
    description: 'Традиционное пирожное из бисквитной крошки с добавлением какао и коньяка.',
    price: 120,
    image: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'pastries',
    popular: false,
    weight: '100 г',
    ingredients: ['Бисквит', 'Какао', 'Сливочное масло', 'Сгущенное молоко']
  }
];
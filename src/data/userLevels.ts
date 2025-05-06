import { UserLevel } from '../types';

export const userLevels: UserLevel[] = [
  {
    name: "Новичок",
    minPoints: 0,
    discount: 0,
    icon: "https://cdn-icons-png.flaticon.com/512/1791/1791961.png"
  },
  {
    name: "Любитель сладкого",
    minPoints: 1000,
    discount: 3,
    icon: "https://cdn-icons-png.flaticon.com/512/1791/1791963.png"
  },
  {
    name: "Гурман",
    minPoints: 3000,
    discount: 5,
    icon: "https://cdn-icons-png.flaticon.com/512/1791/1791965.png"
  },
  {
    name: "Сладкий эксперт",
    minPoints: 7000,
    discount: 7,
    icon: "https://cdn-icons-png.flaticon.com/512/1791/1791967.png"
  },
  {
    name: "Кондитерский маэстро",
    minPoints: 15000,
    discount: 10,
    icon: "https://cdn-icons-png.flaticon.com/512/1791/1791969.png"
  }
];
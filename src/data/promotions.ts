import { Promotion } from '../types';

export const promotions: Promotion[] = [
  {
    id: 1,
    title: "Счастливые часы",
    description: "Скидка 20% на все десерты с 15:00 до 18:00 каждый будний день",
    image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    discount: 20,
    startDate: "2024-02-01",
    endDate: "2024-12-31",
    conditions: [
      "Действует только в будние дни",
      "Время акции: 15:00 - 18:00",
      "Не суммируется с другими акциями"
    ]
  },
  {
    id: 2,
    title: "День рождения",
    description: "Скидка 25% на торт в честь вашего дня рождения (действует 3 дня до и после даты)",
    image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    discount: 25,
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    conditions: [
      "Необходимо подтверждение даты рождения",
      "Скидка действует на один торт",
      "Заказ должен быть оформлен не менее чем за 24 часа"
    ]
  },
  {
    id: 3,
    title: "Комбо-набор",
    description: "При заказе торта получите 6 капкейков со скидкой 50%",
    image: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    discount: 50,
    startDate: "2024-02-01",
    endDate: "2024-03-31",
    conditions: [
      "Акция действует при заказе любого торта",
      "Скидка распространяется только на стандартные вкусы капкейков",
      "Количество акционных наборов ограничено"
    ]
  },
  {
    id: 4,
    title: "Первый заказ",
    description: "Скидка 15% на первый заказ при регистрации",
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    discount: 15,
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    conditions: [
      "Только для новых клиентов",
      "Минимальная сумма заказа 2000 ₽",
      "Не суммируется с другими акциями"
    ]
  }
];
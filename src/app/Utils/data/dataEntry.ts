
export const reviewFormFields = [

  {
    type: 'text',
    label: 'Ваше имя*',
    placeholder: 'Введите ваше имя',
  },
  {
    type: 'number',
    label: 'Ваш телефон*',
    placeholder: '+7 (977) 777-77-77',
  },
  {
    type: 'text',
    label: 'Ваш e-mail*',
    placeholder: 'Введите вашу почту',
  },
  {
    type: 'number',
    label: 'Телефон получателя (необязательно)',
    placeholder: '+7 (977) 777-77-77',
  },
  {
    type: 'text',
    label: 'Имя получателя (необязательно)',
    placeholder: 'Введите имя получателя',
  },
  {
    type: 'number',
    label: 'Комментарий к заказу',
    placeholder: 'Примечания к вашеу заказу, особые пожелания отделу доставки',
  },

];

interface ReviewText {
  text: string;
  color: string;

}

export const reviewStaticText: ReviewText[] = [
  { text: 'Оформление заказа', color: 'primary',  },
  { text: 'Контактные данные', color: 'primary',  },
];
// ➕ Вынесено в константу для генерации адреса
export const addressFields = [
  { label: 'Город*',xs12:true, placeholder: 'Выберите город', selects: true, options: [{ label: 'Москва', value: 'moscow' }, { label: 'Санкт-Петербург', value: 'spb' }] },
  { label: 'Улица*',xs12:true, placeholder: 'Введите улицу' },
  { label: 'Корп/стр', placeholder: 'Корп/стр' },
  { label: 'Дом', placeholder: 'Дом' },
  { label: 'Кв/офис', placeholder: 'Кв/офис' },
  { label: 'Время доставки', placeholder: '__/__/____' },
];

// ➕ Методы оплаты
export const paymentMethods = [
  'Банковская карта',
  'Наличными',
  'Apple Pay',
  'Google Pay',
  'Криптовалюта',
  'С расчетного счета',
];

// ➕ Итоги заказа
export const summaryData = [
  { label: 'СКИДКА', value: '0 ₽' },
  { label: 'ДОСТАВКА', value: '0 ₽' },
];
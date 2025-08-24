
type TextPart = {

    label?: string;
    placeholder?: string;

};



export const fillOut: TextPart[] = [

    { label: 'Наименование организации', placeholder: 'Введите наименование вашей организации' },
    { label: 'Почтовый адрес', placeholder: 'Введите почтовый адрес' },
    { label: 'Контактное лицо', placeholder: 'Введите имя контактного лица' },
    { label: 'Контактный номер телефона', placeholder: '+7 (977) 777-77-77' },
    { label: 'Стоимость букета сотруднику (если разная – указать)', placeholder: 'Укажите стоимость букета сотруднику' },
    { label: 'Адрес электронной почты', placeholder: 'Укажите ваш адрес электронной почты' },

];


export const fillOutcolumn2: TextPart[] = [
    { label: 'УНП', placeholder: 'УНП' },
    { label: 'Расчетный счет', placeholder: 'Введите номер расчетного счета' },
    { label: 'Код банка', placeholder: 'Код банка' },
    { label: 'Предполагаемое количество заявок в месяц', placeholder: 'Введите предполагаемое количество заявок в месяц' },
];



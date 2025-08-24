import { FooterColumn, MobileFooter } from "@/app/Utils/Interface/type";

export const footerColumns: FooterColumn[] = [
    {
        title: 'КАТАЛОГ',
        links: [
            { label: 'Популярные', href: '#' },
            { label: 'Сухоцветы', href: '#' },
            { label: 'Букеты роз', href: '#' },
            { label: 'Композиции из цветов', href: '#' },
            { label: 'Индивидуальный букет', href: '#' },
            { label: 'Букет на праздник', href: '#' },
            { label: 'Упаковка подарков', href: '#' },
            { label: 'Шары', href: '#' },
            { label: 'Открытки', href: '#' },
            { label: 'Конверты', href: '#' },
        ],
    },
    {
        title: 'БУКЕТ',
        links: [
            { label: 'Для девушки', href: '#' },
            { label: 'Для мужчины', href: '#' },
            { label: 'Для жены', href: '#' },
            { label: 'Для мамы', href: '#' },
            { label: 'Для коллеги', href: '#' },
            { label: 'Для начальника', href: '#' },
            { label: 'Для дочки', href: '#' },
            { label: 'Для детей', href: '#' },
            { label: 'Для женщины', href: '#' },
        ],
    },
    {
        title: 'ДОСТАВКА И ОПЛАТА',
        useSubtitle: true,
        links: [
            { label: 'О нас', href: '#' },
            { label: 'FAQ', href: '#' },
            { label: 'Контакты', href: '#' },
            { label: 'Для корпоративных клиентов', href: '/Pages/corporateClients' },
        ],
    },
];
export const mobileFooter: MobileFooter[] = [
    { title: 'КАТАЛОГ', href: '#' },
    { title: 'ДОСТАВКА И ОПЛАТА', href: '#' },
    { title: 'О нас', href: '#' },
    { title: 'FAQ', href: '#' },
    { title: 'Контакты', href: '#' },
    { title: 'Для корпоративных клиентов', href: '#' },

]
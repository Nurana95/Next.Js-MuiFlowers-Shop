
type TextPart = {
    text: string;
    subtitle?: 'subtitle24';
    height?: number | { xs: number; md: number };
    left?: string;
    center?: boolean;
};

type Section = {
    items: TextPart[][];
};

export const Condition: Section[] = [
    {
        items: [
            [
                { text: 'Количество заявок в месяц', center: true, subtitle: 'subtitle24', height: 60 },
                { text: '1-2', height: { xs: 104, md: 80 } },
                { text: '3-10', height: { xs: 104, md: 80 } },
                { text: 'Более 10', height: { xs: 148, md: 110 } },
            ],
            [
                { text: 'Приятные бонусы', subtitle: 'subtitle24', height: 60 },
                { text: 'Стоимость одной доставки по Минску — 10 рублей, за пределы МКАД — от 20 рублей', height: { xs: 104, md: 80 }, left: 'flex-start' },
                { text: 'Доставка бесплатно\nБукет-подарок руководителю в его День рождения', height: { xs: 104, md: 80 }, left: 'flex-start' },
                { text: 'Доставка бесплатно\nБукет-подарок руководителю в его День рождения\nПраздничная ель перед Новым годом', height: { xs: 148, md: 110 }, left: 'flex-start' },
            ]
        ]
    }
];




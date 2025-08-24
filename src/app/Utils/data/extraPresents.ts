export type Extra = {
    id: string;
    name: string;
    price: number;
    image: string;
};
export const extraPresents: Extra[] = [
    {
        id: 'star-balloon',
        name: 'ШАР “ЗВЕЗДА”',
        price: 11,
        image: '/extrapresent/balloon-star.png',
    },
    {
        id: 'heart-balloon',
        name: 'ШАР “СЕРДЦЕ”',
        price: 11,
        image: '/extrapresent/balloon-heart.png',
    },
]
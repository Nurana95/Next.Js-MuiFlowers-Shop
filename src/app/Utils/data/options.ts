interface Options {
    value: string;
    label: string;
}
export const options: Options[] = [
    { value: 'popular', label: 'По популярности' },
    { value: 'price-desc', label: 'Сначала дорогие' },
    { value: 'price-asc', label: 'Сначала дешевые' },

];
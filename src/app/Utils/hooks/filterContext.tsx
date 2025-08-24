'use client';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from 'react';
import { category } from '../data/categories';
import { ProductCard } from '../data/productCard';
import { ProductCardProps } from '../Interface/type';

interface FilterState {
  categories: string[];
  options: string[];
  priceRange: [number, number];
}

interface FilterContextProps {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  handleToggleCategory: (category: string) => void;
  handleToggleFilters: (option: string) => void;
  handleToggle: (value: string) => void;
  selectAllCategories: () => void;
  clearAll: () => void;
  filteredProducts: ProductCardProps[];
  isInitial: boolean;
  sortOrder: string;
  setSortOrder: (order: string) => void;
  handlePriceChange: (newRange: [number, number]) => void;
}

const defaultValues: FilterContextProps = {
  filters: { categories: [], options: [], priceRange: [0, 500] },
  setFilters: () => { },
  handleToggleCategory: () => { },
  handleToggleFilters: () => { },
  handleToggle: () => { },
  selectAllCategories: () => { },
  clearAll: () => { },
  filteredProducts: [],
  isInitial: true,
  sortOrder: 'popular',
  setSortOrder: () => { },
  handlePriceChange: () => { },
};

const FilterContext = createContext<FilterContextProps>(defaultValues);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    options: [],
    priceRange: [50, 400],
  });
  const [isInitial, setIsInitial] = useState(true);
  const [sortOrder, setSortOrder] = useState('popular');

  const handleToggleCategory = (category: string) => {
    const isSelected = filters.categories.includes(category);
    const newCategories = isSelected
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];

    setFilters((prev) => ({ ...prev, categories: newCategories }));
    setIsInitial(false);
  };

  const handleToggleFilters = (option: string) => {
    const isSelected = filters.options.includes(option);
    const newOptions = isSelected
      ? filters.options.filter((o) => o !== option)
      : [...filters.options, option];

    setFilters((prev) => ({ ...prev, options: newOptions }));
  };

  const handleToggle = (value: string) => {
    const isCategory = category.some((c) => c.title === value);
    if (isCategory) {
      handleToggleCategory(value);
    } else {
      handleToggleFilters(value);
    }
  };

  const handlePriceChange = (newRange: [number, number]) => {
    setFilters((prev) => ({ ...prev, priceRange: newRange }));
  };

  const selectAllCategories = () => {
    setFilters((prev) => ({
      ...prev,
      categories: category.map((c) => c.title),
    }));
    setIsInitial(false);
  };

  const clearAll = () => {
    setFilters({ categories: [], options: [], priceRange: [50, 400] });
    setIsInitial(true);
  };

  const filteredProducts = useMemo(() => {
    let result = ProductCard.filter((product) => {
      const categoryMatch =
        filters.categories.length === 0 ||
        filters.categories.includes(product.category);

      const optionMatch =
        filters.options.length === 0 ||
        filters.options.some((opt) => product.options?.includes(opt));

      const price = Number(product.price);
      const priceMatch =
        price >= filters.priceRange[0] && price <= filters.priceRange[1];

      return categoryMatch && optionMatch && priceMatch;
    }, [filters, sortOrder]);

    switch (sortOrder) {
      case 'price-asc':
        result = result.sort((a, b) => Number(a.price) - Number(b.price));
        break;
      case 'price-desc':
        result = result.sort((a, b) => Number(b.price) - Number(a.price));
        break;
      case 'popular':
      default:
        result = result.sort((a, b) => b.id - a.id);
        break;
    }

    return result;
  }, [filters, sortOrder]);

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
        handleToggleCategory,
        handleToggleFilters,
        handleToggle,
        selectAllCategories,
        clearAll,
        filteredProducts,
        isInitial,
        sortOrder,
        setSortOrder,
        handlePriceChange,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);

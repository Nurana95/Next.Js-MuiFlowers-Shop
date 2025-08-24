'use client'

import React from 'react'
import {
  Box,
  Typography,
  Slider,
  Button,
} from '@mui/material'
import { useFilterContext } from '@/app/Utils/hooks/filterContext'
import { colors } from '@/app/Styles/colors'
import { ProductCard } from '@/app/Utils/data/productCard'
import { filterData } from '@/app/Utils/data/filter'
import FilterBlock from './filterblock'
const FilterSidebar = () => {
  const { filters, clearAll, handlePriceChange, isInitial } = useFilterContext()

  let visibleBlocks = filterData

  // 🎯 Сужаем фильтр динамически на основе данных продуктов
  if (!isInitial && filters.categories.length > 0) {
    // 1. Получаем продукты выбранных категорий
    const filteredProducts = ProductCard.filter((product) =>
      filters.categories.includes(product.category)
    )

    // 2. Находим блоки, в которых хотя бы одна опция встречается
    visibleBlocks = filterData.filter((block) => {
      return block.options.some((option) =>
        filteredProducts.some((product) =>
          product.options?.includes(option)
        )
      )
    })
  }



  return (
    <>
      <Box
        sx={{
          mt: { xs: 0, md: 6 },
          maxWidth: 255,
          width: '100%',
          px: 2,
          py: { xs: 2, md: 3 },
          background: colors.transparentBlack,
          borderRadius: 6,
          position: 'relative',
          zIndex: 3
        }}
      >
        {visibleBlocks.map((block, index) => (
          <FilterBlock key={index} {...block} />
        ))}

        <Box mb={2}>
          <Typography variant="subtitle4" color="primary">
            СТОИМОСТЬ
          </Typography>
          <Slider
            value={filters.priceRange}
            onChange={(_, newValue) => handlePriceChange(newValue as [number, number])}
            min={50.00}
            max={400.00}
            step={10}
            size="small"
            valueLabelDisplay="auto"
            sx={{ color: 'white' }}
          />
          <Typography variant="body3" color="white">
            Цена: {filters.priceRange[0]}.00Р – {filters.priceRange[1]}.00Р
          </Typography>
        </Box>
        <Button fullWidth variant="outlined" onClick={clearAll}>
          СБРОСИТЬ ФИЛЬТР
        </Button>
      </Box>
    </>

  )
}

export default FilterSidebar

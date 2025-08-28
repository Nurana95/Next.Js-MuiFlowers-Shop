'use client';

import {
  Box,
  Chip,

} from '@mui/material';
import { useFilterContext } from '@/app/Utils/hooks/filterContext';
import { category } from '@/app/Utils/data/categories';

export default function Index() {
  const { handleToggle, filters } = useFilterContext();


  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 4 }}>
      {category.map((label, index) => (
        <Chip
          key={index}
          label={label.title}
          onClick={() => handleToggle(label.title)}
          clickable
          color={filters.categories.includes(label.title) ? 'primary' : 'default'}
        />
      ))}
    </Box>
  );
}

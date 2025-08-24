'use client';

import {
  Box,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useFilterContext } from '@/app/Utils/hooks/filterContext';
import { category } from '@/app/Utils/data/categories';

export default function Index() {
  const { handleToggle, filters } = useFilterContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


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

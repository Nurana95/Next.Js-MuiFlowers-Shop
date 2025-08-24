'use client'

import React from 'react'
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@mui/material'
import CustomIcon from '../../../Styles/Svg/Rectangle75.svg'
import CustomCheckedIcon from '../../../Styles/Svg/CustomCheckedIcon.svg'
import { FilterOption } from '@/app/Utils/Interface/type'
import { useFilterContext } from '@/app/Utils/hooks/filterContext'

const FilterBlock = ({ title, options }: FilterOption) => {
  const { handleToggle, filters } = useFilterContext()

  return (

    <Box mb={2} position={'relative'} zIndex={5}>
      <Typography variant="subtitle4" color="primary">
        {title}
      </Typography>
      <FormGroup>
        {options.map((label) => (
          <FormControlLabel
            key={label}
            control={
              <Checkbox
                icon={<CustomIcon />}
                checkedIcon={<CustomCheckedIcon />}
                sx={{ color: 'white', pb: 0.5 }}
                onClick={() => handleToggle(label)}
                checked={filters.options.includes(label)}
              />
            }
            label={
              <Typography variant="body3" color="white">
                {label}
              </Typography>
            }
          />
        ))}
      </FormGroup>
    </Box>
  )
}

export default FilterBlock

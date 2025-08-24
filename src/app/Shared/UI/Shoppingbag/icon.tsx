// Shared/UI/ShoppingCartIcon.tsx

'use client'

import { IconButton, Badge } from '@mui/material'
import { ShoppingBagIcon } from '@/app/Styles/Svg/SvgIcon'

interface ShoppingCartIconProps {
  count: number
  onClick?: () => void
}

export default function ShoppingCartIcon({ count, onClick }: ShoppingCartIconProps) {
  return (
    <IconButton sx={{ mr: { xs: 2, md: 0 } }} onClick={onClick}>
      {count > 0 ? (
        <Badge badgeContent={count} color="primary">
          {ShoppingBagIcon}
        </Badge>
      ) : (
        ShoppingBagIcon
      )}
    </IconButton>
  )
}

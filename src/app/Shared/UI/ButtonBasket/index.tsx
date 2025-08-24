'use client'

import { Button, ButtonProps } from '@mui/material'
import { useCart, Product } from '@/app/Utils/hooks/useCartContex'

interface AppAddToCartButtonProps extends ButtonProps {
  product: Product
}

export default function AppAddToCartButton({
  product,
  children = 'В корзину',
  ...props
}: AppAddToCartButtonProps) {
  const { addToCart } = useCart()

  return (
    <Button
      variant="outlined"
      fullWidth
      onClick={() => addToCart(product)}
      {...props}
    >
      {children}
    </Button>
  )
}

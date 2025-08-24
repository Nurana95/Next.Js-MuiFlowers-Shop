'use client'

import { Drawer, Box } from '@mui/material'
import CartPage from '@/app/Pages/cart/page'
import { useState } from 'react'
import { useCart } from '@/app/Utils/hooks/useCartContex'
import ShoppingCartIcon from './icon'

export default function ShoppingBag() {
    const [open, setOpen] = useState(false)
    const { count } = useCart()

    return (
        <>
            <ShoppingCartIcon count={count} onClick={() => setOpen(true)} />
            <Drawer
                anchor="right"
                open={open}
                transitionDuration={300}
                sx={{
                    width: '100%',
                    height: '100%',

                    background: {
                        xs: 'linear-gradient(180deg, rgb(9, 32, 27),  #43FFD2, #7D2253, rgb(22, 11, 19))',
                        md: 'transparent'
                    },
                    backdropFilter: 'blur(2px)',
                    overflow: 'hidden',

                }}

                PaperProps={{
                    sx: {
                        width: '100%',
                        background: 'transparent',
                        transition: 'all 0.3s ease-in-out',
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',

                    }}
                >
                    <Box sx={{ display: { xs: 'none', md: 'block' } }} pt={2}>
                        <ShoppingCartIcon count={count} />
                    </Box>

                    <CartPage onClose={() => setOpen(false)} /></Box>
            </Drawer>
        </>
    )
}

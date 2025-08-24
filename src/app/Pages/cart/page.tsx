'use client'

import BasketBanner from '@/app/Shared/basketBanner'
import { DeleteIcon } from '@/app/Styles/Svg/delete'
import { useCart } from '@/app/Utils/hooks/useCartContex'
import { Box, Grid, IconButton, Stack, Typography } from '@mui/material'
import OrderSummaryWithExtras from './OrderSummaryWithExtras'
import { colors } from '@/app/Styles/colors'
import Bgimage from './bgimage'
interface CartPageProps {
    onClose: () => void
}

export default function CartPage({ onClose }: CartPageProps) {
    const { items } = useCart()



    return (

        <Box sx={{
            width: { xs: 259, md: 420 }, bgcolor: colors.black,
            color: 'white',
            minHeight: 1024,
            height: '100%',
            p: { xs: '10px', md: '30px 20px' },
        }}>


            <Grid container size={12} mb={{ xs: '10px', md: '14px' }} justifyContent='space-between'>
                <Typography variant="subtitle17">Ваша корзина</Typography>
                <IconButton onClick={() => {
                    onClose()
                }}>{DeleteIcon}</IconButton> </Grid>
            {items.length === 0 && <Typography>Корзина пуста</Typography>}

            <Stack justifyContent='space-between' sx={{ height: '100%' }}>
                <Box> <BasketBanner /></Box>
                <OrderSummaryWithExtras />  </Stack>



            <Bgimage />

        </Box >

    )
}

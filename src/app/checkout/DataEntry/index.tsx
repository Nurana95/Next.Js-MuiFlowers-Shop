'use client';

import {
    Box,
    Grid, Stack, Typography,
} from '@mui/material';
import OrderForm from './OrderForm'
import BasketBanner from '@/app/Shared/basketBanner';
import { useCart } from '@/app/Utils/hooks/useCartContex';

export default function Index() {
    const { total } = useCart()


    return (
        <Box sx={{ mt: '25px', mb: '120px', position: 'relative' }}>
            <Typography color="primary" variant="h5">Оформление заказа</Typography>
            <Grid container mt='40px' spacing={0} justifyContent={'space-between'}>

                <Grid size={{ xs: 12, sm: 6, lg: 7 }}><OrderForm /> </Grid>
                <Grid size={4} sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Stack sx={{ maxWidth: 350 }} spacing={'45px'}>
                        <Box> <Typography variant="subtitle4" component='div' color='primary'>Ваш заказ:</Typography></Box>
                        <BasketBanner /></Stack>
                    <Box> <Typography variant="subtitle4" component='div' mt='20px' color='primary'>Предварительный итог: {total}.00 руб.</Typography></Box>


                </Grid>

            </Grid>

        </Box>
    );
}

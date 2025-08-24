'use client'

import {
    Box,
    Typography,
    Button,
    Grid,
    Divider,
    Stack,
    Link,
} from '@mui/material'
import Image from 'next/image'
import { useCart } from '@/app/Utils/hooks/useCartContex'
import { colors } from '@/app/Styles/colors'
import { extraPresents } from '@/app/Utils/data/extraPresents'

export default function OrderSummaryWithExtras() {
    const { total, addToCart } = useCart()

    return (
        <Box mt={4}  >
            <Typography variant="subtitle7" gutterBottom>
                ДОБАВЬТЕ К ЗАКАЗУ{' '}
                <Typography component="span" variant="subtitle16">
                    ШАРЫ:
                </Typography>
            </Typography>

            {/* Баллоны */}
            <Grid container justifyContent='space-between' mt={'12px'}>
                {extraPresents.map((item) => (
                    <Grid key={item.id} size={{ xs: 6 }} container
                        spacing={{ xs: '5px', md: '10px' }}>
                        <Box sx={{
                            position: 'relative',
                            height: { xs: 40, md: 60 },
                            width: { xs: 40, md: 60 },
                        }}>
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                style={{ objectFit: 'cover' }}
                            /></Box>
                        <Stack justifyContent={'space-between'}>

                            <Typography variant="subtitle20">
                                {item.name}
                            </Typography>
                            <Typography variant="subtitle19" >
                                {item.price.toFixed(2)} Р
                            </Typography>
                            <Link
                                component="button"
                                variant="caption"
                                textAlign='start'
                                onClick={() =>
                                    addToCart({ ...item, id: item.id, price: String(item.price), image: item.image, name: item.name })
                                }
                            >
                                ДОБАВИТЬ
                            </Link>
                        </Stack>
                    </Grid>
                ))}
            </Grid>

            <Divider sx={{ borderColor: colors.green, mt: '30px', mb: '10px' }} />
            <Typography variant="subtitle4" color="primary">
                ПРЕДВАРИТЕЛЬНЫЙ ИТОГ: {total.toFixed(2)} РУБ.
            </Typography>
            <Typography variant="body1" whiteSpace={'pre-line'}>
                Чтобы узнать стоимость доставки, перейдите {'\n'}к оформлению заказа.
            </Typography>

            <Box my='20px'>            <Link href="/checkout" >

                <Button sx={{ maxWidth: '100%' }}
                    variant="outlined">
                    ОФОРМИТЬ ЗАКАЗ
                </Button>
            </Link>
            </Box>
        </Box >
    )
}

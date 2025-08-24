'use client'

import {
    Box,
    Typography,
    Stack,
} from '@mui/material'
import Image from 'next/image'
import InDecreaseBanner from '../inDeCreasebutton'
import { colors } from '@/app/Styles/colors'
import { useCart } from '@/app/Utils/hooks/useCartContex'

interface BasketProps {
    maxwidth?: number
}

export default function BasketBanner({ maxwidth }: BasketProps) {
    const {
        items,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useCart()

    return (
        <>
            {items.map((item) => (
                <Box key={item.id} sx={{
                    position: 'relative', zIndex: 1,
                    maxWidth: maxwidth, width: '100%'
                }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderBottom: `1px solid ${colors.grey}`,
                            borderTop: item.id === items[0].id ? `1px solid ${colors.grey}` : 0,
                            py: { xs: '10px', md: '20px' },
                            height: '100%'

                        }}
                    >
                        <Image
                            src={item.image}
                            alt={item.name || 'Товар'}
                            width={60}
                            height={80}
                            style={{ objectFit: 'cover' }}
                        />
                        <Stack
                            justifyContent={'space-between'}
                            sx={{
                                ml: { xs: '10px', md: '20px' }, width: '100%', height: 80
                            }}
                        >
                            <Box
                                display='flex'
                                justifyContent={'space-between'}
                            >
                                <Typography variant='subtitle18'>{item.name}</Typography>
                                <Typography variant='subtitle4' color='primary'>
                                    {item.price}.00₽
                                </Typography>
                            </Box>

                            <Box display={'flex'} alignItems={'flex-end'} justifyContent={'space-between'}>
                                <InDecreaseBanner
                                    width={{ xs: 80, md: 100 }}
                                    height={30}
                                    quantity={item.quantity}
                                    onIncrease={() => increaseQuantity(item.id)}
                                    onDecrease={() => decreaseQuantity(item.id)}
                                />

                                <Typography
                                    variant='body4'
                                    sx={{ cursor: 'pointer', textUnderlineOffset: '2px',
                                         textDecoration: 'underline' }}
                                    role="button"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Удалить
                                </Typography>
                            </Box>
                        </Stack>
                    </Box >
                </Box >
            ))
            }
        </>
    )
}

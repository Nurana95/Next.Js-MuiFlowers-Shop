'use client';
import { Box, Grid, Stack, Typography } from '@mui/material';
import InDecreaseBanner from '../../../inDeCreasebutton';
import { ProductCardProps } from '@/app/Utils/Interface/type';
import AppAddToCartButton from '@/app/Shared/UI/ButtonBasket';

type Props = {
    product: ProductCardProps;
    isMobile: boolean;
    backButton: React.ReactNode;
};

export default function ProductInfo({ product, isMobile, backButton }: Props) {
    return (
        <Grid size={{ xs: 12, md: 5, lg: 6 }} container alignContent="space-between">
            <Grid size={{ xs: 12, lg: 10 }}>
                <Stack spacing={3}>
                    <Stack spacing={2}>
                        {!isMobile && backButton}
                        <Typography variant="h4">{product.name}</Typography>
                        <Typography variant="h5" component="div" color="primary">
                            {product.price}.00 ₽
                            <Typography ml={2} variant="subtitle10">
                                {product.price}.00 ₽
                            </Typography>
                        </Typography>
                    </Stack>

                    <Typography component="span">
                        <Typography component="span" fontWeight={700}>
                            СОСТАВ:
                        </Typography>{' '}
                        {product.composition}
                    </Typography>

                    <Typography variant="body1">{product.description}</Typography>

                    <Box sx={{ whiteSpace: 'pre-line' }}>
                        <Typography variant="subtitle11">
                            <Typography component="span" variant="subtitle11" fontWeight={700}>
                                Категории:
                            </Typography>
                            {product.categoriesDescription}{'\n'}
                        </Typography>
                        <Typography variant="subtitle11" mt={1}>
                            <Typography component="span" variant="subtitle11" fontWeight={700}>
                                Метки:
                            </Typography>{' '}
                            {product.tags}
                        </Typography>
                    </Box>
                </Stack>
            </Grid>

            <Grid size={{ xs: 12 }} mt={4} container spacing={{ xs: '10px', md: '30px' }}>
                <AppAddToCartButton product={product} />

                <InDecreaseBanner width={{ xs: 108, md: 160 }} height={55} />
            </Grid>
        </Grid>
    );
}

'use client';

import { Box,  Grid, Typography } from '@mui/material';
import { useMobileDrawer } from '@/app/Utils/hooks/useMobileDrawer';
import { ProductCard } from '@/app/Utils/data/productCard';

import BreadcrumbNav from './ProductNav';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import LightChefronUpsm from '../../../Styles/Svg/light_chevron-up.svg';

type BreadcrumbsProps = {
    id: string;
};

export default function Breadcrumbs({ id }: BreadcrumbsProps) {
    const product = ProductCard.find(p => String(p.id) === id);
    const { isMobile } = useMobileDrawer('md');

    if (!product) {
        return <Typography color="error">Товар не найден</Typography>;
    }

    const BackButton = (
        <Box component="a" display="flex" gap={1} alignItems="center">
            <LightChefronUpsm />
            <Typography variant="body4">НАЗАД</Typography>
        </Box>
    );

    return (
        <>
            <BreadcrumbNav product={product} />
            <Grid container spacing={{ xs: 2, lg: '30px' }} sx={{ pt: { xs: '20px', md: '64px' } }}>
                {isMobile && BackButton}
                <Grid size={{ xs: 12, md: 'auto' }} container spacing={{ xs: 2, lg: '30px' }}
                    alignItems="flex-end">
                    <ProductImage product={product} isMobile={isMobile} />
                </Grid>
                <ProductInfo product={product} isMobile={isMobile} backButton={BackButton} />
            </Grid>
        </>
    );
}

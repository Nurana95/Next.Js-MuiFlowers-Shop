'use client';

import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    CardActionArea,
    Avatar,
    Grid,
    IconButton,
    Box,
    Link,
} from '@mui/material';
import { chevronLeft, chevronRight } from '../../Styles/Svg/chefron';
import { colors } from '@/app/Styles/colors';
import { useSlider } from '@/app/Utils/hooks/slider';
import { BannerProductProps } from '@/app/Utils/Interface/type';
import { arrowStyle } from '@/app/Styles/sx';
import AppAddToCartButton from '../UI/ButtonBasket';

export default function Banner({
    visibleCount = 15,
    Chevron,
    size,
    showAvatar,
    withFilter,
    products = [],
}: BannerProductProps) {
    const { index, handleNext, handlePrev } = useSlider(products.length, visibleCount);
    const visibleProducts = products.slice(index, index + visibleCount);
    return (
        <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Grid container spacing={4} >
                {visibleProducts.map((product) => (
                    <Grid size={{ xs: 12, sm: 6, md: size ?? 4 }} key={product.id}>

                        <Card sx={{ boxShadow: 'none', maxWidth: 350, width: '100%' }} >
                            {showAvatar && (
                                <Avatar
                                    sx={{
                                        position: 'absolute',
                                        top: -10,
                                        right: 10,
                                        bgcolor: colors.pinkishPurple,
                                    }}
                                >
                                    New
                                </Avatar>
                            )}

                            <CardActionArea >
                                <Link href={`/product/${product.id}`} style={{ textDecoration: 'none' }}>

                                    <CardMedia
                                        component="img"
                                        height="100%"
                                        image={product.image}
                                        alt={product.subtitle}
                                        sx={{ filter: withFilter ? { xs: 'none', md: 'grayscale(100%)' } : 'none' }}
                                    /></Link>
                                <CardContent sx={{ px: 0 }}>
                                    <Typography variant="subtitle3" component="div" sx={{ mb: 1.5 }}>
                                        {product.subtitle}
                                    </Typography>
                                    <Typography variant="subtitle4" sx={{ mr: 1 }}>
                                        {product.price}
                                    </Typography>
                                    <Typography variant="subtitle5">{product.newPrice}</Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActions
                                sx={{ pl: 0, }}
                            >
                                <AppAddToCartButton product={product} />
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {Chevron && (
                <Box>
                    <IconButton disableRipple onClick={handlePrev} sx={arrowStyle('left')}>
                        {chevronLeft}
                    </IconButton>

                    <IconButton disableRipple onClick={handleNext} sx={arrowStyle('right')}>
                        {chevronRight}
                    </IconButton>
                </Box>
            )}

        </Box>
    );
}



'use client';

import {
    Box,
    Link,
    Container,
    Typography,
    Grid,
} from '@mui/material';
import SocialMedia from '../../../Shared/SocialMediaBanner';
import BackgroundImagine from './bgImage';
import SortedBy from '../sortedBy';
import Accordions from './accordinations';
import Category from '../sortedBy/category'
import { useState } from 'react';
import { Cataloq } from '@/app/Utils/data/BgImage/cataloq';
import { useMobileDrawer } from '@/app/Utils/hooks/useMobileDrawer';

export default function Index() {
    const { isMobile } = useMobileDrawer('sm');

    const [activeIndex, setActiveIndex] = useState<number | false>(false);

    return (
        <Box sx={{
            width: '100%',
            bgcolor: 'black', position: 'relative',
            pt: { xs: '20px', md: '80px' },
            overflow: { xs: 'visible', md: 'hidden' }


        }}>
            <Container>
                <Box sx={{
                    position: 'relative',
                    zIndex: 3,
                }}>
                    {/* Breadcrumbs */}
                    <Link href="/" variant="subtitle7">
                        Главная
                    </Link>
                    <Typography component="span" >
                        {' / '}
                    </Typography>
                    <Link href="/Pages/Kataloq"
                        variant="subtitle7">
                        Каталог
                    </Link>

                    {/* Header */}
                    <Grid container mt={{ xs: 2, md: 4 }}>
                        <Grid size={{ xs: 12, md: 9.6 }}
                            sx={{
                                borderRadius: { xs: 0, md: 4 },
                                bgcolor: 'transparent',
                                backdropFilter: { xs: 'none', md: 'blur(20px)' },
                                py: { md: 4 },
                                px: { md: 2 },
                                pl: { sm: 2 },

                            }}
                        >

                            <Box >
                                <Typography variant="h2">каталог</Typography>
                                <Typography variant="h2" sx={{
                                    textAlign: 'center',
                                    mr: { xs: 4, md: 0 }
                                }}>букетов</Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: { xs: 'flex-end', md: 'center' },
                                    mt: { xs: 2, md: 7 },
                                    mb: { xs: 4, md: 0 },

                                }}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{
                                        letterSpacing: 0,
                                        ml: { xs: 7, md: 0 },
                                    }}
                                >
                                    В нашем магазине самый большой выбор букетов для любых событий:
                                </Typography>
                            </Box>

                            {/* Фильтры */}
                            {isMobile ? (<Accordions activeIndex={activeIndex}
                                setActiveIndex={setActiveIndex} />) : (<Category />)}
                        </Grid>
                    </Grid>
                    <SocialMedia />
                </Box>
                <SortedBy />
            </Container>
            {activeIndex === 0 && <BackgroundImagine items={Cataloq.slice(10, 12)} />}
            <BackgroundImagine items={Cataloq.slice(0, 10)} />
        </Box >
    );
}

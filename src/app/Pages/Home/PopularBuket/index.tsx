'use client';

import { Box, Typography, Container, Link, } from '@mui/material';
import Banner from '../../../Shared/ProductBanner';
import { ProductCard } from '@/app/Utils/data/productCard';
import { colors } from '@/app/Styles/colors';
import BackgroundImagine from './bgImage'
import { chevronRightLittle } from '../../../Styles/Svg/chefron'

export default function PopularFlowers() {

  return (
    <>
      <Box sx={{
        bgcolor: colors.black,
        position: { md: 'relative' },
        zIndex: 2, pb: 12,
      }}>
        <Container sx={{
          position: { xs: 'relative', },
          zIndex: 2,
        }}>
          <Box sx={{
            width: { xs: '90%', md: '68%' },
            mb: { xs: 0, md: 5 }
          }}>
            <Typography variant="h2">Популярные</Typography>
            <Typography variant="h2"
              sx={{ textAlign: { xs: 'center', md: 'right' } }}>букеты</Typography>
          </Box>
          <Typography variant="subtitle2"
            sx={{ textAlign: { xs: 'right', md: 'center' } }}>Самые любимые композиции наших клиентов</Typography>
          <Box sx={{ mt: { xs: 2, md: 10 } }}>

            <Banner
              maxWidth={220}
              withFilter={true}
              Chevron={true}
              showAvatar={true}
              products={ProductCard}
              visibleCount={3} />
          </Box>
          <Box sx={{ mt: { xs: 4, md: 10 } }}>
            <Typography
              component={Link}
              variant="subtitle9"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                color: colors.pinkishPurple,
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: colors.green,
                },
              }}
            >
              смотреть весь каталог
              {chevronRightLittle}
            </Typography>

          </Box>

        </Container>
        <BackgroundImagine />

      </Box >
    </>

  );
}

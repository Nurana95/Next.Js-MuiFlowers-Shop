'use client';

import { Box, Typography, Container, Grid, } from '@mui/material';
import { colors } from '@/app/Styles/colors';
import Image from 'next/image';
import SocialMedia from '../../../../Shared/socialIcon';
import { OurSocialNetworksIcon } from '../../../../Styles/Svg/SvgIcon'
import BackgroundImagine from './bgImage'
const images = [
  '/galerySocial4.png',
  '/galerySocial3.png',
  '/galerySocial2.png',
  '/galerySocial1.png',
];
export default function Index() {
  return (
    <Box sx={{ bgcolor: colors.black, position: 'relative', overflow: 'hidden', py: { xs: 12, md: 27 } }}>
      <Container sx={{ position: 'relative', zIndex: 5 }} >
        <Grid container spacing={{ xs: 8, md: 0 }} justifyContent={'space-between'} >
          <Grid size={{ xs: 12, md: 8 }} sx={{ order: { xs: 2, md: 1 } }}>
            <Grid container spacing={{ xs: 1, md: 3 }}>
              {images.map((src, index) => (
                <Grid size={{ xs: 6, md: 'auto' }} key={index}>
                  <Box sx={{ maxWidth: 160, minHeight: 160 , width:'100%', height:'100%'}}>
                    <Image
                      src={src}
                      alt={`gallery-image-${index + 1}`}
                      width={160}
                      height={160}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    /></Box>
                </Grid>))}
            </Grid>

          </Grid>
          <Grid size={{ xs: 12, md: 4 }} sx={{
            height: 'auto', position: 'relative',
            order: { xs: 1, md: 2 }
          }}>

            <Grid container sx={{
              height: '100%',
              flexDirection: { xs: 'row', md: 'column', justifyContent: 'space-between', }
            }}
            >
              <Grid size={{ xs: 5, md: 'auto' }} sx={{
                maxWidth: 350,
                borderBottom: `1px solid ${colors.green}`,
                position: 'relative'
              }}>

                <Box sx={{
                  position: 'absolute',
                  transform: {
                    xs: 'translateY(-30%)',
                    md: 'translateY(-50%)'
                  }
                }}>{OurSocialNetworksIcon}</Box>
              </Grid>
              <Grid size={{ xs: 6, md: 12 }} sx={{ gap: 2, display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
                <SocialMedia /></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ position: 'absolute', zIndex: 1, bottom: 50, transform: 'translateY(-50%)', left: -10, }}><Typography variant="h1Oswald" sx={{ opacity: 0.1 }}>instagram</Typography></Box>
      <BackgroundImagine />
    </Box>
  );
}

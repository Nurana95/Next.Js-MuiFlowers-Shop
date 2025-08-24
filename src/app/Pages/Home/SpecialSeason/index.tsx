'use client';

import { Box, Typography, Container, Grid, Stack, Button } from '@mui/material';
import { colors } from '@/app/Styles/colors';
import Image from 'next/image';
import ArrowCircle from '../../../Styles/Svg/ArrowCircle.svg';
import ArrowCircleRight from '../../../Styles/Svg/ArrowCircleRight.svg';
import { imagesSeasons } from '../../../Utils/data/specialSeason';
import BackgroundImagine from './bgImage'
import DividerBanner from '@/app/Shared/Divider';
import { benefits } from '@/app/Utils/data/SpecialSeasons';




export default function Index() {
  return (
    <Box sx={{ bgcolor: colors.black, position: { xs: '', md: 'relative' }, zIndex: 0, pb: 12 }}>
      <Container>
        <Grid container alignItems='center' justifyContent='space-between' mb={4}>
          <Grid size={{ xs: 10.5, md: 8.5 }}>
            <Box>
              <Typography variant="h2">особенный</Typography>
              <Box sx={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'flex-end', gap: { xs: 1, md: 5 }
              }}>
                <DividerBanner maxWidth={255} borderColor={colors.winePurple} />

                <Typography variant="h2">повод?</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ md: 'auto' }} sx={{ display: { xs: 'none', md: 'block' } }} >
            <Image
              src='/specualSeason1.png'
              alt='specialSeason'
              width={255}
              height={223}
              style={{ objectFit: 'cover', borderRadius: '20px' }}
            />
          </Grid>
        </Grid>

        <Grid container justifyContent='flex-end'>
          <Grid size={{ xs: 12, md: 11 }} justifyContent='space-between' container>
            <Grid size={{ xs: 12, lg: 3.1 }} sx={{ position: 'relative' }}>
              <Stack spacing={{ xs: 3, md: 4 }}>
                <Typography
                  variant="body1"
                  sx={{
                    letterSpacing: { xs: '0.2px', md: '0.56px' },
                    textTransform: { xs: 'none', md: 'uppercase' },
                  }}
                >
                  Мы готовы прийти на помощь и собрать уникальный букет, на любой вкус, бюджет и для любого события по вашему индивидуальному заказу.
                </Typography>
                <Box sx={{ px: { xs: 2, md: 0 } }}>
                  {benefits.map((text, i) => (
                    <Typography
                      key={i}
                      variant="body1"
                      sx={{
                        display: 'list-item',
                        '::marker': {
                          fontSize: '10px',
                        },
                        mb: i === benefits.length - 1 ? 4 : 2
                      }}
                    >
                      {text}
                    </Typography>
                  ))}
                  <Button sx={{ px: 2 }} fullWidth>
                    собрать индивидуальный букет
                  </Button>
                </Box>
              </Stack>
              <Box sx={{ display: { xs: 'none', lg: 'block' }, position: 'absolute', left: -30, bottom: 30 }}>
                <ArrowCircle />
              </Box>
              <Box sx={{ display: { xs: 'block', md: 'none' }, position: 'absolute', right: 0, bottom: 30 }}>
                <ArrowCircleRight />
              </Box>
            </Grid>

            <Grid size={8.6} sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'space-between'
            }}>
              {imagesSeasons.map((img, i) => (
                <Grid key={i}>
                  <Image
                    src={img.src}
                    alt=''
                    width={img.width}
                    height={img.height}
                    style={{ objectFit: 'cover', borderRadius: '20px' }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <BackgroundImagine />
    </Box>
  );
}

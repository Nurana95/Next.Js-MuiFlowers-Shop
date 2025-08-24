'use client';

import { Box, Typography, Container, Grid, Divider, Stack } from '@mui/material';
import { colors } from '@/app/Styles/colors';
import { steps } from '@/app/Utils/data/steps';
import { DividerPink } from '@/app/Styles/sx';
import { SignatureIcon } from '@/app/Styles/Svg/SvgIcon';
import BackgroundImagine from './bgImage';


export default function HowToOrder() {
  const leftSteps = steps.slice(0, 3);
  const rightSteps = steps.slice(3);
  const sizes = [6, 8, 10];

  return (
    <>
      <Box sx={{
        zIndex: 0,
        bgcolor: colors.black, position: 'relative', pt: 10,
        overflow: { xs: 'visible', },
      }}>

        <Container >
          <>
            <Typography variant="h2" sx={{
              textAlign: { xs: 'center', lg: 'left' },
              whiteSpace: 'pre-line'
            }}>Как сделать{'\n'}
              заказ</Typography>
          </>
          <Grid container justifyContent='flex-end' sx={{ position: 'relative', zIndex: 1 }}>

            <Grid size={{ xs: 12, md: 8 }}>
              <Box sx={{ display: { xs: 'none', md: 'block' } }}> <Divider sx={{ ...DividerPink, mt: 4, mb: 6 }} /></Box>
              <Box sx={{ borderRight: { xs: 0, md: `1px solid ${colors.pinkishPurple}`, }, }}>

                <Grid container spacing={{ xs: 3, md: 16 }} sx={{ mr: { xs: 0, md: 16 } }} >

                  <Grid size={{ xs: 12, md: 6 }} >

                    <Stack spacing={{ xs: 3, lg: 6 }} >
                      {leftSteps.map((step, index) => (

                        <Grid key={index} justifyContent='flex-end' container>
                          <Grid size={{ xs: sizes[index], md: 12 }} >
                            {(index === 0) && <Box sx={{ display: { xs: 'block', md: 'none' } }}> <Divider sx={{ ...DividerPink, my: 3 }} /></Box>
                            }

                            <Typography variant="h5" color='warning'>
                              {step.title}
                            </Typography>
                            <Typography variant="body1" sx={{ textTransform: { xs: 'none', md: 'uppercase' } }} mt={2}>
                              {step.text}
                            </Typography>
                          </Grid></Grid>
                      ))}
                    </Stack>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }} >
                    <Stack spacing={{ xs: 3, md: 6 }}>
                      {rightSteps.map((step, index) => (
                        <Box key={index}>
                          <Typography variant="h5" color='warning'>
                            {step.title}
                          </Typography>
                          <Typography variant="body1" sx={{ textTransform: { xs: 'none', md: 'uppercase' } }} mt={2} >
                            {step.text}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ textAlign: 'right', position: 'relative', bottom: { xs: 10, md: 100 }, right: 0 }}> {SignatureIcon}</Box>
            </Grid>
          </Grid>
        </Container>
        <BackgroundImagine />
      </Box >
    </>
  );
}

'use client';

import { colors } from '@/app/Styles/colors';
import { extras } from '@/app/Utils/data/paymentMethod';
import { Box, Typography, Grid, } from '@mui/material';



export default function Index() {
    return (
        <Box sx={{ mt: {xs:'60px',md:'100px'}, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
                variant="subtitle13"
            >Способы оплаты:
            </Typography>

            <Grid mt='20px'
                container justifyContent="space-between" spacing={{ xs: '25px', md: 2 }}>
                {extras.map((item, index) => (
                    <Grid
                        key={index}
                        size={{ xs: 12, sm: 6, md: 3 }}
                        display="flex"
                        justifyContent="center"
                    >
                        <Box
                            sx={{
                                borderRadius: 5,
                                textAlign: 'center',
                                position: 'relative',
                                bgcolor: colors.black30,
                                backdropFilter: 'blur(20px)',
                                width: { xs: 198, md: 255 },
                                p: { xs: '20px 10px', lg: '20px 30px' },
                                height: '100%',
                                minHeight: { xs: 185, md: '100%', lg: 211 }
                            }}
                        >
                            {/* Кружок сверху */}
                            <Box sx={{
                                display: 'flex',
                                height: '100%',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <Box
                                    sx={{
                                        width: 11,
                                        minHeight: 11,
                                        borderRadius: '50%',
                                        bgcolor: colors.brown,
                                        mb: { xs: 0, md: '15px' },

                                    }}
                                />

                                <Box sx={{
                                    height: '100%',
                                    alignItems: 'center',
                                    display: 'flex',
                                }}>

                                    <Typography
                                        variant='subtitle21'
                                        component='h6'
                                        sx={{
                                            textTransform: 'none',
                                            whiteSpace: { xs: 'none !important', lg: 'pre-line' },
                                            letterSpacing: '0.96px',
                                        }}
                                    >
                                        {item.text}
                                    </Typography></Box></Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

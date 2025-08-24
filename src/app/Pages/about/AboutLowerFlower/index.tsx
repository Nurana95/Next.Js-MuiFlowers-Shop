'use client';

import { colors } from '@/app/Styles/colors';
import { finalText, flowerBenefits, guaranteeText, poeticText, teamDescription } from '@/app/Utils/data/benefits/abouts';
import {
    Box,
    Typography,
    Grid,
    List,
    ListItem,
    Stack,
} from '@mui/material';
import React from 'react';



export default function Index() {
    return (
        <><Box pb={{ xs: '106px', md: '200px' }}>
            <Stack mt={{ xs: '90px', md: "100px" }} spacing={{ xs: '60px', md: "100px" }}>
                {/* LOVER FLOWER */}<Grid container justifyContent='flex-end'>
                    <Grid size={{ xs: 12, md: 10 }}>
                        <Stack spacing={{ xs: '60px', md: '90px' }}>
                            <Stack spacing={{ xs: '4px', md: '20px' }}>
                                <Box>
                                    <Typography variant="h3">lover</Typography>
                                    <Box display="flex" alignItems="center">
                                        <Typography variant="h3">flower</Typography>
                                        <Box
                                            ml={2}
                                            sx={{
                                                border: `1px solid ${colors.green}`,
                                                height: '1px',
                                                width: { xs: 20, md: 60 },
                                            }}
                                        />
                                    </Box></Box>

                                {/* Описание команды */}
                                <Grid container justifyContent='flex-end'
                                >
                                    <Grid size={10}
                                        sx={{
                                            p: { xs: '10px', md: '40px 20px' },
                                            backdropFilter: 'blur(20px)',
                                            bgcolor: colors.lightBlack,
                                            width: 690
                                        }}
                                    >
                                        {teamDescription.map((text, idx) => (
                                            <Typography key={idx} variant="subtitle15" sx={{
                                                textTransform: text.uppercase ? 'uppercase' : 'none',

                                            }}>
                                                {text.text}
                                            </Typography>
                                        ))}
                                    </Grid>
                                </Grid>





                            </Stack>

                            {/* ГАРАНТИИ */}
                            <Grid size={{ xs: 12, lg: 11 }}>
                                <Typography variant="h3" mb={{ xs: 1, md: '20px' }}>ГАРАНТИИ</Typography>
                                {guaranteeText.map((text, idx) => (
                                    <Typography key={idx} variant="subtitle15"
                                        component='h6'
                                        sx={{
                                            letterSpacing: '0.3px',
                                            pr: '4px'
                                        }}>
                                        {text.text}
                                    </Typography>
                                ))}
                            </Grid>

                            {/* Преимущества */}
                            <Stack spacing={{ xs: '4px', md: '20px' }}>
                                <Typography variant="h3" sx={{ whiteSpace: 'pre-line' }}>
                                    Заказ букетов на{'\n'} сайте компании{'\n'} Lower Flower – это:
                                </Typography>
                                <Grid container justifyContent='flex-end'>
                                    <Box sx={{
                                        width: { xs: '100%', md: 665 }
                                    }}>
                                        <List sx={{ mb: 4 }}>
                                            {flowerBenefits.map((text, idx) => (
                                                <ListItem
                                                    key={idx}
                                                    sx={{
                                                        fontWeight: 300,
                                                        fontSize: '20px',
                                                        lineHeight: { xs: '150%', md: '34px' },
                                                        textTransform: 'none',
                                                        pr: { xs: '4px', md: 0 }
                                                    }}
                                                >
                                                    {text}
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box></Grid>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack >


            {/* Поэтический блок */}
            < Box mt={{ xs: '75px', md: '150px' }} >
                {
                    poeticText.map((line, idx) => (
                        <Typography variant="h3" key={idx} color={colors.white}>
                            {line}
                        </Typography>))
                }
            </Box >

            {/* Финальный текст */}
            < Grid container sx={{ ml: { xs: 0, md: '190px' }, mt: { xs: '15px', md: '25px' } }} >
                <Grid size={{ xs: 8, md: 5.9 }}>
                    {finalText.map((line, idx) => (
                        <Typography key={idx} variant="subtitle15">
                            {line}
                        </Typography>))}
                </Grid>
            </Grid ></Box >
        </>
    );
}

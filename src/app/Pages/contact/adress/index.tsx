'use client';

import { colors } from '@/app/Styles/colors';
import { contacts } from '@/app/Utils/data/Contact/contact';
import { Box, Typography, Grid, Stack, } from '@mui/material';



export default function Index() {
    return (
        <Box mt='30px'>
            <Grid container justifyContent="space-between" spacing={2}>
                {contacts.map((item, index) => (
                    <Grid
                        key={index}
                        size={{ xs: 12, sm: 3 }}
                        container
                        justifyContent="center"
                        alignItems="center"

                    >
                        <Stack
                            sx={{
                                borderRadius: { md: 5 },
                                textAlign: { md: 'center' },
                                position: 'relative',
                                bgcolor: { md: colors.black30 },
                                backdropFilter: { md: 'blur(20px)' },
                                maxWidth: { md: 255 },
                                justifyContent: { md: "center" },
                                width: '100%',
                                px: { md: '30px' },
                                py: { md: 3 },
                                alignItems: { md: 'center' },
                                minHeight: { md: 255 },
                                height: '100%',
                            }}
                        >
                            <Box sx={{
                                minHeight: { md: 112 }

                            }}>
                                <Typography
                                    variant="subtitle13"
                                    component='h6'
                                    color="primary"
                                    sx={{
                                        whiteSpace: 'pre-line',
                                        lineHeight: '20px', mb: { md: '30px' }
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant="subtitle21"
                                    sx={{
                                        textTransform: 'none',
                                    }}
                                >
                                    {item.lines}
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

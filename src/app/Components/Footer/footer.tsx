'use client';

import { Box, Container, Grid, Typography, Link, Stack } from '@mui/material';
import { logoIcon } from '@/app/Styles/Svg/SvgIcon';
import PlaceTime from '@/app/Shared/placeTime';
import SocialIcon from '@/app/Shared/socialIcon';
import Dostavka from '@/app/Shared/dostavka';
import { footerColumns } from '@/app/Utils/data/footerLink';
import { useMobileDrawer } from '@/app/Utils/hooks/useMobileDrawer';
import MobileFooter from './mobileFooter';

export default function Footer() {
    const { isMobile } = useMobileDrawer('md');

    if (isMobile) return <MobileFooter />;

    return (
        <Box sx={{ bgcolor: 'black', py: 6 }}>
            <Container>
                <Grid container spacing={{ sm: 3, lg: 6 }}>
                    {/* ЛОГО И АДРЕС */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Stack spacing={1}>
                            <Box component={Link} href='/' sx={{ position: 'relative', top: -15 }}>
                                {logoIcon}
                            </Box>
                            <Typography variant="subtitle4" color="primary">Реквизиты</Typography>
                            <Typography variant="body3">
                                ООО «Ловефлове» 220035, Республика Беларусь, г. Минск, ул. Тимирязева д. 67, комн. 112 (пом.11)
                                УНП 193263781, р/с BY55MTBK30120001093300096372
                                ЗАО «МТБанк», БИК MTBKBY22 220007, г. Минск, улица Толстого
                            </Typography>
                        </Stack>
                    </Grid>

                    {/* ДИНАМИЧЕСКИЕ КОЛОНКИ */}
                    {footerColumns.map((col, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 2 }} key={index}>
                            <Stack spacing={col.useSubtitle ? 3 : 1.5}>
                                <Typography variant="subtitle4" sx={{ mb: 5 }} color="primary">
                                    {col.title}
                                </Typography>
                                {col.links.map((link, idx) => (
                                    <Typography
                                        key={idx}
                                        variant={col.useSubtitle ? 'subtitle4' : 'body3'}
                                        color={col.useSubtitle ? 'primary' : 'white'}
                                        component={Link}
                                        href={link.href}
                                        underline="hover"
                                    >
                                        {link.label}
                                    </Typography>
                                ))}
                            </Stack>
                        </Grid>
                    ))}

                    {/* КОНТАКТЫ */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Stack spacing={3}>
                            <Box>  <Dostavka /></Box>
                            <Box> <PlaceTime /></Box>

                            <Box>
                                <Typography variant="body1" color="primary">+375 (29) 113-69-69</Typography>
                                <Typography variant="body2" sx={{ mt: 0.5 }}>прием звонков круглосуточно</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <SocialIcon />
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

'use client';
import { Box, Typography, Grid, Stack, Button, TextField } from '@mui/material';
import { colors } from '@/app/Styles/colors';
import DividerBanner from '@/app/Shared/Divider';
import PrivacyPolicyBanner from '@/app/Shared/PrivacyPolicy';

interface BannerQuestionProps {
    title?: string;
    subtitle?: string;
    description?: string;
    icon?: React.ReactNode;
    showForm?: boolean;
}

export default function BannerQuestion({
    title = 'остались',
    subtitle = 'вопросы?',
    description = 'Отправьте ваш вопрос, заказ, предложение или жалобу через форму обратной связи, и наш специалист свяжется с вами в течение 15 минут.',
    icon,
    showForm = true,
}: BannerQuestionProps) {
    return (
        <Box sx={{ position: 'relative' }}>
            <Grid
                container
                spacing={3}
                justifyContent={{ xs: 'flex-start', md: 'space-between' }}
                alignItems={{ xs: 'stretch', md: 'flex-end' }}
            >
                {/* Title */}
                <Grid size={{ xs: 12, md: 7 }} sx={{ order: { xs: 1, md: 1 } }}>
                    <Typography variant="h2">{title}</Typography>
                    <Typography variant="h2" sx={{ textAlign: { xs: 'left', md: 'end' } }}>
                        {subtitle}
                    </Typography>
                </Grid>

                {/* Icon */}
                {icon && (
                    <Grid
                        size={{ xs: 12, md: 6 }}
                        sx={{
                            order: { xs: 2, md: 3 },
                            display: 'flex',
                            justifyContent: { xs: 'center', md: 'flex-end' },
                            position: 'relative',
                            zIndex: 5,
                            mb: { xs: 0, md: 10 },
                            mr: { xs: 4, md: 0 },
                            mt: { xs: -4, md: 0 }
                        }}
                    >
                        {icon}
                    </Grid>
                )}

                {/* Text */}
                <Grid size={{ xs: 12, md: 3 }} sx={{ order: { xs: 3, md: 2 } }}>
                    <Stack>
                        <DividerBanner maxWidth={{ xs: 96, md: 255 }} borderColor={colors.green} />
                        <Typography variant="body1" sx={{ mt: { xs: 3, md: 6 }, pr: { xs: 5, md: 0 } }}>
                            {description}
                        </Typography>
                    </Stack>
                </Grid>

                {/* Form */}
                {showForm && (
                    <Grid size={{ xs: 12, md: 5 }} sx={{ order: { xs: 4, md: 4 } }}>
                        <Stack spacing={1}>
                            <TextField
                                fullWidth
                                sx={{ border: `1px solid ${colors.green}` }}
                                variant="outlined"
                                placeholder="Ваше имя"
                            />
                            <TextField
                                fullWidth
                                sx={{ border: `1px solid ${colors.green}` }}
                                variant="outlined"
                                placeholder="+7 (977) 777-77-77"
                            />
                            <TextField
                                sx={{ border: `1px solid ${colors.green}` }}
                                fullWidth
                                variant="outlined"
                                multiline
                                rows={4}
                                placeholder="Ваш комментарий"
                            />
                        </Stack>

                        <Button sx={{ mt: 2, mb: 1 }}>отправить</Button>
                        <PrivacyPolicyBanner />
                    </Grid>
                )}
            </Grid>
        </Box>
    );
}

'use client';

import { colors } from '@/app/Styles/colors';
import { Condition } from '@/app/Utils/data/termSections';
import { Box, Typography, Grid, Stack } from '@mui/material';

const steps = [
    '1. Заполнение заявки',
    '2. Подписание договора',
    '3. Выбор цветовой гаммы',
    '4. Отчет о доставленных заказах',
    '5. Оплата',
];

export default function CorporateTermsSection() {
    return (
        <Box mt={10}>
            <Stack spacing='20px' pl={{ xs: '50px', md: 0 }}>
                <Typography variant="h4">
                    Букеты могут изготавливаться в фирменном цвете организации и есть
                    возможность делать поздравления на вашей фирменной открытке, которую
                    мы можем изготовить сами.
                </Typography>

                <Typography variant="subtitle24" pr={{ xs: '90px', md: 0 }}>
                    Стоимость одного букета не менее 60 рублей.
                </Typography></Stack>

            {/* Отображаем таблицу из Condition */}
            {Condition.map((section, secIdx) => (
                <Grid mt={{ xs: '20px', md: '70px' }} container
                    spacing={{ xs: '6px', md: '30px' }} key={secIdx}>
                    {section.items.map((columnItems, colIdx) => (
                        <Grid size={{ xs: 6 }} key={colIdx}>
                            <Stack spacing={1}>
                                {columnItems.map((item, itemIdx) => (
                                    <Grid container alignItems='center'
                                        key={itemIdx}

                                        sx={{
                                            textAlign: item.center ? 'center' : 'left',
                                            bgcolor: colors.lightBlack,
                                            height: item.height,
                                            p: { xs: itemIdx === 0 ? '0 15px' : '7px', md: '10px 20px' },

                                            justifyContent: item.left || 'center',

                                        }}
                                    >
                                        <Typography variant={item.subtitle || 'subtitle26'}>
                                            {item.text}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Stack>
                        </Grid>
                    ))
                    }
                </Grid >
            ))}


            {/* Этапы работы */}
            <Grid mt={{ xs: '50px', md: '100px' }} container justifyContent='flex-end'>
                <Grid pl={{ xs: 0, md: '30px' }} size={{ xs: 12, md: 6 }}>
                    <Typography variant="h4" color='primary' >
                        Этапы работы:
                    </Typography>
                    <Box sx={{ mt: { xs: '20px', md: '40px' }, width: { xs: 45, md: 60 }, height: '1px', border: `1px solid ${colors.green}` }} />
                    <Stack spacing={0.5} mt={{ xs: '10px', md: '20px' }}>
                        {steps.map((step, idx) => (
                            <Typography key={idx} color='white' variant="subtitle24">
                                {step}
                            </Typography>
                        ))}
                    </Stack>
                </Grid></Grid>


            <Typography mt={{ xs: '50px', md: '150px' }} variant="h4" sx={{ letterSpacing: 0 }}>
                Если у Вас единичный заказ, то можете выбрать букет в каталоге либо заказать индивидуальный букет и указать его стоимость,а при оформлении заказа в корзине указать, что оплата будет производиться с расчётного счёта организации.
            </Typography>
        </Box >
    );
}

'use client';

import React, { useState } from 'react';
import {
    Typography,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormControl,
    Box,
    TextField,
    Button,
} from '@mui/material';
import { colors } from '@/app/Styles/colors';
import { paymentMethods } from '@/app/Utils/data/dataEntry';



export default function Index() {
    const [paymentType, setPaymentType] = useState('card');
    const [promoCode, setPromoCode] = useState('');

    return (<>
        {/* Promocod */}

        <Box mt='60px'>

            <Typography mb='20px' color="primary" component='div'
                variant="subtitle4">Оплата</Typography>
            <FormControl >
                <RadioGroup value={paymentType} onChange={(e) => setPaymentType(e.target.value)}>
                    {paymentMethods.map((method, i) => (
                        <FormControlLabel
                            key={i}
                            value={method}

                            control={
                                <Radio
                                    sx={{
                                        color: paymentType === method ? colors.white : colors.disabled,
                                    }}
                                />
                            }
                            label={
                                <Typography
                                    sx={{
                                        color: paymentType === method ? colors.white : colors.disabled,
                                    }}
                                >
                                    {method}
                                </Typography>
                            }
                        />
                    ))}
                </RadioGroup>
            </FormControl>

            {/* Promocod */}
            <Box mt='60px'
            >
                <Typography color="primary"
                    sx={{ mb: '4px', textTransform: 'none' }} variant="subtitle4">Промокод</Typography>
                <Box sx={{ display: 'flex',  }}>
                    <TextField
                        variant="outlined"
                        placeholder="Промокод"
                        sx={{ maxWidth: 160 }}
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button
                        variant="outlined"
                        sx={{
                            height: 60,
                            borderColor: colors.green,
                            borderRadius: 0,
                            width: '191px'
                        }}
                    >
                        Применить
                    </Button>
                </Box>
            </Box>
        </Box>
    </>
    );
}

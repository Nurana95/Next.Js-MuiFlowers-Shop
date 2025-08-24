'use client';

import React, { useState } from 'react';
import {
    Typography,
    TextField,
    Grid,
    MenuItem,
} from '@mui/material';
import { addressFields, } from '@/app/Utils/data/dataEntry';
import { colors } from '@/app/Styles/colors';
import CustomArrow from '../../../../../Styles/Svg/Vector.svg'

export default function Index() {

    const [selectedCity, setSelectedCity] = useState('');

    return (
        <>
            {/* Adress */}
            <Grid mt='20px' container spacing='20px'>
                {addressFields.map((field, idx) => (
                    <Grid key={idx} size={{ xs:field.xs12 ? 12 : 6, md: field.xs12 ? 12 : 'auto' }}
                    >
                        <Typography variant="body1" mb='4px'
                            sx={{ textTransform: 'none' }}>{field.label}</Typography>
                        {field.selects ? (
                            <TextField
                                fullWidth
                                variant="outlined"
                                select
                                value={selectedCity}

                                onChange={(e) => setSelectedCity(e.target.value)}
                                SelectProps={{
                                    IconComponent: (props) => (
                                        <CustomArrow
                                            {...props}
                                            style={{
                                                fill: colors.white,
                                                marginRight: '20px',
                                                marginTop: '5px',
                                                pointerEvents: 'none',
                                            }}
                                        />
                                    ),
                                    displayEmpty: true,
                                    renderValue: (selected) => {
                                        if (!selected) {
                                            return (
                                                <Typography variant='body1' textTransform='none' sx={{ opacity: 0.5 }} color={colors.grey}>Выберите город</Typography>
                                            );

                                        }
                                        const found = field.options.find(
                                            (opt) => opt.value === selected
                                        );
                                        return found?.label || '';
                                    },
                                }}



                            >
                                {field.options?.map((opt, i) => (
                                    <MenuItem key={i} value={opt.value}>
                                        {opt.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        ) : (
                            <TextField
                                sx={{
                                    width: { xs: field.xs12 ? '100%' : 140, md: field.xs12 ? '100%' : 160 },
                                    mr: field.xs12 ? 0 : '10px'
                                }}
                                placeholder={field.placeholder}
                                variant="outlined"
                            />
                        )}

                    </Grid>

                ))}
                <Grid size={{ xs: 12 }}>
                    <Typography variant='body1' sx={{
                        color: colors.grey, letterSpacing: '1px',
                        mt: '20px'
                    }}>
                        СТОИМОСТЬ ДОСТАВКИ 0 ₽
                    </Typography>

                </Grid>
            </Grid >
        </>
    );
}

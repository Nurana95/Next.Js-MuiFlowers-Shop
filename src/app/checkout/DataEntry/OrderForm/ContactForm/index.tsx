'use client';

import React from 'react';
import {
    Typography,
    TextField,
    Box,
} from '@mui/material';
import { reviewFormFields } from '@/app/Utils/data/dataEntry';
import Delivery from './Delivery'
import Adress from './Adress'
import Payment from './Payment'
import OrderTotal from './OrderTotal'
export default function Index() {


    return (
        <>

            {/* Contact */}
            <Typography color="primary" variant="subtitle4">Контактные данные</Typography>

            {/* form */}
            {reviewFormFields.map((field, idx) => (
                <Box key={idx} my='20px' >
                    <Typography variant="body1" mb='4px'
                        sx={{ textTransform: 'none' }}>{field.label}</Typography>
                    <TextField
                        fullWidth
                        placeholder={field.placeholder}
                        variant="outlined"
                    />
                </Box>
            ))}
            <Delivery />
            <Adress />
            <Payment />
            <OrderTotal />
        </>
    );
}

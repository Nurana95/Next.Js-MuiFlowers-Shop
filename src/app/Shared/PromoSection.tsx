'use client';

import React from 'react';
import {
    Button,
    Stack,
    Typography
} from '@mui/material';

export default function PlaceTime() {
    return (
        <>
            <Stack spacing={{xs:2, md:6}} alignItems={'center'}
            >
                <Typography component='div'
                    variant="subtitle3" sx={{ textTransform: 'none' }} >Создаём для тех, кто ценит свежесть и изящество цветка</Typography>
                <Button
                    href="/#" >смотреть каталог</Button></Stack>
        </>
    );
}
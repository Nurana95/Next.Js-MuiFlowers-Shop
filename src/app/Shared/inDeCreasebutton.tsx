'use client';

import {
    Box,
    Typography,
    IconButton,

} from '@mui/material';
import Increase from '../Styles/Svg/plus.svg'
import Decrease from '../Styles/Svg/minus.svg'

interface inDecreaseProps {
    width?: number | { xs: number, md: number };
    height?: number;
    quantity?: number;
    onIncrease?: () => void
    onDecrease?: () => void
}

export default function InDecreaseBanner({
    width,
    height,
    quantity=1,
    onIncrease,
    onDecrease,


}: inDecreaseProps) {
    return (

        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                border: '0.5px solid #555555',
                px: '15px',
                height,
                width,
                justifyContent: 'space-between',
            }}
        >
            <IconButton sx={{ color: 'primary.light' }} onClick={onDecrease}><Decrease /></IconButton>
            <Typography variant="subtitle12">{quantity}</Typography>
            <IconButton sx={{ color: 'primary.light' }} onClick={onIncrease}><Increase /></IconButton>
        </Box>



    );
}

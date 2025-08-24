'use client';

import React, { useState } from 'react';
import {
    Typography,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormControl,
    Box,
} from '@mui/material';

import { colors } from '@/app/Styles/colors';

export default function Index() {
    const [deliveryType, setDeliveryType] = useState('pickup');
    const handleDeliveryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDeliveryType(event.target.value);
    };

    return (
        <>
            {/* Delivery */}
            <Typography color="primary" mt='60px' mb='20px' 
            variant="subtitle4">Доставка</Typography>
            <Box>
                <FormControl >
                    <RadioGroup value={deliveryType} onChange={handleDeliveryChange}>
                        <FormControlLabel
                            value="pickup"
                            control={<Radio />}
                            label={<Typography sx={{ color: deliveryType === 'delivery' ? colors.disabled : colors.white }}>САМОВЫВОЗ</Typography>}
                        />
                        <FormControlLabel
                            value="delivery"
                            control={<Radio />}
                            label={<Typography sx={{ color: deliveryType === 'delivery' ? colors.white : colors.darkDisabled }}>ДОСТАВКА КУРЬЕРОМ</Typography>}

                        />
                    </RadioGroup>
                </FormControl>
            </Box>
        </>
    );
}

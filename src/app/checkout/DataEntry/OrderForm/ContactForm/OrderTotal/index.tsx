'use client';

import React from 'react';
import {
    Typography,
    Box,
    Button,
    Grid,
} from '@mui/material';

import { summaryData } from '@/app/Utils/data/dataEntry';
import PrivacyPolicy from '../../../../../Shared/PrivacyPolicy'
import {signaturePayment} from '../../../../../Styles/Svg/Signature/paymentsignature'


export default function Index() {
    return (
        <>

            <Grid  container sx={{
                justifyContent: 'space-between',
                mt: '47px',
            }}>
                <Grid size={6}> <Typography color="primary" variant="h5"
                >ОБЩАЯ СУММА ЗАКАЗА</Typography></Grid>
                <Grid size={6}>
                    <Typography color="primary" textAlign={{xs:'end', md:'center'}} variant="h5">334.00 ₽</Typography>
                </Grid></Grid>
            {summaryData.map((item, i) => (
                <Typography variant='body1' mt='10px' key={i}>{item.label} = {item.value}</Typography>
            ))}

            {/* Pay button*/}
            <Grid container >
                <Box>
                    < Button sx={{ mb: 1, mt: { xs: '20px', md: '30px' } }}>
                        К оплате
                    </Button >
                    <PrivacyPolicy showPrivacyLink />
                </Box>

                <Box sx={{width:{xs:'100%', md:'50%'}, display:'flex', justifyContent:'flex-end', right:0}} mt={{xs:0, md:'30px'}}>{signaturePayment}</Box></Grid>


        </>
    );
}

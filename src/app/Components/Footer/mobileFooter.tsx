'use client';
import React from 'react';
import {
    Typography,
    Box,
    Stack,
    Link,
    Container,

} from '@mui/material';
import SocialIcon from '../../Shared/socialIcon';
import PlaceTime from '@/app/Shared/placeTime';
import Dostavka from '@/app/Shared/dostavka';
import { mobileFooter } from '@/app/Utils/data/footerLink';
import { logoIcon } from '@/app/Styles/Svg/SvgIcon';

export default function MobileFooter() {

    return (
        <>
            <Box sx={{ bgcolor: 'black', py: 6 }}>
                <Container>
                    <Stack alignItems={'center'} spacing={2}>
                        <Box component={Link} href='/' sx={{ position: 'relative', top: -15 }}>
                            {logoIcon}
                        </Box>
                        {mobileFooter.map((col, index) => (
                            <Box key={index}>
                                <Typography variant="subtitle4" underline='hover' component={Link} color="primary">{col.title}</Typography>
                            </Box>
                        ))}
                    <Stack alignItems={'center'} pt={2} spacing={2}>
                        <Dostavka />
                        {/* Address Information */}
                     <PlaceTime  />
                        <Box textAlign='center'>  <Typography variant="body1" color="primary">
                            +375 (29) 113-69-69</Typography>
                            <Typography variant="body2" sx={{ mt: 0.5 }} >
                                прием звонков круглосуточно</Typography></Box>
                        {/* Social Icons */}
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <SocialIcon />
                        </Box></Stack>

                        <Typography  pt={2}  variant="subtitle4" color='primary' >реквизиты  </Typography>
                        <Typography textAlign='center' variant="body2" >
                            ООО «Ловефлове» 220035, Республика Беларусь, г.
                            Минск, ул. Тимирязева д. 67, комн. 112 (пом.11)
                            УНП 193263781, р/с BY55MTBK30120001093300096372
                            ЗАО «МТБанк», БИК MTBKBY22 220007, г. Минск,
                            улица Толстого</Typography>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}
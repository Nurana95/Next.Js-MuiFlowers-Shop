'use client';

import {
    Box,
    Container,
    Link,
    Typography,
} from '@mui/material';
import Adress from './adress';
import WriteToUs from './writeToUs';
import MapComponent from './map';
import { colors } from '@/app/Styles/colors';
import BgImage from './bgImage';
export default function Index() {

    return (
        <> <Box sx={{
            bgcolor: colors.black,
            zIndex: 0,
            position: 'relative',
            pb: { xs: '150px', md: '200px' },

        }}>
            <Container>
                <Box sx={{
                    overflow: 'hidden',

                    pt: { xs: '20px', md: '35px' }
                }}>
                    <Link href="/" underline="hover" variant="subtitle7">
                        Главная  {'/'}
                    </Link>
                    <Link href="/Pages/Kataloq" underline="hover"
                        variant="subtitle7">
                        {''} контакты</Link>
                    <Box mt={{ xs: '20px', md: '60px' }}>
                        <Typography variant="h2" ml={{ xs: '0px', md: '100px' }} >контакты</Typography>

                    </Box>
                </Box>
                <Adress />
                <WriteToUs />
                <MapComponent />
            </Container >
            <BgImage />
        </Box >
        </>
    );
}
'use client';

import { colors } from '@/app/Styles/colors';
import {
    Box,
    Container,
    Link,
    Typography,
} from '@mui/material';
import AboutFlower from './AboutLowerFlower'
import BgImage from './bgimage';
export default function Index() {

    return (
        <>
            <Box sx={{

                overflow: 'visible',
                bgcolor: colors.black,
                position: 'relative',
                zIndex: 100,


            }}>
                <Container>
                    <Box sx={{
                        position: 'relative',
                        zIndex: 100,
                        overflow: 'hidden',
                        pb: { xs: '80px', md: 0 },
                        pt: { xs: '20px', md: '35px' }
                    }}>
                        <Link href="/" underline="hover" variant="subtitle7">
                            Главная  {'/'}
                        </Link>
                        <Link href="/Pages/Kataloq" underline="hover"
                            variant="subtitle7">
                            {''} о нас</Link>
                        <Box mt={{ xs: '20px', md: '60px' }}>
                            <Typography variant="h2" ml={{ xs: '50px', md: '90px' }} >о нас</Typography>
                        </Box>
                    </Box>
                    <AboutFlower />
                </Container >
                <BgImage />
            </Box >
        </>
    );
}
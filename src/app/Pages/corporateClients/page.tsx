'use client';

import { colors } from '@/app/Styles/colors';
import {
    Box,
    Container,
    Link,
    Typography,
} from '@mui/material';
import BirthdayServicePage from './birthdayService';
import CorporateTermsSection from './termSections';
import FillOut from './FillOut';
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
                        {''} корпоративным клиентам</Link>
                    <Box ml={{ xs: '0px', md: '100px' }} mt={{ xs: '20px', md: '60px' }}>
                        <Typography variant="h2"  >Букеты</Typography>
                        <Typography variant="h4" ml={{ xs: '50px', md: '0px' }} >поздравления для</Typography>
                        <Typography variant="h4" ml={{ xs: '80px', md: '100px' }}  > Ваших работников</Typography>

                    </Box>
                </Box>
                <BirthdayServicePage />
                <CorporateTermsSection />
                <FillOut />
            </Container >
            <BgImage />
        </Box >
        </>
    );
}
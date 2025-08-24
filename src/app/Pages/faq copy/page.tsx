'use client';

import {
    Box,
    Container,
    Grid,
    Link,
    Typography,
} from '@mui/material';
import { colors } from '@/app/Styles/colors';
import Accordion from './accordion';
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
                        {''} FAQ</Link>
                    <Grid mb={{ xs: '50px', md: '40px' }} container alignItems='center' spacing={{ xs: 0, md: '30px' }} mt={{ xs: '20px', md: '60px' }}>
                        <Box sx={{
                            height: { md: 1 },
                            width: { md: 65 },
                            border: { md: `1px solid ${colors.green}` },
                        }} />
                        <Typography variant="h2">faq</Typography>

                    </Grid>
                </Box>
                <Accordion />
            </Container >
            <BgImage />
        </Box >
        </>
    );
}
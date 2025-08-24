'use client';

import {
    Box,
    Container,
    Grid,
    Link,
    Typography,
} from '@mui/material';
import DataEntry from './DataEntry'
import { colors } from '../Styles/colors';
import { SignatureLoverflower } from '../Styles/Svg/Signature/signatureloverflower'
import BgImage from './bgImage';
export default function Index() {

    return (
        <> <Box sx={{
            zIndex: 2, overflow: 'hidden', bgcolor: colors.black,
            position: 'relative'
        }}>
            <Container>
                <Box sx={{ pt: { xs: '20px', md: '35px' } }}>
                    <Link href="/" underline="hover" variant="subtitle7">
                        Главная  {'/'}
                    </Link>
                    <Link href="/Pages/Kataloq" underline="hover"
                        variant="subtitle7">
                        {''} оформление заказа</Link>
                    <Grid mt={{ xs: '20px', md: '60px' }} container>
                        <Grid size={{ xs: 12, lg: 8.5 }} sx={{ position: 'relative' }} >
                            <Typography variant="h2" >оформление
                            </Typography>
                            <Grid container justifyContent={{ xs: 'flex-start', md: 'space-between' }} >
                                <Typography variant="h2" ml={{ xs: 0, md: '90px' }} >
                                    заказа</Typography> <Box sx={{ position: 'relative', top: -10 }}>


                                    {SignatureLoverflower}</Box>
                            </Grid>

                        </Grid> </Grid>  </Box>


                < DataEntry />
            </Container >
            <BgImage />
        </Box >
        </>
    );
}
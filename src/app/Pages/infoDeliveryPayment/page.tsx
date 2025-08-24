'use client';

import { colors } from '@/app/Styles/colors';
import {
    Box,
    Container,
    Grid,
    Link,
    Typography,
} from '@mui/material';
import MethodPayment from './methodPayment'
import DeliveryCost from './DeliveryCost'
import Condition from './condition'
import Additionally from './Additionally'
import BgImage from './bgImage';
import { SignatureLoverflowerbrown } from '../../Styles/Svg/Signature/signatureloverflower'
export default function Index() {

    return (
        <> <Box sx={{
            zIndex: 0, overflow: 'hidden', bgcolor: colors.black,
            position: 'relative',
            pb: { xs: '80px', md: 0 },

        }}>
            <Container>
                <Box sx={{
                    pt: { xs: '20px', md: '35px' }
                }}>
                    <Link href="/" underline="hover" variant="subtitle7">
                        Главная  {'/'}
                    </Link>
                    <Link href="/Pages/Kataloq" underline="hover"
                        variant="subtitle7">
                        {''} доставка и оплката</Link>
                    <Box mt={{ xs: '20px', md: '60px' }}>
                        <Typography variant="h2" >доставка</Typography>
                        <Grid >
                            <Typography variant="h2" ml={{ xs: '50px', md: '100px' }} >и оплата</Typography>
                            <Box ml={{ xs: '0px', md: '70px' }}>
                                <Box sx={{ width: { xs: '100%', md: 600 }, display: 'flex', mt: '20px' }}>
                                    <Typography variant="h2" sx={{ fontSize: '100px !important', lineHeight: '70%' }}
                                        color='warning'  >
                                        !
                                    </Typography>

                                    <Box>
                                        <Typography variant="subtitle4" color={colors.pinkishPurple}  >
                                            Дорогие клиенты!
                                        </Typography>
                                        <Typography variant="body1" mt='4px'  >
                                            Во время пандемии (COVID-19) компания Lover
                                            Flower призывает всех меньше контактировать с другими
                                            людьми для защиты себя и своих близких.
                                            Именно поэтому мы организовали
                                            БЕСКОНТАКТНУЮ ДОСТАВКУ
                                        </Typography>

                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Box>
                </Box>
                <MethodPayment />
                <DeliveryCost />
                <Condition />
                <Additionally />
                {SignatureLoverflowerbrown}
            </Container >
            <BgImage />
        </Box >
        </>
    );
}
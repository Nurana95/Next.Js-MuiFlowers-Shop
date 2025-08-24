'use client';

import PrivacyPolicyBanner from '@/app/Shared/PrivacyPolicy';
import { SignatureLoverflower } from '@/app/Styles/Svg/Signature/signatureloverflower';
import { fillOut, fillOutcolumn2 } from '@/app/Utils/data/fillOut';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';

export default function CorporateForm() {
    return (
        <><Box mt='50px'>
            {/* Заголовок */}
            <Typography color="primary" variant="subtitle24">
                заполните заявку:            </Typography>

            {/* Форма */}
            <Box mt='20px'>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        {fillOut.map((section, sectionIdx) => (

                            <Box key={sectionIdx} mb={2}>
                                <Typography variant="body1" mb={1} sx={{ textTransform: 'none' }}>
                                    {section.label}
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder={section.placeholder}
                                    variant="outlined"
                                />
                            </Box>))}
                    </Grid>


                    <Grid size={{ xs: 12, md: 6 }}>
                        {fillOutcolumn2.map((section, sectionIdx) => (
                            <Box mb={2} key={sectionIdx}>
                                <Typography variant="body1" mb={1} sx={{ textTransform: 'none' }}>
                                    {section.label}
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder={section.placeholder}
                                    variant="outlined"
                                />


                            </Box>))}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>{SignatureLoverflower}</Box>
                    </Grid>



                </Grid>
                <Button sx={{ mt: { xs: '20px', md: '35px' } }}>отправить</Button>
                <PrivacyPolicyBanner />
            </Box></Box>
        </>
    );
}
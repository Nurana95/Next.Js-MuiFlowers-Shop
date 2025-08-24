'use client'
import { Box, Container, Typography } from "@mui/material";
import { relative } from "../../../Styles/sx/index";
import SocialMedia from "../../../Shared/SocialMediaBanner";
import BackgroundImagine from "./bgImage";
import { SignatureIcon } from "../../../Styles/Svg/SvgIcon";
import { colors } from "@/app/Styles/colors";
import PromoSection from "@/app/Shared/PromoSection";


export default function Hero() {

  return (
    <>
      <Box sx={{
        overflowX: 'hidden', position: 'relative', zIndex: 0, pt: { xs: 2, md: 8 },
        bgcolor: colors.blackGreen,

      }}>
        <Container >
          <Box sx={{ position: 'relative', py: { xs: 0, md: 10 }, }}>
            <Box sx={{ textAlign: 'center', }}>
              <Typography sx={{ position: 'relative', zIndex: -3, }} variant="h1" >
                Lover
              </Typography>
              <Typography variant="h1" >
                Flower
              </Typography></Box>
            <Box sx={{ display: { xs: 'none', md: 'block' }, 
            mt: { xs: 0, md: 4 } }}><PromoSection /></Box>
            <SocialMedia />
          </Box>
          <Box sx={{
            ...relative, display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            height: { xs: '65vh', md: '100vh' },
            width: '100%',
            pb: { xs: 4, md: 0 }
          }}> {SignatureIcon}

          </Box>
        </Container >
        <BackgroundImagine />
      </Box >

    </>
  );
}

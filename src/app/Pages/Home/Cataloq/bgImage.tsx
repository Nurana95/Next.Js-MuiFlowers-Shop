import BgBannerImage from "@/app/Shared/BgBannerImage";
import { homeCataloq } from '../../../Utils/data/BgImage/homeCataloq'
import { useMobileDrawer } from "@/app/Utils/hooks/useMobileDrawer";
import { Box, Stack, Typography } from "@mui/material";



export default function BgImage() {
  const { isMobile } = useMobileDrawer('md');
  return (

    <>
      <BgBannerImage items={homeCataloq} />
      {!isMobile && (
        <Box sx={{ position: 'absolute', top: 0, width: '100%', height: '100%' }}>
          <Stack mt={15} spacing={0}>
            <Box ml={1} textAlign={'end'} ><Typography variant="h1Oswald" sx={{ opacity: 0.1 }}>букеть</Typography></Box>

            <Box>
              <Typography ml={-3} variant="h1Oswald" sx={{ opacity: 0.1 }}>Цветы</Typography></Box>
            <Box textAlign={'end'} mt={5} ><Typography variant="h1Oswald" sx={{ opacity: 0.1 }}>дополн</Typography></Box>
          </Stack> </Box>)}
    </>
  );
}


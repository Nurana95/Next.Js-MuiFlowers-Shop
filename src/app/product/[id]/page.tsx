'use client'
import Breadcrumbs from "@/app/Shared/ProductBanner/BreadCrumbs";
import OrderBanners from './OrderExtras'
import Tabs from './tabs'
import { Box, Container } from "@mui/material";
import Recommendations from './recommendations';
import Bgimage from './Bgimage'
import { useMobileDrawer } from "@/app/Utils/hooks/useMobileDrawer";
import { use } from 'react';


export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { isMobile } = useMobileDrawer('md');
  const { id } = use(params);

  return (

    <>
      <Box sx={{ zIndex: 0, overflow: 'hidden', bgcolor: 'black', position: 'relative' }}>
        <Container>
          <Breadcrumbs id={id} />
          <OrderBanners />
          <Tabs />
          {!isMobile && <Recommendations />}
        </Container>
        <Bgimage />
      </Box>

    </>
  );
}

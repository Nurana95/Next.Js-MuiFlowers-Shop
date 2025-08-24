'use client'

import { ProductCard } from "@/app/Utils/data/productCard";
import Banner from "../../../Shared/ProductBanner";
import { Box, Grid, Typography } from "@mui/material";

export default function Index() {

    return (
        <><Box my={'200px'} >
            <Grid container>
                <Typography variant="h5" mb={2} >вам может понравиться:</Typography>
                <Banner
                    showAvatar={true}
                    products={ProductCard}
                    size={3}
                    Chevron
                    visibleCount={4} /></Grid>
        </Box>
        </>
    );
}

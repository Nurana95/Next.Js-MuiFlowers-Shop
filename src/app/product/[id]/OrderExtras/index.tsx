'use client';

import ExtrasBanner from "@/app/Shared/ExtraBanner";
import { extras } from "@/app/Utils/data/extras";
import { Box } from "@mui/material";

export default function ExtrasSection() {
    return (
        <Box sx={{ mt: { xs: '40px', md: '80px' } }}>
            <ExtrasBanner
                items={extras}
                title="Дополнительно к заказу:"
                variant="body1"
            />
        </Box>
    );
}

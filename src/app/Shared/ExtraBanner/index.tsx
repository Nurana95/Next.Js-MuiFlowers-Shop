'use client';

import { colors } from '@/app/Styles/colors';
import { ExtrasBannerProps } from '@/app/Utils/Interface/type';
import { Box, Typography, Grid, } from '@mui/material';



export default function ExtrasBanner({
  items,
  title = 'Дополнительно к заказу:',
  width = 20,
  height = 20,
  variant = "body1",


}: ExtrasBannerProps) {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography
        variant="subtitle13"
      >
        {title}
      </Typography>

      <Grid container justifyContent="space-between" spacing={2}>
        {items.map((item, index) => (
          <Grid
            mt={4}
            key={index}
            size={{ xs: 12, sm: 6, md: 3 }}
            display="flex"
            justifyContent="center"
          >
            <Box
              sx={{
                borderRadius: 5,
                textAlign: 'center',
                position: 'relative',
                bgcolor: colors.black30,
                backdropFilter: 'blur(20px)',
                maxWidth: 255,
                px: 2,
                py: 3,
                height: { xs: '100%', md: 237 },
              }}
            >
              {/* Кружок сверху */}
              <Box
                sx={{
                  position:'absolute',
                  top: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width,
                  height,
                  bgcolor: colors.black,
                  borderRadius: '50%',
                }}
              />
              <Typography
                variant={variant}
                color="primary"
                sx={{ whiteSpace: 'pre-line', mb: 2 }}
              >
                {item.title}
              </Typography>
              <Typography
                variant={variant}
                sx={{
                  textTransform: 'none',
                  whiteSpace: 'pre-line',
                  letterSpacing: '0.96px',
                }}
              >
                {item.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

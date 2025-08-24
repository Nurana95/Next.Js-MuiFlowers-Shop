'use client';

import React from 'react';
import {
Typography} from '@mui/material';

export default function PlaceTime() {
  return (
    <>         <Typography variant="body1" color="primary">
                            ул. Тимирязева 67</Typography>
                        <Typography variant="body2" sx={{  }} >
                            10:00 до 21:00  <br /> без выходных</Typography>
      
    </>
  );
}
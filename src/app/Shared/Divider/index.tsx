'use client';
import { ResponsiveStyleValue } from '@mui/system';

import { Box } from '@mui/material';

interface DividerProps {
  maxWidth: ResponsiveStyleValue<number | string>;
  borderColor: string;
}

export default function DividerBanner({
  maxWidth,
  borderColor
}: DividerProps) {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: maxWidth,
        border: `1px solid ${borderColor}`,
        height: 1,
      }}
    />
  );
}

  import { Components } from '@mui/material/styles';
import { colors } from '../colors';
  
  export const chip: Components = {
    MuiChip: {
      styleOverrides: {
        outlined: {
          fontweight: 700,
          fontSize: '14px',
          LineHeight: '100%',
          letterSpacing: '0.64px',
          border: 'none',
          color: colors.green,
          '& .MuiChip-label': {
            padding: "0px 15px",
          },
          '@media (max-width:600px)': {
            fontSize: '12px',

          }

        },
        root: {
          fontweight: 400,
          fontSize: '12px',
          LineHeight: '100%',
          letterSpacing: '0.64px',
          borderRadius: '30px',
          padding: '0px',
          border: '0.5px solid white',
          color: colors.white,
          '& .MuiChip-label': {
            padding: "14px",
          },
          '@media (max-width:600px)': {
            fontSize: '12px',
            '& .MuiChip-label': {
              padding: "12px",
            },

          }

        },
      }
    },}
  import { Components } from '@mui/material/styles';
  
  export const card: Components = {
    MuiCard: {
      styleOverrides: {
        root: {
          border: 'none',
          borderRadius: 0,
          width: '100%',
          backgroundColor: 'transparent',
          p: 0,
          position: 'relative'
        }
      }
    },}
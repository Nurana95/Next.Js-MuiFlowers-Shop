  import { Components } from '@mui/material/styles';
  
  export const slider: Components = {
  MuiSlider: {
      styleOverrides: {
        root: {
          color: 'white',
          '& .MuiSlider-rail': {
            height: '1px',
          },
          '& .MuiSlider-track': {
            height: '0.5px',
          },
          '& .MuiSlider-thumb': {
            backgroundColor: "#43FFD2",
            width: 5,
            height: 5,
          },
        }
      },
    },}
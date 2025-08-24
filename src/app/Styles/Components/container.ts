import { Components } from "@mui/material/styles";

export const container: Components = {
  MuiContainer: {
    styleOverrides: {
      root: {
        '@media (min-width:1926px)': {
          maxWidth: '100%'
        },
 '@media (min-width:600px)': {
          paddingLeft: '45px',
          paddingRight: '45px',
        },
        '@media (max-width:600px)': {
          paddingLeft: '10px',
          paddingRight: '10px',
        }


      }
    }
  }
}
import { Components } from '@mui/material/styles';

export const iconButton: Components['MuiIconButton'] = {
  defaultProps: {
    disableRipple: true,
  },

  styleOverrides: {
    root: {
      padding: 0,
      borderRadius: 0,
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&:active': {
        backgroundColor: 'transparent',
      },
      '&.Mui-focusVisible': {
        backgroundColor: 'transparent',
      },
    },
  },
};

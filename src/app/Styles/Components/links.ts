import { Components } from '@mui/material/styles';
import { colors } from '../colors';

export const muiLink: Components['MuiLink'] = {
  styleOverrides: {
    root: {
      color: colors.white,
      cursor: 'pointer',
      textDecoration: 'none',
      fontWeight: 400,
      lineHeight: '150%',
      textUnderlineOffset: '1.5px',

      '&:hover': {
        color: colors.green,
      },
    },
  },
};

import { Components } from '@mui/material/styles';
import { colors } from '../colors';

export const textField: Components['MuiTextField'] = {
  styleOverrides: {
    root: {
      fontWeight: 400,
      lineHeight: '100%',
      letterSpacing: '0.3px',
      fontSize: '14px',
      textTransform: 'none',
      '& .MuiInputBase-input': {
        background: 'transparent',
        color: colors.white,
        textTransform: 'none',
        padding: 0,
        '&::placeholder': {
          color: colors.grey,
        },
      },
    },

  },
  variants: [
    {
      props: { variant: 'standard' },
      style: {
        '& .MuiInputBase-root': {
          fontWeight: 300,
          padding: '2px 10px',
          caretColor: colors.blue,

        },
        '& .MuiInput-root:before, & .MuiInput-root:after': {
          borderBottom: 'none !important',
        },
        '& .MuiInputBase-input': {
          padding: 0,
          '&::placeholder': {
            fontWeight: 300,
          },
        },
      },
    },

   {
  props: { variant: 'outlined' },
  style: {
    '& .MuiInputBase-root': {
      maxWidth: 540,
      width: '100%',
      minHeight: 60,
      height: '100%',
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: 0,
      padding: '20px',

      '& .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${colors.grey}`, 
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: colors.green, 
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: colors.green,
      },
      '&.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: 'red',
      },
    },
  },
},

    {
      props: { variant: 'filled' },
      style: {
        '& .MuiInputBase-input': {
          padding: '0px 20px',
          border: `1px solid ${colors.green}`,
          '&::placeholder': {
            color: colors.darkTeal,
            textTransform: 'uppercase',
          },
        },
      },
    },
  ],
};

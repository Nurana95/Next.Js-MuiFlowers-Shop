import { Components } from '@mui/material/styles';

export const select: Components = {

    MuiSelect: {
        defaultProps: {
            variant: 'standard',
        },
        styleOverrides: {
            root: {
                fontSize: '12px',
                color: 'white',
                fontweight: 300,
                LineHeight: '100%',
                letterSpacing: '0.64px',
            },
        },
    },
}
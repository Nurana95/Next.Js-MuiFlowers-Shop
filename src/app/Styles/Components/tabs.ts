import { Components } from '@mui/material/styles';
import { colors } from '../colors'

export const tabsComponents: Components = {
    MuiTabs: {
        styleOverrides: {
            root: {
            },
            indicator: {
                backgroundColor: colors.green,
                height: '3px',
                borderRadius: '2px',
            },
            flexContainer: {
                justifyContent: 'center',
            },
        },
    },
    MuiTab: {
        styleOverrides: {
            root: {
                justifyContent: 'center',
                maxWidth: 358,
                width: '100%',
                textTransform: 'none',
                fontSize: '20px',
                padding: 0,
                fontWeight: 300,
                marginBottom: '20px',
                letterSapcing: '0.56px',
                color: colors.disabled,
                ['@media (max-width:600px)']: {
                    fontSize: '14px',
                    width: 150,
                    padding: 0,
                    marginBottom: '5px',


                },
                '&.Mui-selected': {
                    color: colors.green,
                    fontWeight: 700,
                },
                '&:hover': {
                    color: colors.green,
                    backgroundColor: 'transparent',
                },
            },
        },
    },
};
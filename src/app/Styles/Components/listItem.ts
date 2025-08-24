import { Components } from '@mui/material/styles';
import { colors } from '../colors';

export const listItem: Components = {
    MuiList: {
        styleOverrides: {
            root: {
                textAlign: 'center',
                padding: 0,
                marginLeft: '15px'

            },
    },
},
    MuiListItem: {
        styleOverrides: {
            root: {
                listStyleType: 'disc',
                fontSize: '18px',
                fontWeight: 400,
                listStylePosition: 'outside',
                lineHeight: '100%',
                letterSpacing: '0.64px',
                padding: '5px 0px',
                display: 'list-item',
                color: colors.white,
                '@media (max-width:600px)': {
                    fontSize: '14px',
                    letterSpacing: '0.4px',
                },
                '&::marker': {
                    fontSize: '10px',
                    display: 'flex',
                    marginBottom: 20,
                    '@media (max-width:600px)': {
                        fontSize: '8px',
                        marginLeft: 10,

                    },


                },
            },
        },

    },
};

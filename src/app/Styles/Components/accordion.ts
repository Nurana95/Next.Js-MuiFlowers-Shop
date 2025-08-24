import { Components } from '@mui/material/styles';

export const accordion: Components = {
    MuiAccordion: {
        styleOverrides: {
            root: {
                '&:active': {
                    color: 'red',
                },
                '&.Mui-expanded': {
                    margin: '0px 0 10px 0 ',

                },
            }
        }
    },
    MuiAccordionDetails: {
        styleOverrides: {
            root: {
                padding: 0
            }
        }
    },
    MuiAccordionSummary: {
        styleOverrides: {
            root: {
                padding: 0,
                minHeight: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '0px',
                '&.Mui-expanded': {
                    margin: '0px',
                    minHeight: '100%',


                },
            },
            content: {
                margin: '0px',
                display: 'block',
                '&:focus': {
                    outline: 'none',
                },
                '&.Mui-expanded': {
                    margin: '0px',

                },

            }
        }
    }
}
import { Components } from "@mui/material/styles";

export const badge: Components = {
    MuiBadge: {
        styleOverrides: {
            badge: {
                minWidth: '16px',
                height: '16px',
                transform: 'scale(1) translate(50%, -20%)',
                padding: '0px 4px',
                fontSize: '12px',
                fontWeight: 400,

            },
        }
    },
}
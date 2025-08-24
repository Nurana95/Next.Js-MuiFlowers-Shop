import { Components } from '@mui/material/styles';
import { colors } from '../colors';

export const avatar: Components = {
    MuiAvatar: {
        styleOverrides: {
            root: {
                fontSize: '20px',
                fontWeight: 300,
                color: colors.black,
                width: '60px',
                height: '60px',
            }
        }
    },
}
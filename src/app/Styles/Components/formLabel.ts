// /styles/theme/components/formLabel.ts
import { Components } from '@mui/material/styles'
import { colors } from '../colors'

export const formLabel: Components['MuiFormLabel'] = {
    styleOverrides: {
        root: {
            color: colors.white,
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '150%',
            letterSpacing: '0.3px',
        },
    },
}

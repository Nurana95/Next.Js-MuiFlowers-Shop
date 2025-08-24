// /styles/theme/components/radio.ts
import { Components } from "@mui/material/styles";
import { colors } from "../colors";

export const radio: Components["MuiRadio"] = {
    styleOverrides: {
        root: {
            color: colors.darkDisabled,
            '&.Mui-checked': {
                color: colors.white,
            },
        },
    },
};

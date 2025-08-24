// styles/theme/components/formControlLabel.ts
import { Components } from "@mui/material/styles";
import { colors } from "../colors";

export const formControlLabel: Components["MuiFormControlLabel"] = {
    styleOverrides: {
        label: {
            color: colors.darkDisabled,
            '.Mui-checked ~ &': {
                color: colors.white,
            },
        },
    },
};

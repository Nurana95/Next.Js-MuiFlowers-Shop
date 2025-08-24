import { Components } from "@mui/material";
import { colors } from "../colors";

export const button: Components = {
  MuiButton: {
    styleOverrides: {
      root: {
        fontFamily: 'Oswald',
        fontSize: '12px',
        fontWeight: 700,
        borderRadius: 0,
        lineHeight: '100%',
        letterSpacing: '1px',
        width: '100%',
        maxWidth: 255,
        height: 50,
        textAlign: 'center',
        padding: '10px',
        backgroundColor: colors.green,
        color: colors.black,

        "&:hover": {
          backgroundColor: colors.winePurple,
          color: colors.white
        },
        "&:active": {
          backgroundColor: colors.winePurple,
          color: colors.white
        },
        "&.Mui-focused": {
          backgroundColor: 'red',
          color: colors.black,
        },
      },

      // ✅ для variant="outlined"
      outlined: {
        backgroundColor: 'transparent',
        border: `0.5px solid ${colors.white}`,
        color: colors.white,
        "&:hover": {
          backgroundColor: colors.green,
          color: colors.black,
          border: 'none',
        },
        "&:active": {
          backgroundColor: colors.winePurple,
          color: colors.white
        },
      },

      // ✅ для variant="contained"
      contained: {
        backgroundColor: colors.winePurple,
        color: colors.white,
        padding: '10px',
        "&:hover": {
          backgroundColor: colors.green,
          color: colors.black
        },
        "&:active": {
          backgroundColor: colors.winePurple,
          color: colors.white
        },
      },
    },
  },
};

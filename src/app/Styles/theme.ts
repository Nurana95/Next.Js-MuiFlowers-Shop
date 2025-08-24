import { createTheme } from '@mui/material/styles';
import { typography } from './typography';

import { colors } from './colors';
import {
  iconButton, button, tabsComponents, formLabel,
  radio, formControlLabel, listItem, accordion, avatar, slider,
  card, select, chip, container, badge, muiLink, textField, menu, divider,
} from './Components/export'


const theme = createTheme({
  palette: {
    primary: {
      main: colors.green,
      dark: colors.grey,
      light: colors.disabled
    },
    secondary: {
      main: colors.winePurple,
      light: colors.lightBlack
    },
    warning: {
      main: colors.pinkishPurple,
    },


  },
  typography,
  components: {

    ...listItem,
    ...accordion,
    ...avatar,
    ...slider,
    MuiFormLabel: formLabel,
    MuiRadio: radio,
    MuiFormControlLabel: formControlLabel,
    MuiLink: muiLink,
    ...tabsComponents,
    MuiTextField: textField,
    MuiIconButton: iconButton,
    ...button,
    ...select,
    ...chip,
    ...card,
    ...menu,
    ...badge,
    ...container,
    MuiDivider: divider,

    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.black,
        }
      }
    },
  }
});

export default theme;

// src/types/mui.d.ts
export { }; // Обязательно, чтобы файл стал модулем



declare module '@mui/material/ListItem' {
  interface ListItemPropsVariantOverrides {
    text: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1Oswald: true;
    subtitle3: true;
    subtitle4: true;
    subtitle5: true;
    subtitle6: true;
    body3: true;
    body4: true;
    subtitle10: true;
    subtitle11: true;
    subtitle12: true;
    subtitle13: true;
    subtitle7: true;
    subtitle8: true;
    subtitle9: true;
    subtitle14: true;
    subtitle15: true;
    subtitle16: true;
    subtitle17: true;
    subtitle18: true;
    subtitle19: true;
    subtitle20: true;
    subtitle21: true;
    subtitle22: true;
    subtitle23: true;
    subtitle24: true;
    subtitle25: true;
    subtitle26: true;

  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsVariantOverrides {
    contained: true;
    outlined: true;
  }
}

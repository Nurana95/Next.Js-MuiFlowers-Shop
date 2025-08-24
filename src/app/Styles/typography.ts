import { colors } from "./colors"

export const typography = {
  fontFamily: `'Relative', 'Oswald', sans-serif`,
  whiteSpace: 'pre-line',
  bgcolor: 'red',

  // Headings
  h1: {
    fontFamily: 'Cormorant',
    fontSize: '200px',
    fontWeight: 300,
    lineHeight: '80%',
    letterSpacing: '40px',
    ['@media (max-width:1000px)']: {
      fontSize: '100px',
    },
    ['@media (max-width:800px)']: {
      fontSize: '50px',
      fontWeight: 300,
      fontFamily: 'Cormorant',
      letterSpacing: '3px',
    },
  },
  h1Oswald: {
    fontFamily: 'Oswald',
    fontSize: '200px',
    fontWeight: 700,
    lineHeight: '200px',
    letterSpacing: '5px',
  },
  h2: {
    fontSize: '100px',
    fontFamily: 'Cormorant',
    fontWeight: 400,
    lineHeight: '100%',
    letterSpacing: '2px',
    ['@media (max-width:800px)']: {
      fontSize: '40px',
      lineHeight: '100%',
      letterSpacing: '0.4px',
    },
  },
  h3: {
    fontSize: '60px',
    fontFamily: 'Cormorant',
    fontWeight: 400,
    lineHeight: '64px',
    letterSpacing: '0.40px',
    color: colors.green,
    whiteSpace: 'pre-line',
    ['@media (max-width:800px)']: {
      fontSize: '20px',
      lineHeight: '100%',
      letterSpacing: '0.3px',
    },

  },
  h4: {
    fontSize: '40px',
    fontWeight: 400,
    lineHeight: '100%',
    letterSpacing: '1px',
    fontFamily: 'Cormorant',
    color: colors.white,
    ['@media (max-width:800px)']: {
      fontSize: '20px',
      letterSpacing: '0px',

    },
  },
  h5: {
    fontSize: '30px',
    fontFamily: 'Oswald',
    fontWeight: 700,
    lineHeight: '100%',
    letterSpacing: '0.64px',
    color: colors.green,
    ['@media (max-width:800px)']: {
      fontSize: '20px',
      lineHeight: '130%',
      letterSpacing: '0.56px',
    },
  },
  h6: {
    fontSize: '20px',
    fontFamily: 'Cormorant',
    fontWeight: 300,
    lineHeight: '100%',
    letterSpacing: '3px',
    color: colors.white,
  },

  // Subtitles
  subtitle1: {
    fontWeight: 400,
    fontSize: '10px',
    letterSpacing: 0,
  },
  subtitle2: {
    fontSize: '20px',
    fontWeight: 300,
    lineHeight: '26px',
    letterSpacing: '0.48px',
    whiteSpace: 'pre-line',
    textTransform: 'none' as const,
    color: colors.white,
    ['@media (max-width:800px)']: {
      fontSize: '14px',
    },
  },
  subtitle3: {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '100%',
    letterSpacing: '0.5px',
    color: colors.white,
    ['@media (max-width:800px)']: {
      fontSize: '14px',
    },
  },
  subtitle4: {
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '150%',
    color: colors.white,
    letterSpacing: '0.56px',
  },
  subtitle5: {
    fontSize: '14px',
    fontWeight: 300,
    ml: 1,
    textDecoration: 'line-through',
    color: colors.greyLight,
  },
  subtitle6: {
    fontWeight: 400,
    fontSize: '10px',
    letterSpacing: '0px',
    lineHeight: '120%',
    fontFamily: `Roboto Condensed, sans-serif`,
    textTransform: 'none' as const,
  },
  subtitle7: {
    fontWeight: 400,
    fontSize: '12px',
    letterSpacing: '0.56px',
    lineHeight: '100%',
    color: colors.white,
  },
  subtitle9: {
    fontWeight: 700,
    fontSize: '12px',
    letterSpacing: '1px',
    lineHeight: '100%',
    color: colors.pinkishPurple,
    textDecoration: 'underline'
  },
  subtitle10: {
    fontSize: '30px',
    fontWeight: 300,
    lineHeight: '100%',
    letterSpacing: '1px',
    textDecoration: 'line-through',
    opacity: 0.5,
    color: colors.disabled,
    ['@media (max-width:800px)']: {
      fontSize: '20px',
    },
  },
  subtitle11: {
    fontWeight: 300,
    fontSize: '12px',
    lineHeight: '150%',
    color: colors.white,
    letterSpacing: '0.56px',
    textTransform: 'none' as const,
  },
  subtitle12: {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '100%',
    letterSpacing: '1px',
    color: colors.disabled,
  },
  subtitle13: {
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: '100%',
    letterSpacing: '0.5px',
    color: colors.pinkishPurple,
    ['@media (max-width:800px)']: {
      fontSize: '14px',
    },
  },
  subtitle14: {
    fontSize: '20px',
    fontWeight: 300,
    lineHeight: '30px',
    letterSpacing: '0px',
    color: colors.white,
    ['@media (max-width:800px)']: {
      fontSize: '14px',
      lineHeight: '150%',
    },
  },
  subtitle15: {
    fontWeight: 300,
    fontSize: '20px',
    color: colors.white,
    lineHeight: '26px',
    letterSpacing: '0.56px',
    whiteSpace: 'pre-line',
    ['@media (max-width:800px)']: {
      fontSize: '14px',
      lineHeight: '100%',
      letterSpacing: '0.4px',
    },
  },
  subtitle16: {
    fontWeight: 700,
    fontSize: '12px',
    letterSpacing: '0.2px',
    lineHeight: '100%',
    color: colors.green,
  },
  subtitle17: {
    fontSize: '30px',
    fontFamily: 'Oswald',
    fontWeight: 700,
    lineHeight: '100%',
    letterSpacing: '0.64px',
    color: colors.green,
    ['@media (max-width:800px)']: {
      fontSize: '14px',
      lineHeight: '100%',
      letterSpacing: '0.56px',
    },

  },

  subtitle18: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '150%',
    color: colors.white,
    letterSpacing: '0.56px',
    ['@media (max-width:800px)']: {
      fontSize: '12px',
      letterSpacing: '0.2px',
    },
  },
  subtitle19: {
    fontWeight: 700,
    fontSize: '12px',
    letterSpacing: '0.2px',
    lineHeight: '150%',
    color: colors.green,
    ['@media (max-width:800px)']: {
      fontSize: '8px',
      letterSpacing: '0.56px',
    },
  },
  subtitle20: {
    fontWeight: 400,
    fontSize: '12px',
    letterSpacing: '0.5px',
    lineHeight: '150%',
    color: colors.white,
    ['@media (max-width:800px)']: {
      fontSize: '8px',
      letterSpacing: '0.56px',
    },
  },
  subtitle21: {
    fontSize: '20px',
    fontWeight: 300,
    lineHeight: '26px',
    letterSpacing: '0.48px',
    whiteSpace: 'pre-line',
    color: colors.white,
    ['@media (max-width:800px)']: {
      fontSize: '14px',
      whiteSpace: 'none',

    },
  },
  subtitle22: {
    fontSize: '20px',
    fontWeight: 300,
    lineHeight: '100%',
    letterSpacing: '0.48px',
    color: colors.white,
    textTransform: 'none' as const,

    ['@media (max-width:800px)']: {
      fontSize: '14px',
      lineHeight: '150%',
    },
  },
  subtitle23: {
    fontSize: '20px',
    fontWeight: 300,
    lineHeight: '150%',
    letterSpacing: '0px',
    color: colors.white,
    textTransform: 'none' as const,
    ['@media (max-width:800px)']: {
      fontSize: '14px',
    },
  },
  subtitle24: {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '150%',
    letterSpacing: '0px',
    color: colors.green,
    ['@media (max-width:800px)']: {
      fontSize: '14px',
    },
  },
  subtitle25: {
    fontSize: '20px',
    fontWeight: 300,
    lineHeight: '150%',
    letterSpacing: '0.56px',
    whiteSpace: 'pre-line',
    color: colors.white,
    ['@media (max-width:800px)']: {
      fontSize: '14px',
      whiteSpace: 'inherit',

    },
  },

  subtitle26: {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '150%',
    letterSpacing: '0.56px',
    whiteSpace: 'pre-line',
    textTransform: 'none' as const,
    color: colors.white,
    ['@media (max-width:800px)']: {
      fontSize: '14px',
      letterSpacing: '0px',

    },
  },

  // Body

  body1: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '150%',
    color: colors.white,
    letterSpacing: '0.56px',
  },
  body2: {
    fontWeight: 300,
    fontSize: '10px',
    color: colors.white,
    lineHeight: 1.5,
    letterSpacing: 1,
  },
  body3: {
    fontWeight: 300,
    fontSize: '12px',
    color: colors.white,
    lineHeight: '120%',
    letterSpacing: '0.56px',
  },
  body4: {
    fontWeight: 400,
    fontSize: '10px',
    color: colors.white,
    lineHeight: '150%',
    letterSpacing: '0.56px',
  },

  // Span
  span: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '150%',
    color: colors.white,
    letterSpacing: '0.56px',
  },
  caption: {
    fontWeight: 400,
    fontSize: '10px',
    color: `${colors.green} !important`,
    textDecoration: 'underline !important',
    lineHeight: '150%',
    letterSpacing: '0.56px',
    ['@media (max-width:800px)']: {
      fontSize: '8px',
      letterSpacing: '0.56px',
    },
  }
}

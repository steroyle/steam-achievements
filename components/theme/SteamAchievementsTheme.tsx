import { MantineThemeOverride } from '@mantine/core';

const SteamAchievementsTheme: MantineThemeOverride = {
  colorScheme: 'light',
  breakpoints: {
    xs: 500,
    sm: 800,
    md: 1000,
    lg: 1200,
    xl: 1550,
  },
  colors: {
  },
  components: {
    Title: {
      styles: (theme) => ({
        root: {
          fontFamily: 'inherit',
          fontWeight: 700,
        },
      }),
    },
    Button: {
      styles: (theme) => ({
        root: {
          '&:hover': {
          },
          '&:focus-visible': {
          },
        },
      }),
    },
  },
  globalStyles: (theme) => ({
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },
    html: {
      fontSize: '62.5%', // resetting base font to make REM calculations easier
      padding: 0,
      margin: 0,
    },
    body: {
      padding: 0,
      margin: 0,
      ...theme.fn.fontStyles(),
      fontSize: '1.6rem', // resetting base font back to 16px
    },
    a: {
    },
    li: {
    },
    p: {
    },
  }),
};

export default SteamAchievementsTheme;
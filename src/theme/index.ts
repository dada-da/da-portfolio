import { PaletteOptions, createTheme, css } from '@mui/material/styles';

export type AllowedTheme = NonNullable<PaletteOptions['mode']>;

export const DEFAULT_THEME: AllowedTheme = 'dark';

export const lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 390,
      sm: 600,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: { main: '#88CCCA' },
    secondary: { main: '##973133' },
    background: {
      default: '#f0e7db',
      paper: '#FFF8EC80',
    },
    grey: {
      100: '#B4B4B4',
      200: '#484848',
    },
    text: {
      primary: '#151515',
      secondary: '#484848',
      disabled: '#B4B4B4',
    },
    mode: 'light',
  },
});

export const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 390,
      sm: 600,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: { main: '#88CCCA' },
    secondary: { main: '##e6818e' },
    background: {
      default: '#121212',
      paper: '#12121280',
    },
    grey: {
      100: '#B4B4B4',
      200: '#484848',
    },
    text: {
      primary: '#151515',
      secondary: '#484848',
      disabled: '#B4B4B4',
    },
    mode: 'dark',
  },
});

export const globalStyles = css`
  :root {
    body {
      background-color: #f0e7db;
      color: #121212;
    }
  }

  [data-theme='dark'] {
    body {
      background-color: #201f24;
      color: #efeff0;
    }
  }
`;

import { PaletteOptions, createTheme, css } from '@mui/material/styles';

export type AllowedTheme = NonNullable<PaletteOptions['mode']>;

export const DEFAULT_THEME: AllowedTheme = 'dark';

export const lightTheme = createTheme({
  palette: {
    primary: { main: '#319795' },
    secondary: { main: '##973133' },
    background: {
      default: '#f0e7db',
      paper: '#FFF8EC',
    },
    mode: 'light',
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: { main: '#81e6d9' },
    secondary: { main: '##e6818e' },
    background: {
      default: '#121212',
      paper: '#2F3135',
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

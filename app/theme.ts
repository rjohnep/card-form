import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
  colors: {
    main: '',
    secondary: '',
    bg: '#fff'
  }
};

export type ThemeT = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<ThemeT>;

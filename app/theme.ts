import baseStyled, {
  ThemedStyledInterface,
  createGlobalStyle
} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto';
  }
`;

export const theme = {
  colors: {
    main: '',
    secondary: '',
    bg: '#fff',
    white: '#fff',
    black: '#000'
  }
};

export type ThemeT = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<ThemeT>;

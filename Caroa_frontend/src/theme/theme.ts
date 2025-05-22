import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#734D2A',
    primaryHover: '#5A3A1F',
    secondary: '#CE4F2B',
    terciary: '#F2E6D5',
    complemt: '#E8CBA0',

  },
  fontSizes: {
    small: '12px',
    medium: '16px',
    large: '20px',
  },
};

export type ThemeColor = 'primary' | 'primaryHover' | 'secondary' | 'terciary' | 'complemt';
export type ThemeFontSize = 'small' | 'medium' | 'large';

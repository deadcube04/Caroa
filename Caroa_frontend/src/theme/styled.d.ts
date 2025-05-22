import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
      
    colors: {
      primary: string;
      primaryHover: string;
      secondary: string;
      terciary: string;
        complemt: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
  }
}


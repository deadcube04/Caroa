const theme = {
  grid: {
    container: '1440px',
    gutter: '3.2rem',
  },
  border: {
    radius: {
      full: '9999rem',
      xlg: '3.125rem',
      medium: '1.125rem',
      xsmall: '0.8rem',
      xxsmall: '0.4rem',
    },
  },
  font: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      '3xlarge': '3.2rem',
      '4xlarge': '4.8rem',
    },
  },
  colors: {

    primary: '#734D2A',        // Marrom barro
    primaryHover: '#5A3A1F',   // Marrom escuro
    secondary: '#CE4F2B',      // Vermelho telha
    terciary: '#F2E6D5',       // Bege areia
    complemt: '#E8CBA0',       // Amarelo claro
    extra: '#3B8C6E',          // Verde cacto

    accent: '#F2B705',         // Amarelo sol
    sky: '#AEE1F9',            // Azul céu
    fabric: '#D94880',         // Rosa vibrante de chita
    neutral: '#FFFDF8',

    nav_bar: '#1F2022',

    purple_500: '#6366f1',
    purple_700: '#1A194D',
    purple_800: '#2A2D45',
    purple_900: '#1E2235',

    blue_600: '#007595',
    blue_800: '#111827',
    blue_900: '#000214',

    midnight_500: '#1e2040',

    gray_500: '#6A7282',

    slate_700: 'oklch(37.2% 0.044 257.287)',

    green_200: '#16A34A',
    green_500: 'oklch(62.7% 0.194 149.214)',
    green_600: '#0D2F23',

    teal_700: '#00866e',

    red_200: '#DC2626',
    red_600: '#2F0D0D',


    yellow_200: '#F8B425',
    yellow_600: '#292B12',

    white: '#fff',
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
    xxxlarge: '6.4rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  breakpoints: {
    xs: '320px',
    sm: '450px',
    md: '768px',
    lg: '1170px',
    xl: '1440px',
  },
};

export default theme;
export { theme };

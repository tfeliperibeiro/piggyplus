import { extendTheme } from '@chakra-ui/react';

export const globalTheme = extendTheme({
  colors: {
    primary: {
      300: '#B794F4',
      400: '#9F7AEA',
      500: '#805AD5',
      700: '#553C9A',
      800: '#44337A',
    },
    text: {
      primary: {
        300: '#CBD5E0',
        400: '#A0AEC0',
        500: '#718096',
        600: '#4A5568',
        800: '#1A202C',
      },
      light: {
        900: 'RGBA(255, 255, 255, 0.92)',
      },
    },
    sucess: {
      primary: '#68D391',
    },
    error: {
      primary: '#FC8181',
    },
    alert: {
      primary: '#F6E05E',
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: 'whiteAlpha.900',
      },
    },
  },
  breakpoints: {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
  },
});

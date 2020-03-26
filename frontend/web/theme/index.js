import { createMuiTheme } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E02041',
      light: '#DE3C58',
      dark: '#E0092E',
      contrastText: '#fff',
    },
    secondary: {
      main: '#FDBA63',
      light: '#FEDB98',
      dark: '#E5AA5A',
      contrastText: '#fff',
    },
    accent: {
      main: '#3EC2CF',
      light: '#61C9D4',
      dark: '#37B1BD',
      contrastText: '#fff',
    },
    action: {
      main: '#3EC2CF',
      contrastText: '#fff',
    },
    error: {
      main: '#E96F6F',
    },
    success: {
      main: '#6ECF95',
    },
    text: {
      primary: '#828282',
      secondary: '#BDBDBD',
    },
    background: {
      default: '#F0F0F5',
      border: '#E0E0E0',
      primary: '#F2F2F2'
    },
    white: {
      default: '#FFFFFF',
    },
    black: {
      default: '#000000',
    },
    orange: {
      default: '#FFB350'
    }

  },
  typography: {
    fontFamily: ["Montserrat", "Helvetica", "Arial", "sans-serif"].join(', '),
    fontWeightBold: 800,
    h1: {
      fontFamily: ["Montserrat", "Helvetica", "Arial", "sans-serif"].join(', '),
      fontWeight: "normal",
      fontSize: "40px",
      lineHeight: "55px",
    },
    h2: {
      fontFamily: ["Montserrat", "Helvetica", "Arial", "sans-serif"].join(', '),
      fontWeight: "normal",
      fontSize: "36px",
      lineHeight: "49px",
    },
    h3: {
      fontFamily: ["Montserrat", "Roboto", "Helvetica", "Arial", "sans-serif"].join(', '),
      fontWeight: "normal",
      fontSize: "28px",
      lineHeight: "38px",
    },
    h4: {
      fontFamily: ["Montserrat", "Helvetica", "Arial", "sans-serif"].join(', '),
      fontWeight: "normal",
      fontSize: "24px",
      lineHeight: "30px",
    },
    h5: {
      fontFamily: ["Montserrat", "Helvetica", "Arial", "sans-serif"].join(', '),
      fontWeight: "normal",
      fontSize: "18px",
      lineHeight: "25px",
    },
    h6: {
      fontFamily: ["Montserrat", "Helvetica", "Arial", "sans-serif"].join(', '),
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "19px",
    },
    body1: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif"',
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "24px",
    },
    caption: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif"',
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "18px",
    },
  }
});

export default theme;

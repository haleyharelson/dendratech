import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3a5a40',
      light: '#588157',
    },
    secondary: {
      main: '#a3b18a',
      light: '#dad7cd',
      dark: '#344e41',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#3a5a40',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: '20px 10px',
        margin: '10px',
        backgroundColor: '#fff', // 5d737e
      },
    },
    MuiButton: {
      root: {
        margin: '5px',
      },
    },
  },
});
export default theme;
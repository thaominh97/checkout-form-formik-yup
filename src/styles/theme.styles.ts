import { responsiveFontSizes, createTheme } from '@mui/material';
import { green } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    // type: "dark",
    primary: green,
    secondary: green,
  },
  typography: {
    fontSize: 30,
  }
});
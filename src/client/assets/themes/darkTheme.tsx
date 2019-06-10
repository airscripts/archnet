/**
 * Importing some Material-UI utilities.
 */
import { createMuiTheme } from "@material-ui/core/styles";

/**
 * Building Archnet's own Dark Theme, following the
 * Material Design principles.
 */
export const darkTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#212121",
      dark: "#002884",
      contrastText: "#fff",
    },

    secondary: {
      light: "#ff7961",
      main: "#2e7d32",
      dark: "#ba000d",
      contrastText: "#000",
    },

    text: {
      primary: "#fff",
      secondary: "#000",
      disabled: "#fff",
      hint: "#fff",
    },

    background: {
        default: "#303030",
        paper: "#424242",
    },
  },

  typography: {
    "fontFamily": "\"Open Sans\", \"Helvetica\", \"Arial\", sans-serif",
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   }
});
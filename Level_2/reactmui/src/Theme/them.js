import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#062748",
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#2dd4bf",
      dark: "#14b8a6",
      contrastText: "#ffffff",
    },

    info: {
      main: "#3b82f6",
    },

    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },

    text: {
      primary: "#0c0b0b",
      secondary: "#393838",
    },
  },

  typography: {
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },

  shape: {
    borderRadius: 8,
  },

  button: {
    minWidth: "auto",
    padding: "8px 18px",
    borderRadius: "10px",
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },

        body: {
          margin: 0,
          fontFamily: "Arial, Helvetica, sans-serif",
          boxSizing: "border-box",
        },

        "*": {
          boxSizing: "border-box",
        },
      },
    },
  },
});

export default theme;
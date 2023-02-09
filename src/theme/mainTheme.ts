import { createTheme } from "@mui/material/styles";

export const mainTheme = createTheme({
  palette: {
    // primary: {
    //   // main: "#FF7E41",
    // },
    secondary: {
      light: "#F4F5FB",
      main: "#676e8a",
    },
  },
  typography: {
    fontFamily: ["'Rubik'", " sans-serif"].join(","),
  },
});

export const titleStyle = createTheme({});

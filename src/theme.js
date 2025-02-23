import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  // theme dùng để nhất quán màu cho ứng dụng
  palette: {
    mode: "light", //Default is light
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    text: {
      secondary: red[500],
    },
  },
});

export default theme;

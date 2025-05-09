import { createTheme } from "@mui/material";
import { blue, brown } from "@mui/material/colors";

// Light Theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#563cec', // ✅ কালো রঙ
    },
    secondary: {
      main: brown[500],
    },
    bw: {
      main: '#E8ECF4',
    },
  },
});

// Dark Theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff0000', // ✅ লাল রঙ
    },
    secondary: {
      main: blue[500],
    },
    bw: {
      main: '#000000',
    },
  },

  components:{
    MuiButton:{
        styleOverrides:{
            containedPrimary:{
                backgroundColor:blue[200],
                color: '#fff',
            }
        }
    }
  }
});

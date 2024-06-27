import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'atropos/css'



AOS.init({
  duration : 1000,
  // once : true
});

function App() {

  const theme = createTheme({
    palette : {
      primary : {
        main : "#EC1C24",
        bg : "#180203",
        bg2 : "#130202",
        box : "#231717",
        white : "#F5F5F5",
      },
      text : {
        primary : "#F5F5F5",
        secondary : "#C9C9C9"
      }
    },
    typography : {
      fontFamily : '"Inter", sans-serif',
      button : {
        textTransform : "none",
        fontSize : 16,
        fontWeight : 700
      }
    },
    spacing : 2
  })
  
  
  return (
    <ThemeProvider theme={theme}>
      <MyApp />
    </ThemeProvider>
  )

}

const MyApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { Stack } from "@mui/material";
import Nav from "../components/Nav";
import Loading from "../components/Loading";
import Main from "../Sections/Main";
import Services from "../Sections/Services";
import Packages from "../Sections/Packages";
import Why from "../Sections/Why";
import How from "../Sections/How";
import { Portfolio } from "../Sections/Portfolio";
import Niches from "../Sections/Niches";
import Reviews from "../Sections/Reviews";
import FAQs from "../Sections/FAQs";
import Footer from "../components/Footer";
import { useEffect, useRef } from "react";
import { gsap } from 'gsap';

const Home = () => {

  const app = useRef(null)
  
  useEffect(() => {

    gsap.to(app.current, {
        duration: 1,
        visibility : "visible"
    });
    
} , [])
  
  return (
    <Stack overflow={"hidden"} bgcolor={"primary.bg"} visibility={"hidden"} ref={app} >
      
        <Loading /> 
        <Nav />
        <Main />
        <Services />
        <Packages />
        <How />
        <Portfolio />
        <Why />
        <Niches />
        <Reviews />
        <FAQs />
        <Footer />
      
    </Stack>
  )
}

export default Home

import { Stack } from "@mui/material";
import Nav from "../components/Nav";
import { useRef } from "react";
import Loading from "../components/Loading";
// import gsap from "gsap";
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

const Home = () => {

  // const [active, setActive] = useState(true)
  const homeRef = useRef(null)
  
  // useEffect(() => {
  //   setTimeout(() => {
  //     gsap.from(homeRef.current, { duration: 1 , y : 1500 , opacity : 0})
  //   }, 2500);
  // })
  
  // useEffect(() => {
  //   !active && ;
  // } , [active])
  
  return (
    <Stack overflow={"hidden"} bgcolor={"primary.bg"} >
      
        <Loading /> 
        <div ref={homeRef}>
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
        </div>
      
    </Stack>
  )
}

export default Home

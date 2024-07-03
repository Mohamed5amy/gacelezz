import { Button, Stack } from "@mui/material";
import logo from "../images/logo.svg"
import { useEffect, useRef, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import {gsap} from "gsap";

const Nav = () => {

  const [active, setActive] = useState(false)
  
  return (
    <Stack alignItems={"center"} justifyContent={"space-between"} spacing={12} bgcolor={"primary.bg"} py={8} direction={"row"} px={{xs : 10 , sm : 20 , md : 20 , lg : 50}} className="Navbar">
      {/* Left Icon */}
      <img src={logo} alt="Logo" style={{maxWidth : 90}} />
      {/* Middle List */}
      <List active={active} setActive={setActive} />
      {/* Right Button */}
      <Button variant="outlined" sx={{padding : {md : "12px 24px" , lg : "16px 54px"} , borderRadius : "16px" , transition : ".5s" , display : {xs : "none" , md : "block"} , "&:hover" : {
        color : "primary.white",
        bgcolor : "primary.main"
      }}}> Contact Us </Button>
      {/* Menu Icon */}
      <MenuIcon onClick={() => setActive(!active)} sx={{
          display : { xs : "block" , md : "none" },
          width : "30px",
          height : "30px",
          cursor : "pointer",
          transition : ".5s",
          color : "primary.white",
          "&:hover": {
            color : "primary.main"
          }
      }} />
    </Stack>
  )
}

const List = ({active , setActive}) => {

  const containerRef = useRef(null)
  
  useEffect(() => {
    active && gsap.from(containerRef.current, { duration: 1 , y : 50 , opacity : 0 });
  } , [active])
  
  return (
    <Stack color={"primary.white"} spacing={!active ? {md : 8 , lg : 18} : 0} direction={"row"} className={`list ${active ? "active" : "" }`} display={{ xs : "none" , md : "flex" }} ref={containerRef}>
      <a onClick={() => setActive(false)} href="/" >Home</a>
      <a onClick={() => setActive(false)} href="#packages">Services</a>
      <a onClick={() => setActive(false)} href="#how">How it works</a>
      <a onClick={() => setActive(false)} href="#portfolio">Portfolio</a>
      <a onClick={() => setActive(false)} href="#reviews">Reviews</a>
      <a onClick={() => setActive(false)} href="#faqs">FAQs</a>
    </Stack>
  )
}

export default Nav

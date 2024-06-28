import { Box, Stack, Typography } from '@mui/material'
import logo from "../images/logo.svg"
import { NavLink } from 'react-router-dom'
import insta from "../images/insta.png"
import whats from "../images/whats.png"
import mail from "../images/mail.png"

const Footer = () => {
  return (
    <Stack alignItems={"Center"} bgcolor={"#180203"} px={{xs : 10 , sm : 20 , md : 20 , lg : 50}} pt={20} pb={12}>
        <img src={logo} width={140} alt="" />
        <Stack color={"primary.white"} spacing={{xs : 4 , md : 12}} textAlign={"center"} direction={{xs : "column" , sm : "row"}} my={16}>
            <NavLink to="/"><Typography sx={{transition : ".5s" , "&:hover" : {color : "primary.main" , translate : "0 -3px"}}} >Home</Typography></NavLink>
            <a href="#services"><Typography sx={{transition : ".5s" , "&:hover" : {color : "primary.main" , translate : "0 -3px"}}} >Services</Typography></a>
            <a href="#packages"><Typography sx={{transition : ".5s" , "&:hover" : {color : "primary.main" , translate : "0 -3px"}}} >Packages</Typography></a>
            <a href="#how"><Typography sx={{transition : ".5s" , "&:hover" : {color : "primary.main" , translate : "0 -3px"}}} >How it works</Typography></a>
            <a href="#portfolio"><Typography sx={{transition : ".5s" , "&:hover" : {color : "primary.main" , translate : "0 -3px"}}} >Portfolio</Typography></a>
            <a href="#reviews"><Typography sx={{transition : ".5s" , "&:hover" : {color : "primary.main" , translate : "0 -3px"}}} >Reviews</Typography></a>
            <a href="#faqs"><Typography sx={{transition : ".5s" , "&:hover" : {color : "primary.main" , translate : "0 -3px"}}} >FAQs</Typography></a>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={12}>
            <Box sx={{transition : "1s" , "&:hover" : {scale : "1.1" , rotate : "360deg"}}} ><img src={mail} alt="" /></Box>
            <Box sx={{transition : "1s" , "&:hover" : {scale : "1.1" , rotate : "360deg"}}} ><img src={insta} alt="" /></Box>
            <Box sx={{transition : "1s" , "&:hover" : {scale : "1.1" , rotate : "360deg"}}} ><img src={whats} alt="" /></Box>
        </Stack>
    </Stack>
)
}

export default Footer
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material"
import insta from "../images/insta.png"
import whats from "../images/whats.png"
import mail from "../images/mail.png"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react"



const FAQs = () => {
    
  return (
    <Stack bgcolor={"#130202"} px={{xs : 10 , sm : 20 , md : 20 , lg : 50}} py={{xs : 30 , sm : 40}}>
      <Typography fontWeight={400} fontSize={16} lineHeight={"140%"} color={"primary.white"} textAlign={"center"} mb={8} >FAQ</Typography>
      <Typography fontWeight={700} fontSize={{ xs: 24, md: 32 }} lineHeight={"140%"} color={"primary.white"} textAlign={"center"} mb={20} >Have <span style={{color : "#EC1C24"}} >questions?</span> </Typography>
      <Grid container spacing={40}>
        <Grid item xs={7.5}>
            <FAQ q={"Can I start with no experience?"} a={"Sure, take your time. If you have any questions or need further assistance, feel free to let me know!"} />
            <FAQ q={"Are these videos monetizable?"} a={"Sure, take your time. If you have any questions or need further assistance, feel free to let me know!"} />
            <FAQ q={"Are the voiceover artists real or AI?"} a={"Sure, take your time. If you have any questions or need further assistance, feel free to let me know!"} />
            <FAQ q={"Can you handle bulk orders?"} a={"Sure, take your time. If you have any questions or need further assistance, feel free to let me know!"} />
        </Grid>
        <Grid item xs={4.5}>
            <Box border={"1px solid #453838"} padding={"32px 24px"} borderRadius={"16px"} bgcolor={"#180203"}>
                <Typography fontSize={32} fontWeight={700} lineHeight={"140%"} textAlign={"center"} color={"primary.white"} mb={20}>Contact and get your first video 50% off.</Typography>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={12}>
                    <Box sx={{transition : "1s" , "&:hover" : {scale : "1.1" , rotate : "360deg"}}} ><img src={insta} alt="" /></Box>
                    <Box sx={{transition : "1s" , "&:hover" : {scale : "1.1" , rotate : "360deg"}}} ><img src={whats} alt="" /></Box>
                    <Box sx={{transition : "1s" , "&:hover" : {scale : "1.1" , rotate : "360deg"}}} ><img src={mail} alt="" /></Box>
                </Stack>
            </Box>
        </Grid>
      </Grid>
    </Stack>
  )
}

const FAQ = ({q , a}) => {

    const [active, setActive] = useState(0)
    
    return (
        <Stack mb={active ? 2 : 8} height={active === 1 ? "220px" : "89.6px"} border={!active && "1px solid #453838"} borderRadius={"16px"} bgcolor={"#180203"} sx={{transition : ".5s" , "&:hover" : {cursor : "pointer"}}} onClick={() => active === 0 ? setActive(1) : setActive(0)} overflow={"hidden"}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} bgcolor={active && "primary.main"} padding={12} position={"relative"}>
                <Typography fontSize={20} fontWeight={500} lineHeight={"150%"} textAlign={"center"} color={"primary.white"}>{q}</Typography>
                <IconButton color="primary" sx={{transition : ".5s" , rotate : active === 1 ? "180deg" : "0deg"}} > <KeyboardArrowDownIcon sx={{color : active === 1 ? "#F5F5F5" : "#EC1C24"}} /> </IconButton>
            </Stack>
            <Stack p={12} border={active && "1px solid #453838"} mt={4} borderRadius={"0 0 16px 16px"}>
                <Typography lineHeight={"150%"} color={"text.secondary"} fontSize={20}> {a} </Typography>
            </Stack>
        </Stack>
    )
}

export default FAQs
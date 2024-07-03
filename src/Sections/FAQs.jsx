import { Box, Grid, IconButton, Stack, Typography } from "@mui/material"
import insta from "../images/insta.png"
import whats from "../images/whats.png"
import mail from "../images/mail.png"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react"
import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const FAQs = () => {

    const box1 = useRef(null)
    const box2 = useRef(null)
    const box3 = useRef(null)

    useEffect(() => {

        gsap.from(box1.current, {
            duration: 1,
            y : 50,
            opacity : 0,
            scrollTrigger: {
            trigger: box1.current,
            start: "top 80%", // when the top of the element hits 80% of the viewport height
            end: "top 50%", // when the top of the element hits 80% of the viewport height
            scrub: true, // Makes the animation smooth
            markers: false // Enable markers for debugging
            }
        });

        gsap.from(box2.current, {
        duration: 1,
        y : 30,
        opacity : 0,
        scrollTrigger: {
            trigger: box2.current,
            start: "top 80%", // when the top of the element hits 80% of the viewport height
            end: "top 50%", // when the top of the element hits 80% of the viewport height
            scrub: true, // Makes the animation smooth
            markers: false // Enable markers for debugging
        }
        });

        gsap.from(box3.current, {
            duration: 1,
            y : 150,
            opacity : 0,
            scrollTrigger: {
                trigger: box2.current,
                start: "top 100%", // when the top of the element hits 80% of the viewport height
                end: "top 10%", // when the top of the element hits 80% of the viewport height
                scrub: true, // Makes the animation smooth
                markers: false // Enable markers for debugging
            }
            });
        
    } , [])
    
  return (
    <Stack bgcolor={"#130202"} px={{xs : 10 , sm : 20 , md : 20 , lg : 50}} py={{xs : 30 , sm : 40}} id="faqs">
      <Typography ref={box1} fontWeight={400} fontSize={16} lineHeight={"140%"} color={"primary.white"} textAlign={"center"} mb={8} >FAQ</Typography>
      <Typography ref={box2} fontWeight={700} fontSize={{ xs: 24, md: 32 }} lineHeight={"140%"} color={"primary.white"} textAlign={"center"} mb={20} >Have <span style={{color : "#EC1C24"}} >questions?</span> </Typography>
      <Grid container spacing={{xs : 20 , lg : 40}}>
        <Grid item xs={12} md={7.5} >
            <FAQ q={"Can I start with no experience?"} a={"Absolutely! Contact us, and we will guide you through the process if you're a beginner, providing tips and suggestions to help you succeed."} />
            <FAQ q={"Are these videos monetizable?"} a={"Yes, 100%. All our videos are checked for copyright compliance before submission."} />
            <FAQ q={"Are the voiceover artists real or AI?"} a={"All our male and female artists are 100% human."} />
            <FAQ q={"Can you handle bulk orders?"} a={"Yes, we can handle the production of up to 50 videos per week."} />
        </Grid>
        <Grid item xs={12} md={4.5} ref={box3} >
            <Box border={"1px solid #453838"} padding={"32px 24px"} borderRadius={"16px"} bgcolor={"#180203"}>
                <Typography fontSize={{xs : 24 , sm : 32}} fontWeight={700} lineHeight={"140%"} textAlign={"center"} color={"primary.white"} mb={20}>Send Us “strategy’ To Receive A Free Growth Strategy Document For Your Channel.</Typography>
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

    const box1 = useRef(null)

    useEffect(() => {

        gsap.from(box1.current, {
            duration: 1,
            y : 50,
            opacity : 0,
            scrollTrigger: {
            trigger: box1.current,
            start: "top 90%", // when the top of the element hits 80% of the viewport height
            end: "top 60%", // when the top of the element hits 80% of the viewport height
            scrub: true, // Makes the animation smooth
            markers: false // Enable markers for debugging
            }
        });

    } , [])
    
    return (
        <Stack ref={box1} mb={active ? 2 : 8} height={{xs : active === 1 ? "250px" : "89.6px" , sm : active === 1 ? "220px" : "89.6px"}} border={!active && "1px solid #453838"} borderRadius={"16px"} bgcolor={"transparent"} sx={{transition : ".5s" , "&:hover" : {cursor : "pointer"}}} onClick={() => active === 0 ? setActive(1) : setActive(0)} overflow={"hidden"}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} bgcolor={active && "primary.main"} padding={12} position={"relative"}>
                <Typography fontSize={{xs : 16 , sm :20}} fontWeight={500} lineHeight={"150%"} color={"primary.white"}>{q}</Typography>
                <IconButton color="primary" sx={{transition : ".5s" , rotate : active === 1 ? "180deg" : "0deg"}} > <KeyboardArrowDownIcon sx={{color : active === 1 ? "#F5F5F5" : "#EC1C24"}} /> </IconButton>
            </Stack>
            <Stack p={12} border={active && "1px solid #453838"} mt={4} borderRadius={"0 0 16px 16px"} bgcolor={"#180203"}>
                <Typography lineHeight={"150%"} color={"text.secondary"} fontSize={{xs : 14 , sm : 20}}> {a} </Typography>
            </Stack>
        </Stack>
    )
}

export default FAQs
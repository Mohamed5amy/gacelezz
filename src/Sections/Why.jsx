import { Box, Button, Stack, Typography } from '@mui/material';
import why from "../images/why.png"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import pattern from "../images/pattern.png"

gsap.registerPlugin(ScrollTrigger);

const Why = () => {

  const image = useRef(null)
  const shape = useRef(null)
  const cont = useRef(null)
  
  useEffect(() => {
    // gsap.from(image.current, {
    //   duration: 10,
    //   opacity: 0,
    //   y : 150,
    //   scrollTrigger: {
    //     trigger: image.current,
    //     start: "top 80%", // when the top of the element hits 80% of the viewport height
    //     end: "top -20%", // Adjust the end position based on your needs
    //     scrub: true, // Makes the animation smooth
    //     // markers: true // Enable markers for debugging
    //   }
    // });
    gsap.from(image.current, {
      duration: 1,
      scale : 1.5,
      scrollTrigger: {
        trigger: image.current,
        start: "top 30%", // when the top of the element hits 80% of the viewport height
        scrub: false, // Makes the animation smooth
        // markers: true // Enable markers for debugging
      }
    });
    gsap.from(shape.current, {
      duration: 10,
      x : -600,
      rotate : 180,
      opacity : .5,
      scrollTrigger: {
        trigger: image.current,
        start: "top 100%", // when the top of the element hits 80% of the viewport height
        end: "top 20%", // Adjust the end position based on your needs
        scrub: true, // Makes the animation smooth
        // markers: true // Enable markers for debugging
      }
    });
    gsap.to(cont.current, {
      duration: 1,
      width : 0,
      scrollTrigger: {
        trigger: image.current,
        start: "top 30%", // when the top of the element hits 80% of the viewport height
        scrub: false, // Makes the animation smooth
        // markers: true // Enable markers for debugging
      }
    });
  }, []);
  
  return (
    <Stack direction={{xs : "column" , md : "row"}} px={{xs : 10 , sm : 20 , md : 20 , lg : 50}} py={{xs : 20 , sm : 50}} bgcolor={"#130202"} justifyContent={"space-between"} spacing={12} >

      {/* Text */}
      <Stack>

        <Typography color={"primary.white"} fontSize={32} fontWeight={700} lineHeight={"140%"} mb={16}> Why <span style={{color : "#EC1C24"}} >Gacelezz</span>? </Typography>

        <Typography color={"text.secondary"} fontSize={24} fontWeight={500} lineHeight={"130%"} mb={24} maxWidth={580}>
        Our expert team of scriptwriters, thumbnail artists, voice-over artists, and video editors ensures your videos achieve better quality, more engagement, and higher views. Trust us to help your YouTube channel grow faster.
        </Typography>

        <Button variant="outlined" sx={{padding : "16px 56px" , borderRadius : "16px" , transition : ".5s" , border : "1px solid", borderColor : "primary.white" , width : "fit-content" , "&:hover" : {
          borderColor : "primary.main",
          px : "66px"
        }}}> Contact Us </Button>

      </Stack>
      
      {/* img  */}
      <Stack position={"relative"} borderRadius={8}>
        <Stack position={"relative"} overflow={"hidden"} borderRadius={8}>
          <Stack position={"absolute"} right={0} top={0} height={"100%"} width={"100%"} bgcolor={"#130202"} zIndex={2} ref={cont}></Stack>
          <img src={why} alt="Why us" width={"100%"} ref={image} />
        </Stack>
        <Box position={"absolute"} zIndex={10} top={-50} right={{xs : -10 , md : -60}} ref={shape} maxWidth={{xs : "100px" , md : "auto"}}><img src={pattern} alt="Why us" width={"100%"} /></Box>
      </Stack>
    </Stack>
  )
}

export default Why

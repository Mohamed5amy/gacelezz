import { Box, Stack } from "@mui/material"
import { useEffect, useRef } from "react";
import { gsap , Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Typo = ({children , delay , mb}) => {

    const typo = useRef(null)
  
    useEffect(() => {
      gsap.from(typo.current, {
        duration: 1,
        width: "100%",
        delay : delay,
        ease : Power3.easeOut ,
        scrollTrigger: {
          trigger: typo.current,
        //   start: "top 80%",
          scrub: false, // Makes the animation smooth
        //   markers: true // Enable markers for debugging
        }
      });
    }, [])
    
  return (
    <Stack position={"relative"} mb={mb}>
        {children}
        <Box position={"absolute"} right={0} bottom={0} width={"0%"} height={"100%"} bgcolor={"primary.main"} ref={typo}></Box>
    </Stack>
  )
}

export default Typo
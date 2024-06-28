import { Box, Stack } from "@mui/material"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , EffectFade } from 'swiper/modules';
import p1 from "../images/p1.svg"
import p2 from "../images/p2.svg"
import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Slider = ({active , setActive , data , start}) => {

    const box1 = useRef(null)

    useEffect(() => {
        gsap.from(box1.current, {
            duration: 1,
            opacity : 0,
        });
    } , [active])
    
    
  return (
    active && <Stack ref={box1} alignItems={"center"} justifyContent={"center"} position={"fixed"} zIndex={10000} left={0} top={0} width={"100%"} height={"100%"} bgcolor={"#18020394"}>
        <Box onClick={() => setActive(false)} position={"absolute"} top={{xs : 20 , sm : 20 , md : 64}} right={{xs : 20 , sm : 20 , md : 64}} color={"#F5F5F5"} sx={{cursor : "pointer" ,"svg" : {transition : ".5s"} , "&:hover" : {color : "primary.main"}}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.6278 4.37234C19.3894 4.13401 19.0661 4.00012 18.729 4.00012C18.3919 4.00012 18.0686 4.13401 17.8302 4.37234L12 10.2025L6.16983 4.37234C5.93143 4.13401 5.60813 4.00012 5.27103 4.00012C4.93392 4.00012 4.61062 4.13401 4.37222 4.37234C4.13389 4.61074 4 4.93405 4 5.27115C4 5.60825 4.13389 5.93155 4.37222 6.16995L10.2024 12.0001L4.37222 17.8303C4.13389 18.0687 4 18.392 4 18.7291C4 19.0662 4.13389 19.3895 4.37222 19.6279C4.61062 19.8662 4.93392 20.0001 5.27103 20.0001C5.60813 20.0001 5.93143 19.8662 6.16983 19.6279L12 13.7977L17.8302 19.6279C18.0686 19.8662 18.3919 20.0001 18.729 20.0001C19.0661 20.0001 19.3894 19.8662 19.6278 19.6279C19.8661 19.3895 20 19.0662 20 18.7291C20 18.392 19.8661 18.0687 19.6278 17.8303L13.7976 12.0001L19.6278 6.16995C19.8661 5.93155 20 5.60825 20 5.27115C20 4.93405 19.8661 4.61074 19.6278 4.37234Z" fill="currentColor"/>
            </svg>
        </Box>
        <Swiper
            style={{
                width : "80%",
                minHeight : "400px",
            }}
            speed={1000}
            effect="fade"
            initialSlide={start}
            slidesPerView={1}
            navigation
            modules={[Navigation , EffectFade]}
        >   
            {data.map((item , i) => {
                return (
                    <SwiperSlide key={i}> <Stack justifyContent={"center"} width={{xs : "100%" , md : "80%"}} minHeight={"400px"} margin={"auto"} ><img src={item} alt="" width={"100%"} height={"100%"} style={{objectFit : "contain"}} /></Stack> </SwiperSlide>
                )
            })}
        </Swiper>
    </Stack>
  )
}

export default Slider
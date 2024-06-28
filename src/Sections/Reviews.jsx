import { Box, Stack, Typography } from "@mui/material"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay , Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import revImg from "../images/review.png"
import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Reviews = () => {

    const box1 = useRef(null)
    const box2 = useRef(null)

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
        
    } , [])
    
  return (
    <Stack bgcolor={"#180203"} px={{xs : 10 , sm : 20 , md : 20 , lg : 50}} py={{xs : 30 , sm : 40}} id="reviews">
      <Typography ref={box1} fontWeight={400} fontSize={16} lineHeight={"140%"} color={"primary.white"} textAlign={"center"} mb={8} >Reviews</Typography>
      <Typography ref={box2} fontWeight={700} fontSize={{ xs: 24, md: 32 }} lineHeight={"140%"} color={"primary.white"} textAlign={"center"} mb={20} > What our best clients say about <span style={{color : "#EC1C24"}} >Gacelezz</span> </Typography>
      <Swiper 
        slidesPerView={3} 
        spaceBetween={16}
        style={{maxHeight : "100%" , width : "100%" , paddingBottom : 80 , paddingLeft : 10 , paddingRight : 10}}
        autoplay={{
          delay : 3000,
          disableOnInteraction : true
        }}
        speed={1000}
        pagination={{
          clickable : true
        }}
        modules={[Autoplay , Pagination]}
        breakpoints={{
            0 : {
                slidesPerView : 1
            } , 600 : {
                slidesPerView : 2
            } , 900 : {
                slidesPerView : 3
            }
        }}
        >
        <SwiperSlide>
            <Box p={"24px"} bgcolor={"#130202"} border={"1px solid #453838"} borderRadius={"16px"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                <Stack direction={"row"} alignItems={"Center"} spacing={6} mb={12}>
                    <img src={revImg} alt="" style={{borderRadius : "50%"}} />
                    <Stack direction={{xs : "column" , lg : "row"}} spacing={{xs : 0 , lg : 6}}>
                        <Typography fontWeight={600} color={"primary.white"} >Jan Gery</Typography>
                        <Typography color={"#B6A9AA"} >Marketing at Voltage</Typography>
                    </Stack>
                </Stack>
                <Typography fontSize={18}  color={"primary.white"}>That sounds great! I’m in. What time works for you?</Typography>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box p={"24px"} bgcolor={"#130202"} border={"1px solid #453838"} borderRadius={"16px"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                <Stack direction={"row"} alignItems={"Center"} spacing={6} mb={12}>
                    <img src={revImg} alt="" style={{borderRadius : "50%"}} />
                    <Stack direction={{xs : "column" , lg : "row"}} spacing={{xs : 0 , lg : 6}}>
                        <Typography fontWeight={600} color={"primary.white"} >Jan Gery</Typography>
                        <Typography color={"#B6A9AA"} >Marketing at Voltage</Typography>
                    </Stack>
                </Stack>
                <Typography fontSize={18}  color={"primary.white"}>That sounds great! I’m in. What time works for you?</Typography>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box p={"24px"} bgcolor={"#130202"} border={"1px solid #453838"} borderRadius={"16px"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                <Stack direction={"row"} alignItems={"Center"} spacing={6} mb={12}>
                    <img src={revImg} alt="" style={{borderRadius : "50%"}} />
                    <Stack direction={{xs : "column" , lg : "row"}} spacing={{xs : 0 , lg : 6}}>
                        <Typography fontWeight={600} color={"primary.white"} >Jan Gery</Typography>
                        <Typography color={"#B6A9AA"} >Marketing at Voltage</Typography>
                    </Stack>
                </Stack>
                <Typography fontSize={18}  color={"primary.white"}>That sounds great! I’m in. What time works for you?</Typography>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box p={"24px"} bgcolor={"#130202"} border={"1px solid #453838"} borderRadius={"16px"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                <Stack direction={"row"} alignItems={"Center"} spacing={6} mb={12}>
                    <img src={revImg} alt="" style={{borderRadius : "50%"}} />
                    <Stack direction={{xs : "column" , lg : "row"}} spacing={{xs : 0 , lg : 6}}>
                        <Typography fontWeight={600} color={"primary.white"} >Jan Gery</Typography>
                        <Typography color={"#B6A9AA"} >Marketing at Voltage</Typography>
                    </Stack>
                </Stack>
                <Typography fontSize={18}  color={"primary.white"}>That sounds great! I’m in. What time works for you?</Typography>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box p={"24px"} bgcolor={"#130202"} border={"1px solid #453838"} borderRadius={"16px"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                <Stack direction={"row"} alignItems={"Center"} spacing={6} mb={12}>
                    <img src={revImg} alt="" style={{borderRadius : "50%"}} />
                    <Stack direction={{xs : "column" , lg : "row"}} spacing={{xs : 0 , lg : 6}}>
                        <Typography fontWeight={600} color={"primary.white"} >Jan Gery</Typography>
                        <Typography color={"#B6A9AA"} >Marketing at Voltage</Typography>
                    </Stack>
                </Stack>
                <Typography fontSize={18}  color={"primary.white"}>That sounds great! I’m in. What time works for you?</Typography>
            </Box>
        </SwiperSlide>
      </Swiper>
    </Stack>
  )
}


export default Reviews
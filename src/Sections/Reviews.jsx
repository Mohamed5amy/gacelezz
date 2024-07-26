import { Box, Stack, Typography } from "@mui/material"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay , Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import r1 from "../images/r1.jpeg"
import r2 from "../images/r2.jpeg"
import r3 from "../images/r3.jpeg"
import r4 from "../images/r4.jpeg"
import r5 from "../images/r5.jpeg"
import r6 from "../images/r6.jpeg"
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
                    <img src={r1} alt="" style={{borderRadius : "50%" , width : 45 , height : 45 , objectFit : "cover"}} />
                    <Stack direction={{xs : "column" , lg : "row"}} spacing={{xs : 0 , lg : 6}}>
                        <Typography fontWeight={600} color={"primary.white"} >Movie Addicts</Typography>
                    </Stack>
                </Stack>
                <Typography fontSize={18}  color={"primary.white"}>The editing skills are top-notch, consistently producing impressive work that exceeds expectations. Additionally, they utilizes top software like Trello and Frame.io, which greatly enhances our workflow and collaboration.</Typography>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box p={"24px"} bgcolor={"#130202"} border={"1px solid #453838"} borderRadius={"16px"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                <Stack direction={"row"} alignItems={"Center"} spacing={6} mb={12}>
                    <img src={r2} alt="" style={{borderRadius : "50%" , width : 45 , height : 45 , objectFit : "cover"}} />
                    <Stack direction={{xs : "column" , lg : "row"}} spacing={{xs : 0 , lg : 6}}>
                        <Typography fontWeight={600} color={"primary.white"} >Europe In Detail</Typography>
                    </Stack>
                </Stack>
                <Typography fontSize={18}  color={"primary.white"}>I am extremely pleased with the video editor I hired. They are fast communicators who keeps things moving along smoothly, ensuring that projects are delivered quickly without compromising on quality.</Typography>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box p={"24px"} bgcolor={"#130202"} border={"1px solid #453838"} borderRadius={"16px"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                <Stack direction={"row"} alignItems={"Center"} spacing={6} mb={12}>
                    <img src={r4} alt="" style={{borderRadius : "50%" , width : 45 , height : 45 , objectFit : "cover"}} />
                    <Stack direction={{xs : "column" , lg : "row"}} spacing={{xs : 0 , lg : 6}}>
                        <Typography fontWeight={600} color={"primary.white"} >Philosophy In Use</Typography>
                    </Stack>
                </Stack>
                <Typography fontSize={18}  color={"primary.white"}>The Gacelezz team really goes above and beyond. They takes the time to produce quality work and also provides feedback on what we can do better. They’re great with communication and very easy to work with.</Typography>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box p={"24px"} bgcolor={"#130202"} border={"1px solid #453838"} borderRadius={"16px"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                <Stack direction={"row"} alignItems={"Center"} spacing={6} mb={12}>
                    <img src={r3} alt="" style={{borderRadius : "50%" , width : 45 , height : 45 , objectFit : "cover"}} />
                    <Stack direction={{xs : "column" , lg : "row"}} spacing={{xs : 0 , lg : 6}}>
                        <Typography fontWeight={600} color={"primary.white"} >Bodycam Crime</Typography>
                    </Stack>
                </Stack>
                <Typography fontSize={18}  color={"primary.white"}>Man, WOW..Truly blown away with the quality of Gacelezz’s work. They exceeded my expectations in every way possible. Thanks again we&apos;ll definitely be back!</Typography>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box p={"24px"} bgcolor={"#130202"} border={"1px solid #453838"} borderRadius={"16px"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                <Stack direction={"row"} alignItems={"Center"} spacing={6} mb={12}>
                    <img src={r5} alt="" style={{borderRadius : "50%" , width : 45 , height : 45 , objectFit : "cover"}} />
                    <Stack direction={{xs : "column" , lg : "row"}} spacing={{xs : 0 , lg : 6}}>
                        <Typography fontWeight={600} color={"primary.white"} >World History Explored</Typography>
                    </Stack>
                </Stack>
                <Typography fontSize={18}  color={"primary.white"}>Video quality is excellent! They do a great job with adding their unique spin to the videos. They do a great job with sending out multiple videos and shorts on time. Would love to work with them again on another project</Typography>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box p={"24px"} bgcolor={"#130202"} border={"1px solid #453838"} borderRadius={"16px"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                <Stack direction={"row"} alignItems={"Center"} spacing={6} mb={12}>
                    <img src={r6} alt="" style={{borderRadius : "50%" , width : 45 , height : 45 , objectFit : "cover"}} />
                    <Stack direction={{xs : "column" , lg : "row"}} spacing={{xs : 0 , lg : 6}}>
                        <Typography fontWeight={600} color={"primary.white"} >Old Money Luxury</Typography>
                    </Stack>
                </Stack>
                <Typography fontSize={18}  color={"primary.white"}>Really great advice on choosing a niche and you have many revisions is something needs to get finetuned. If you want a good editor this team is the way to go. Professional help</Typography>
            </Box>
        </SwiperSlide>
      </Swiper>
    </Stack>
  )
}


export default Reviews
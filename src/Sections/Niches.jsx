import { Box, Stack, Typography } from "@mui/material"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import n1 from "../images/n1.png"
import n2 from "../images/n2.png"
import n3 from "../images/n3.png"
import n4 from "../images/n4.png"
import n5 from "../images/n5.png"
import n6 from "../images/n6.png"
import n7 from "../images/n7.png"
import n8 from "../images/n8.png"
import n9 from "../images/n9.png"
import n10 from "../images/n10.png"
import n11 from "../images/n11.png"
import n12 from "../images/n12.png"
import n13 from "../images/n13.png"
import n14 from "../images/n14.png"

const Niches = () => {
  return (
    <Stack bgcolor={"#180203"} px={{xs : 10 , sm : 20 , md : 20 , lg : 50}} py={{xs : 30 , sm : 40}} className="niches">
      <Typography fontWeight={700} fontSize={{ xs: 24, md: 32 }} lineHeight={"140%"} color={"primary.white"} textAlign={"center"} mb={20} > <span style={{color : "#EC1C24"}} >Niches</span> Worked With </Typography>
      <LeftSwipe />
      <Stack height={24} ></Stack>
      <RightSwipe />
    </Stack>
  )
}

const LeftSwipe = () => {
    return (
        <Swiper
            spaceBetween={16}
            slidesPerView={7}
            style={{maxHeight : "100%" , width : "100%"}}
            loop
            autoplay={{
                delay : 0,
                disableOnInteraction : false
            }}
            speed={5000}
            modules={[Autoplay]}
            breakpoints={{
                0 : {
                    slidesPerView : 2,
                }, 600 : {
                    slidesPerView : 3,
                }, 900 : {
                    slidesPerView : 4,
                } , 1200 : {
                    slidesPerView : 7,
                }
            }}
            >
            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n1} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}> ⁠Body cam</Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n2} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}> Cars </Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n3} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}> Compilation</Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n4} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}>Case stories</Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n5} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}>Crime</Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n6} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}> Billionaire world</Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n7} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}> Court niche</Typography>
                </Box>
            </SwiperSlide>

            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n8} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}>Mystery</Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n9} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}> NBA </Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n10} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}> Health</Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n11} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}>Luxury</Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n12} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}>Movie recap</Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n13} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}>Space</Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n14} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}>Gaming</Typography>
                </Box>
            </SwiperSlide>
        </Swiper>
    )
}

const RightSwipe = () => {
    return (
        <Swiper
            spaceBetween={16}
            slidesPerView={7}
            style={{maxHeight : "100%" , width : "100%"}}
            loop
            autoplay={{
                delay : 0,
                disableOnInteraction : false
            }}
            speed={5000}
            modules={[Autoplay]}
            dir={"rtl"}
            breakpoints={{
                0 : {
                    slidesPerView : 2,
                }, 600 : {
                    slidesPerView : 3,
                }, 900 : {
                    slidesPerView : 4,
                } , 1200 : {
                    slidesPerView : 7,
                }
            }}
            >
                
            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n8} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}>Mystery</Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n9} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}> NBA </Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n10} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}> Health</Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n11} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}>Luxury</Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n12} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}>Movie recap</Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n13} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}>Space</Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n14} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}>Gaming</Typography>
                </Box>
            </SwiperSlide>
                
            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n1} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}> ⁠Body cam</Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n2} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}> Cars </Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n3} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}> Compilation</Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n4} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}>Case stories</Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n5} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}>Crime</Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n6} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}> Billionaire world</Typography>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box height={"148px"} p={"24px 16px"} bgcolor={"#231717"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                    <Stack alignItems={"center"} justifyContent={"center"} height={64} >
                        <img src={n7} alt="" />
                    </Stack>
                    <Typography fontWeight={700} color={"primary.white"} mt={8}> Court niche</Typography>
                </Box>
            </SwiperSlide>
        </Swiper>
    )
}

export default Niches
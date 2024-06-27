import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import script from "../images/script.svg"
import voiceOver from "../images/Voiceovers.svg"
import video from "../images/Video.svg"
import reels from "../images/reels.svg"
import thumb from "../images/thumb.svg"
import seo from "../images/_SEO.svg"
import logoAndB from "../images/logoAndBanner.svg"
import Atropos from 'atropos/react';
import { useEffect, useRef } from "react";
import { gsap } from 'gsap';


const Packages = () => {

  const box1 = useRef(null)

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
  } , [])
  
  
  return (
    <Stack px={{xs : 10 , sm : 20 , md : 20 , lg : 50}} py={{xs : 30 , sm : 60}} alignItems={"center"} position={"relative"} bgcolor={"primary.box"}>
      
      <Typography position={"relative"} zIndex={1} ref={box1} fontWeight={700} fontSize={{ xs: 24, md: 32 }} lineHeight={"140%"} color={"primary.white"} textAlign={"center"} mb={24} maxWidth={1035} >We offer a range of <span style={{color : "#EC1C24"}} >comprehensive packages</span> designed to meet the diverse needs of your YouTube channel. </Typography>

      {/* First Box */}
      <Box position={"relative"} zIndex={2} bgcolor={"primary.box"} border={"1px solid #453838"} borderRadius={"16px"} p={"40px 24px"} width={"100%"}
      sx={{
        transition : ".5s" , 
        "&:hover" : {borderColor : "primary.main" , 
          boxShadow: "0px 4px 24px 0px rgba(236, 28, 36, 0.40)" , 
          translate : "0 -3px",
          "svg path" : { transition : ".5s" , fill : "#EC1C24", },
          "svg path:nth-child(1) , svg path:nth-child(2)" : {
            stroke : "#F5F5F5",
            fill : "transparent !important"
          },
        }
      }}>
        <Typography fontSize={{ xs: 24, md: 32 }} mb={16} fontWeight={700} lineHeight={"130%"} color={"text.primary"} textTransform={"none"} textAlign={"center"}>
          Individual Services
        </Typography>
        <Grid container spacing={12}>
          <Grid item xs={6} sm={3} md={2} lg={1.7}>
            <Atropos>
              <Box height={"100%"} p={"24px 16px"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                <Stack alignItems={"center"} height={64} justifyContent={"center"} ><img src={script} alt="" /></Stack>
                <Typography fontWeight={700} mt={8} lineHeight={"130%"} color={"text.primary"}>Scripts</Typography>
              </Box>
            </Atropos>
          </Grid>
          <Grid item xs={6} sm={3} md={2} lg={1.7}>
            <Atropos>
              <Box height={"100%"} p={"24px 16px"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                <Stack alignItems={"center"} height={64} justifyContent={"center"} ><img src={voiceOver} alt="" /></Stack>
                <Typography fontWeight={700} mt={8} lineHeight={"130%"} color={"text.primary"}>Voiceovers</Typography>
              </Box>
            </Atropos>
          </Grid>
          <Grid item xs={6} sm={3} md={2} lg={1.7}>
            <Atropos>
              <Box height={"100%"} p={"24px 16px"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                <Stack alignItems={"center"} height={64} justifyContent={"center"} ><img src={video} alt="" /></Stack>
                <Typography fontWeight={700} mt={8} lineHeight={"130%"} color={"text.primary"}>Video</Typography>
              </Box>
            </Atropos>
          </Grid>
          <Grid item xs={6} sm={3} md={2} lg={1.7}>
            <Atropos>
              <Box height={"100%"} p={"24px 16px"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                <Stack alignItems={"center"} height={64} justifyContent={"center"} ><img src={reels} alt="" /></Stack>
                <Typography fontWeight={700} mt={8} lineHeight={"130%"} color={"text.primary"}>Shorts/Reels</Typography>
              </Box>
            </Atropos>
          </Grid>
          <Grid item xs={6} sm={3} md={2} lg={1.7}>
            <Atropos>
              <Box height={"100%"} p={"24px 16px"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                <Stack alignItems={"center"} height={64} justifyContent={"center"} ><img src={thumb} alt="" /></Stack>
                <Typography fontWeight={700} mt={8} lineHeight={"130%"} color={"text.primary"}>Thumbnails</Typography>
              </Box>
            </Atropos>
          </Grid>
          <Grid item xs={6} sm={3} md={2} lg={1.7}>
            <Atropos>
              <Box height={"100%"} p={"24px 16px"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                <Stack alignItems={"center"} height={64} justifyContent={"center"} ><img src={seo} alt="" /></Stack>
                <Typography fontWeight={700} mt={8} lineHeight={"130%"} color={"text.primary"}>SEO</Typography>
              </Box>
            </Atropos>
          </Grid>
          <Grid item xs={6} sm={3} md={2} lg={1.7}>
            <Atropos>
              <Box height={"100%"} p={"24px 16px"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                <Stack alignItems={"center"} height={64} justifyContent={"center"} ><img src={logoAndB} alt="" /></Stack>
                <Typography fontWeight={700} mt={8} lineHeight={"130%"} color={"text.primary"}>Logo & Banner</Typography>
              </Box>
            </Atropos>
          </Grid>
        </Grid>
        <Stack alignItems={"center"} mt={20}>
          <Button variant="contained" sx={{padding : "24px 80px" , borderRadius : "16px" , transition : ".5s" , "&:hover": {px : "90px"}}}> Book Now</Button>
        </Stack>
      </Box>

      {/* Second Box */}
      <Box bgcolor={"primary.box"} border={"1px solid #453838"} borderRadius={"16px"} p={"40px 24px"} width={"100%"}
      sx={{
        transition : ".5s" , 
        mt : 20,
        "&:hover" : {borderColor : "primary.main" , 
          boxShadow: "0px 4px 24px 0px rgba(236, 28, 36, 0.40)" , 
          translate : "0 -3px",
          "svg path" : { transition : ".5s" , fill : "#EC1C24", },
          "svg path:nth-child(1) , svg path:nth-child(2)" : {
            stroke : "#F5F5F5",
            fill : "transparent !important"
          },
        }
      }}>
        <Typography fontSize={16} mb={4} fontWeight={500} lineHeight={"150%"} color={"#C9C9C9"} textTransform={"capitalize"} textAlign={"center"}>
          Get a <span style={{color : "#EC1C24"}} > 10% Discount </span> when you order <span style={{color : "#EC1C24"}} > 10 or more videos</span>
        </Typography>
        <Typography fontSize={{ xs: 24, md: 32 }} mb={16} fontWeight={700} lineHeight={"130%"} color={"text.primary"} textTransform={"capitalize"} textAlign={"center"}>
          Full Production Video
        </Typography>
        <Grid container spacing={12} justifyContent={"center"} >
          <Grid item xs={6} sm={3} md={2} lg={1.7}>
            <Atropos>
              <Box height={"100%"} p={"24px 16px"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                <Stack alignItems={"center"} height={64} justifyContent={"center"} ><img src={script} alt="" /></Stack>
                <Typography fontWeight={700} mt={8} lineHeight={"130%"} color={"text.primary"}>Scripts</Typography>
              </Box>
            </Atropos>
          </Grid>
          <Grid item xs={6} sm={3} md={2} lg={1.7}>
            <Atropos>
              <Box height={"100%"} p={"24px 16px"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                <Stack alignItems={"center"} height={64} justifyContent={"center"} ><img src={voiceOver} alt="" /></Stack>
                <Typography fontWeight={700} mt={8} lineHeight={"130%"} color={"text.primary"}>Voiceovers</Typography>
              </Box>
            </Atropos>
          </Grid>
          <Grid item xs={6} sm={3} md={2} lg={1.7}>
            <Atropos>
              <Box height={"100%"} p={"24px 16px"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                <Stack alignItems={"center"} height={64} justifyContent={"center"} ><img src={video} alt="" /></Stack>
                <Typography fontWeight={700} mt={8} lineHeight={"130%"} color={"text.primary"}>Video</Typography>
              </Box>
            </Atropos>
          </Grid>
          <Grid item xs={6} sm={3} md={2} lg={1.7}>
            <Atropos>
              <Box height={"100%"} p={"24px 16px"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                <Stack alignItems={"center"} height={64} justifyContent={"center"} ><img src={thumb} alt="" /></Stack>
                <Typography fontWeight={700} mt={8} lineHeight={"130%"} color={"text.primary"}>Thumbnails</Typography>
              </Box>
            </Atropos>
          </Grid>
          <Grid item xs={6} sm={3} md={2} lg={1.7}>
            <Atropos>
              <Box height={"100%"} p={"24px 16px"} border={"1px solid #453838"} borderRadius={"16px"} textAlign={"center"} sx={{transition : ".5s" , "&:hover" : {borderColor : "primary.main"}}}>
                <Stack alignItems={"center"} height={64} justifyContent={"center"} ><img src={seo} alt="" /></Stack>
                <Typography fontWeight={700} mt={8} lineHeight={"130%"} color={"text.primary"}>SEO</Typography>
              </Box>
            </Atropos>
          </Grid>
        </Grid>
        <Stack alignItems={"center"} mt={20}>
          <Button variant="contained" sx={{padding : "24px 80px" , borderRadius : "16px" , transition : ".5s" , "&:hover": {px : "90px"}}}> Book Now</Button>
        </Stack>
      </Box>
    </Stack>
  )
}

export default Packages

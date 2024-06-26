import { Grid, Stack, Typography } from "@mui/material"
import p1 from "../images/p1.svg"
import p2 from "../images/p2.svg"
import p3 from "../images/p3.svg"
import p4 from "../images/p4.svg"
import p5 from "../images/p5.svg"
import p6 from "../images/p6.svg"
import { useState } from "react"

export const Portfolio = () => {

  const [tap, setTap] = useState(1)
  
  return (
    <Stack bgcolor={"#180203"} px={{xs : 10 , sm : 20 , md : 20 , lg : 50}} py={{xs : 30 , sm : 40}}>
      <Typography fontWeight={700} fontSize={{ xs: 24, md: 32 }} lineHeight={"140%"} color={"primary.white"} textAlign={"center"} mb={8} > Our <span style={{color : "#EC1C24"}} >Portfolio</span> </Typography>
      <Typography color={"text.secondary"} textAlign={"center"} mb={16}>Our video production process is designed to be seamless, collaborative, and results-driven. </Typography>
      <Taps tap={tap} setTap={setTap} />
      {tap === 1 && <Thumbnails />}
      {tap === 2 && <Videos />}
    </Stack>
  )
}

const Taps = ({tap , setTap}) => {
  return (
    <Stack spacing={{xs : 4 , sm : 12}} color={"primary.white"} direction={"row"} alignItems={"center"} justifyContent={"center"} fontWeight={800} mb={20}>
      <Typography className={`por_taps ${tap === 1 && "active"}`} fontWeight={700} fontSize={{xs : 12 , sm : 18}} onClick={() => setTap(1)}>Thumbnails</Typography>
      <span style={{color : "#453838"}}>|</span>
      <Typography className={`por_taps ${tap === 2 && "active"}`} fontWeight={700} fontSize={{xs : 12 , sm : 18}} onClick={() => setTap(2)}>Long From Video</Typography>
      <span style={{color : "#453838"}}>|</span>
      <Typography className={`por_taps ${tap === 3 && "active"}`} fontWeight={700} fontSize={{xs : 12 , sm : 18}} onClick={() => setTap(3)}>Short From Video</Typography>
    </Stack>
  )
}

const Thumbnails = () => {
  return (
    <Stack>
      <Grid container spacing={{xs : 4 , sm : 16}}>
        <Thumbnail img={p1} />
        <Thumbnail img={p2} />
        <Thumbnail img={p3} />
        <Thumbnail img={p1} />
        <Thumbnail img={p2} />
        <Thumbnail img={p3} />
        <Thumbnail img={p1} />
        <Thumbnail img={p2} />
        <Thumbnail img={p3} />
        <Thumbnail img={p1} />
        <Thumbnail img={p2} />
        <Thumbnail img={p3} />
      </Grid>
    </Stack>
  )
}

const Thumbnail = ({img}) => {
  
  return (
    <Grid item xs={6} sm={6} md={4} className="hover" overflow={"hidden"} sx={{"img" : {transition : ".5s" , "&:hover" : {scale : 1.1}}}}>
      <img src={img} alt="Portfolio Image 1" width={"100%"} height={"100%"} className="content" />
      <div className="overlay"></div>
    </Grid>
  )
}

const Videos = () => {
  return (
    <Stack>
      <Grid container spacing={{xs : 4 , sm : 16}}>
        <Video img={p4} />
        <Video img={p5} />
        <Video img={p6} />
        <Video img={p4} />
        <Video img={p5} />
        <Video img={p6} />
        <Video img={p4} />
        <Video img={p5} />
        <Video img={p6} />
        <Video img={p4} />
        <Video img={p5} />
        <Video img={p6} />
      </Grid>
    </Stack>
  )
}

const Video = ({img}) => {
  
  return (
    <Grid item item xs={6} sm={6} md={4} className="hover" overflow={"hidden"} sx={{"img" : {transition : ".5s" , "&:hover" : {scale : 1.1}}}}>
      <img src={img} alt="Portfolio Image 1" width={"100%"} height={"100%"} className="content" />
      <div className="overlay"></div>
    </Grid>
  )
}
import { Button, Stack, Typography } from "@mui/material";
import bg from "../images/waves.svg"

const Main = () => {

  return (

    <Stack px={{xs : 10 , sm : 20 , md : 20 , lg : 50}} py={{xs : 30 , sm : 60}} alignItems={"center"} position={"relative"} overflow={"hidden"} bgcolor={"primary.bg"}>

      <Stack position={"absolute"} left={0} top={0} height={"100%"} width={"100%"}><img src={bg} alt="Waves" style={{objectFit : "cover", height : "100%"}} /></Stack>

      <Typography fontWeight={700} fontSize={{ xs: 32, sm: 48, md: 64 }} lineHeight={"120%"} color={"primary.white"} textAlign={"center"} mb={{ xs: 4, sm: 6 }} maxWidth={900}>
        All your YouTube channels
        needs in <span style={{color : "#EC1C24"}} >one place!</span>
      </Typography>

      <Typography color={"text.secondary"} textAlign={"center"} maxWidth={900} mb={{ xs: 8, sm: 24 }}> We specialize in enhancing your YouTube videos to achieve top notch quality, higher engagement, and increased views, ensuring your channel stands out and grows effectively.</Typography>

      <Stack justifyContent={"center"} spacing={{xs : 8 , sm : 20}} direction={{ xs: "column", sm: "row" }} width={"100%"} alignItems={"center"} >

        <Button variant="contained" sx={{padding : "16px 50px" , borderRadius : "16px" , transition : ".5s" , "&:hover" : {
          px : "60px"
        }}}> Our Services </Button>

        <Button variant="outlined" sx={{padding : "16px 50px" , borderRadius : "16px" , transition : ".5s" , border : "1px solid", borderColor : "primary.white" , "&:hover" : {
          borderColor : "primary.main",
          px : "60px"
        }}}> Contact Us </Button>

      </Stack>

    </Stack>

  )
  
}

export default Main

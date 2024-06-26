import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { Stack } from "@mui/material";
import icon from "../images/logoIconRotated.svg"
import text from "../images/logoText.svg"

const Loading = () => {

  const iconRef = useRef(null)
  const textRef = useRef(null)
  const containerRef = useRef(null)
  const parentRef = useRef(null)
  
  useEffect(() => {
    gsap.to(iconRef.current, { rotation: 0, duration: 1 , width : 170 , delay : .5 });
    gsap.to(textRef.current, { duration: 1 , width : 265 , delay : .5 });
    gsap.to(containerRef.current, { duration : .8 , delay: 1.5 , opacity : 0 , y : 500 , scale : .7 });
    gsap.to(parentRef.current, { duration : .1 , delay: 2.5 , display : "none"});
  } , [])
  
  return (
    <Stack width={"100%"} height={"100vh"} bgcolor={"primary.bg"} justifyContent={"center"} alignItems={"center"} overflow={"hidden"} ref={parentRef} position={"absolute"} left={0} top={0} zIndex={10}>
      <div ref={containerRef}>
        <Stack alignItems={"center"} sx={{scale : {xs : ".8" , sm : "1" }}}>
          <img src={icon} alt="Logo Icon" style={{rotate : "-65deg"}} width={230} ref={iconRef} />
          <img src={text} alt="Logo Text" ref={textRef} width={350} />
        </Stack>
      </div>
    </Stack>
  )
}

export default Loading

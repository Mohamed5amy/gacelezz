import { Grid, Stack, Typography } from "@mui/material"
import p1 from "../images/p1.svg"
import p2 from "../images/p2.svg"
import p3 from "../images/p3.svg"
import p4 from "../images/p4.svg"
import p5 from "../images/p5.svg"
import p6 from "../images/p6.svg"
import { useEffect, useRef, useState } from "react"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Slider from "../components/Slider"

gsap.registerPlugin(ScrollTrigger);

export const Portfolio = () => {

  const [tap, setTap] = useState(1)

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
      y : 20,
      opacity : 0,
      scrollTrigger: {
        trigger: box2.current,
        start: "top 80%", // when the top of the element hits 80% of the viewport height
        end: "top 20%", // when the top of the element hits 80% of the viewport height
        scrub: true, // Makes the animation smooth
        markers: false // Enable markers for debugging
      }
    });

    
  } , [])

  const [active, setActive] = useState(false)
  const [start, setStart] = useState(false)

  const images = [p1,p2,p3,p4,p5,p6]
  const images2 = [p6,p5,p4,p3,p2,p1]
  const images3 = [p1,p5,p2,p3,p4,p6]

  console.log(start)
  
  return (
    <Stack bgcolor={"#180203"} px={{xs : 10 , sm : 20 , md : 20 , lg : 50}} py={{xs : 30 , sm : 40}} id="portfolio">
      <Typography ref={box1} fontWeight={700} fontSize={{ xs: 24, md: 32 }} lineHeight={"140%"} color={"primary.white"} textAlign={"center"} mb={8} > Our <span style={{color : "#EC1C24"}} >Portfolio</span> </Typography>
      <Typography ref={box2} color={"text.secondary"} textAlign={"center"} mb={16}>Our video production process is designed to be seamless, collaborative, and results-driven. </Typography>
      <Taps tap={tap} setTap={setTap} />
      {tap === 1 && <Thumbnails setActive={setActive} data={images} setStart={setStart} tap={tap} />}
      {tap === 2 && <Thumbnails setActive={setActive} data={images2} setStart={setStart} tap={tap} />}
      {tap === 3 && <Thumbnails setActive={setActive} data={images3} setStart={setStart} tap={tap} />}

    {(active && tap === 1) && <Slider active={active} setActive={setActive} data={images} start={start} />}
    {(active && tap === 2) && <Slider active={active} setActive={setActive} data={images2} start={start} />}
    {(active && tap === 3) && <Slider active={active} setActive={setActive} data={images3} start={start} />}
      
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

const Thumbnails = ({data , setActive , setStart , tap}) => {

  const box1 = useRef(null)

  useEffect(() => {

    tap === 1 && gsap.from(box1.current, {
      duration: 1,
      y : 200,
      x : -900,
      opacity : 0,
      rotate : "30deg"
    });

    tap === 2 && gsap.from(box1.current, {
      duration: 1,
      y : 200,
      opacity : 0,
    });

    tap === 3 && gsap.from(box1.current, {
      duration: 1,
      y : 200,
      x : 900,
      opacity : 0,
      rotate : "-30deg"
    });
    
  } , [])
  
  return (
    <Stack ref={box1} >
      <Grid container spacing={{xs : 4 , sm : 16}}>
        {data.map((item , i) => {
          return (
            <Thumbnail img={item} key={i} setActive={setActive} i={i} setStart={setStart} />
          )
        })}
      </Grid>
    </Stack>
  )
}

const getHoverDirection = (event) => {
  const directions = ['top', 'right', 'bottom', 'left'];
  const item = event.currentTarget;

  const w = item.offsetWidth;
  const h = item.offsetHeight;

  const x = (event.clientX - item.getBoundingClientRect().left - w / 2) * (w > h ? h / w : 1);
  const y = (event.clientY - item.getBoundingClientRect().top - h / 2) * (h > w ? w / h : 1);

  const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

  return directions[d];
};

const Thumbnail = ({img , setActive , i , setStart}) => {
  

  useEffect(() => {
    const items = document.getElementsByClassName('hover');

    const handleEvent = (event) => {
      const dir = getHoverDirection(event);

      event.currentTarget.classList.remove('mouseenter', 'mouseleave', 'top', 'right', 'bottom', 'left');
      event.currentTarget.classList.add(event.type, dir);
    };

    for (let i = 0; i < items.length; i++) {
      ['mouseenter', 'mouseleave'].forEach((eventname) => {
        items[i].addEventListener(eventname, handleEvent, false);
      });
    }

    return () => {
      for (let i = 0; i < items.length; i++) {
        ['mouseenter', 'mouseleave'].forEach((eventname) => {
          items[i].removeEventListener(eventname, handleEvent, false);
        });
      }
    };
  }, []);
  
  
  return (
    <Grid item xs={6} sm={6} md={4} overflow={"hidden"} onClick={() => {setActive(true) ; setStart(i)}}>
      <Stack className="hover">
        <img src={img} alt="Portfolio Image 1" width={"100%"} height={"100%"} className="content" />
        <div className="overlay"></div>
      </Stack>
    </Grid>
  )
}

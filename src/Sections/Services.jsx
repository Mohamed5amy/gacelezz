import { Button, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Services = () => {

  const box1 = useRef(null)
  const box2 = useRef(null)
  const box3 = useRef(null)
  const box4 = useRef(null)
  
  useEffect(() => {

    gsap.from(box1.current, {
      duration: 1,
      rotate : "-5deg",
      y : 50,
      scrollTrigger: {
        trigger: box1.current,
        start: "top 80%", // when the top of the element hits 80% of the viewport height
        end: "top 0%", // when the top of the element hits 80% of the viewport height
        scrub: true, // Makes the animation smooth
        markers: false // Enable markers for debugging
      }
    });

    gsap.from(box2.current, {
      duration: 1,
      y : 50,
      scrollTrigger: {
        trigger: box2.current,
        start: "top 80%", // when the top of the element hits 80% of the viewport height
        end: "top 0%", // when the top of the element hits 80% of the viewport height
        scrub: true, // Makes the animation smooth
        markers: false // Enable markers for debugging
      }
    });

    gsap.from(box3.current, {
      duration: 1,
      rotate : "5deg",
      y : 50,
      scrollTrigger: {
        trigger: box3.current,
        start: "top 80%", // when the top of the element hits 80% of the viewport height
        end: "top 0%", // when the top of the element hits 80% of the viewport height
        scrub: true, // Makes the animation smooth
        markers: false // Enable markers for debugging
      }
    });

    gsap.from(box4.current, {
      duration: 1,
      y : 50,
      opacity : 0,
      scrollTrigger: {
        trigger: box4.current,
        start: "top 80%", // when the top of the element hits 80% of the viewport height
        end: "top 50%", // when the top of the element hits 80% of the viewport height
        scrub: true, // Makes the animation smooth
        markers: false // Enable markers for debugging
      }
    });
    
  } , [])
  
  return (
    <Stack px={{xs : 10 , sm : 20 , md : 20 , lg : 50}} py={{xs : 20 , sm : 40}} bgcolor={"primary.bg2"} id="services">

      <Typography ref={box4} fontWeight={700} fontSize={{ xs: 24, md: 32 }} lineHeight={"140%"} color={"primary.white"} textAlign={"center"} mb={24} > Increase your engagement by <span style={{color : "#EC1C24"}} >50%</span> or <span style={{color : "#EC1C24"}} >get your money back.</span> </Typography>

      <Grid container spacing={16}>
        <Grid item xs={12} md={6} lg={4} ref={box1}>
          <Stack alignItems={"center"} height={"100%"} bgcolor={"primary.box"} p={"40px 16px"} borderRadius={"16px"} border={"1px solid #453838"} 
          sx={{
            transition : ".5s" , 
            "&:hover" : {borderColor : "primary.main" , 
              boxShadow: "0px 4px 24px 0px rgba(236, 28, 36, 0.40)" , 
              translate : "0 -3px",
              "svg path" : { transition : ".5s" , fill : "#EC1C24", },
              "svg path:nth-of-type(1) , svg path:nth-of-type(2)" : {
                stroke : "#F5F5F5",
                fill : "transparent !important"
              },
            }
          }}>
            <Stack>
              <svg width="84" height="64" viewBox="0 0 84 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35.8593 30.9554H5.00468C3.32038 30.9554 1.94837 29.5834 1.94837 27.8991V4.2942C1.94837 2.61088 3.32023 1.23871 5.00468 1.23871H35.8593C37.5418 1.23871 38.914 2.61057 38.914 4.2942V27.8991C38.914 29.5838 37.5423 30.9554 35.8593 30.9554Z" stroke="#EC1C24" strokeWidth="2.47742"/>
              <path d="M14.3429 23.0337L14.3425 23.0334C14.0915 22.885 13.9374 22.6152 13.9374 22.3225V9.87019C13.9374 9.57865 14.0913 9.30867 14.3425 9.16012C14.5947 9.01098 14.906 9.00671 15.1599 9.14631L15.1604 9.14658L26.4979 15.3732L26.4983 15.3734C26.7627 15.5185 26.9266 15.7952 26.9266 16.0968C26.9266 16.3979 26.7623 16.6755 26.4987 16.8204C26.4987 16.8204 26.4986 16.8204 26.4985 16.8205L15.1623 23.0464C15.1621 23.0465 15.1619 23.0466 15.1617 23.0467C15.0357 23.1156 14.899 23.1492 14.7632 23.1492C14.6183 23.1492 14.4733 23.1108 14.3429 23.0337Z" stroke="#EC1C24" strokeWidth="2.47742"/>
              <path d="M2.77424 41.6778H36.5324C37.6729 41.6778 38.5969 41.1234 38.5969 40.4391C38.5969 39.7549 37.6729 39.2004 36.5324 39.2004H2.77424C1.6338 39.2004 0.709717 39.7549 0.709717 40.4391C0.709717 41.1234 1.6338 41.6778 2.77424 41.6778Z" fill="#F5F5F5"/>
              <path d="M56.9992 46.6325H2.77424C1.6338 46.6325 0.709717 47.187 0.709717 47.8712C0.709717 48.5555 1.6338 49.1099 2.77424 49.1099H56.9992C58.1397 49.1099 59.0638 48.5555 59.0638 47.8712C59.0638 47.187 58.1397 46.6325 56.9992 46.6325Z" fill="#F5F5F5"/>
              <path d="M2.77424 56.5422H20.4317C21.5721 56.5422 22.4962 55.9878 22.4962 55.3035C22.4962 54.6192 21.5721 54.0648 20.4317 54.0648H2.77424C1.6338 54.0648 0.709717 54.6192 0.709717 55.3035C0.709717 55.9878 1.6338 56.5422 2.77424 56.5422Z" fill="#F5F5F5"/>
              <path d="M48.4373 61.4971H2.77424C1.6338 61.4971 0.709717 62.0515 0.709717 62.7358C0.709717 63.42 1.6338 63.9745 2.77424 63.9745H48.4373C49.5777 63.9745 50.5018 63.42 50.5018 62.7358C50.5018 62.0515 49.5777 61.4971 48.4373 61.4971Z" fill="#F5F5F5"/>
              <path d="M83.2682 8.98274C83.1881 8.44101 82.8966 7.95296 82.4573 7.62676L72.7309 0.406727C71.8143 -0.272913 70.5227 -0.0804998 69.8431 0.833669L48.927 29.0044C48.6281 29.4074 48.486 29.9046 48.5273 30.405L49.2821 39.5492C49.3308 40.1405 49.6323 40.683 50.1088 41.0365C50.468 41.3032 50.8999 41.4436 51.3392 41.4436C51.4837 41.4436 51.6291 41.4279 51.7711 41.3973L60.7427 39.4749C61.234 39.37 61.6692 39.0892 61.9674 38.687L82.8834 10.5154C83.2096 10.0753 83.3483 9.52447 83.2682 8.98274ZM53.2031 36.8686L52.7051 30.841L53.5004 29.77L59.9119 34.5299L59.1167 35.601L53.2031 36.8686ZM62.3737 31.2143L55.9629 26.4544L71.9266 4.9528L73.475 6.10232L60.1398 24.0636C59.4602 24.9786 59.651 26.2718 60.5668 26.9523C60.9368 27.2273 61.3686 27.3594 61.7956 27.3594C62.4273 27.3594 63.05 27.0712 63.4546 26.5254L76.7898 8.56406L78.3373 9.71275L62.3737 31.2143Z" fill="#F5F5F5"/>
              </svg>
            </Stack>
            <Typography fontWeight={700} fontSize={20} lineHeight={"120%"} mt={20} mb={8} color={"text.primary"}>Script & VO</Typography>
            <Typography color={"text.secondary"} textAlign={"center"}>
              Researched engaging scripts based on the titles provided along with 100% real male & female voiceover artists.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} lg={4} ref={box2}>
          <Stack alignItems={"center"} height={"100%"} bgcolor={"primary.box"} p={"40px 16px"} borderRadius={"16px"} border={"1px solid #453838"} 
          sx={{
            transition : ".5s" , 
            "&:hover" : {borderColor : "primary.main" , 
              boxShadow: "0px 4px 24px 0px rgba(236, 28, 36, 0.40)" , 
              translate : "0 -3px",
              "svg path" : { transition : ".5s" , fill : "#EC1C24", },
              "svg rect" : { transition : ".5s" , stroke : "#EC1C24", },
              "svg path:nth-of-type(1) , svg path:nth-of-type(2)" : {
                fill : "#F5F5F5",
                stroke : "transparent !important"
              },
            }
          }}>
            <Stack>
              <svg width="80" height="64" viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M67.5425 0H12.4577C5.89634 0 0.558594 4.35408 0.558594 9.70535V39.0052C0.558594 44.3565 5.89634 48.7098 12.4577 48.7098H30.3717C31.6526 48.7098 32.6922 47.8635 32.6922 46.8173C32.6922 45.7711 31.6535 44.9248 30.3717 44.9248H12.4577C8.45535 44.9248 5.19861 42.2694 5.19861 39.0044V9.70535C5.19861 6.44036 8.45535 3.78503 12.4577 3.78503H67.5415C71.5439 3.78503 74.8007 6.44036 74.8007 9.70535V26.086C74.8007 27.1322 75.8393 27.9785 77.1211 27.9785C78.403 27.9785 79.4416 27.1314 79.4416 26.086V9.70535C79.4416 4.35408 74.1039 0 67.5425 0Z" fill="#EC1C24"/>
                <path d="M47.7479 23.4717C47.7479 22.2919 47.0432 21.006 45.9108 20.1647L36.1222 13.3579C34.0544 11.8217 29.2949 13.1034 29.2949 16.1553V29.8319C29.2949 31.9871 31.6377 33.3202 33.8081 33.3202C34.7147 33.3202 35.5146 33.0808 36.0401 32.6868L46.5841 25.7904C47.3347 25.2329 47.7479 24.4094 47.7479 23.4717ZM34.1379 29.8962C34.1112 29.9079 34.0018 29.9407 33.8088 29.9407C33.3237 29.9407 32.8714 29.754 32.6764 29.6172V16.3714C32.8714 16.2326 33.3237 16.0479 33.8095 16.0479C34.0018 16.0479 34.1126 16.0794 34.1489 16.1006L43.9368 22.9095C44.0818 23.0169 44.194 23.1523 44.2686 23.2693L34.1379 29.8962Z" fill="#EC1C24"/>
                <path d="M45.8028 39.9593C45.4273 40.3156 45.2096 40.8323 45.2096 41.3475C45.2096 41.8626 45.4265 42.3777 45.8028 42.7549C46.159 43.132 46.6738 43.3302 47.1877 43.3302C47.7217 43.3302 48.2164 43.1328 48.5919 42.7549C48.9673 42.3777 49.1658 41.8626 49.1658 41.3475C49.1658 40.8323 48.9681 40.3156 48.5919 39.9593C47.8602 39.2059 46.5161 39.2059 45.8028 39.9593Z" fill="#F5F5F5"/>
                <rect x="38.5431" y="32.9309" width="39.2126" height="29.6604" rx="4.22588" stroke="#F5F5F5" strokeWidth="2.81725"/>
                <path d="M38.6537 59.563C38.8713 60.0279 39.2442 60.2935 39.6172 60.2935C39.8348 60.2935 40.0679 60.2049 40.2699 60.0279L47.9314 52.701C48.724 51.9263 49.9051 52.0149 50.6199 52.8781L51.1328 53.5201C52.7956 55.5344 55.3909 55.5344 57.0382 53.5201L63.5031 45.6177C64.2801 44.6659 65.601 44.6659 66.3781 45.6177L72.8763 52.2469L77.909 57.2046L78.702 54.1157L74.3992 49.7234L67.9011 43.0943C66.2382 41.08 63.6429 41.08 61.9956 43.0943L55.5308 50.9966C54.7693 51.9484 53.4483 51.9484 52.6713 50.9966L52.1585 50.3547C50.6355 48.5175 48.3199 48.3182 46.6415 49.9341L38.98 57.2609C38.4361 57.7701 38.2963 58.8104 38.6537 59.563Z" fill="#F5F5F5"/>
              </svg>
            </Stack>
            <Typography fontWeight={700} fontSize={20} lineHeight={"120%"} mt={20} mb={8} color={"text.primary"}>Thumbnail</Typography>
            <Typography color={"text.secondary"} textAlign={"center"}>
              Personalised thumbnails to increase the click-view rate of the videos and attract more viewers. 
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} lg={4} ref={box3}>
          <Stack alignItems={"center"} height={"100%"} bgcolor={"primary.box"} p={"40px 16px"} borderRadius={"16px"} border={"1px solid #453838"} 
          sx={{
            transition : ".5s" , 
            "&:hover" : {borderColor : "primary.main" , 
              boxShadow: "0px 4px 24px 0px rgba(236, 28, 36, 0.40)" , 
              translate : "0 -3px",
              "svg path" : { transition : ".5s" , fill : "#EC1C24", },
              "svg rect" : { transition : ".5s" , stroke : "#EC1C24", },
              "svg path:nth-of-type(1) , svg path:nth-of-type(2) , svg path:nth-of-type(6) , svg path:nth-of-type(7)" : {
                fill : "#F5F5F5",
                stroke : "transparent !important"
              },
            }
          }}>
            <Stack>
            <svg width="58" height="64" viewBox="0 0 58 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_278_169)">
              <path d="M45 52.2667V35.2C45 34.3513 44.6629 33.5374 44.0627 32.9373C43.4626 32.3371 42.6487 32 41.8 32H16.2C15.3513 32 14.5374 32.3371 13.9373 32.9373C13.3371 33.5374 13 34.3513 13 35.2V52.2667C13 53.1154 13.3371 53.9293 13.9373 54.5294C14.5374 55.1295 15.3513 55.4667 16.2 55.4667H41.8C42.6487 55.4667 43.4626 55.1295 44.0627 54.5294C44.6629 53.9293 45 53.1154 45 52.2667ZM15.1333 52.2667V35.2C15.1333 34.9171 15.2457 34.6458 15.4458 34.4458C15.6458 34.2457 15.9171 34.1333 16.2 34.1333H41.8C42.0829 34.1333 42.3542 34.2457 42.5542 34.4458C42.7543 34.6458 42.8667 34.9171 42.8667 35.2V52.2667C42.8667 52.5496 42.7543 52.8209 42.5542 53.0209C42.3542 53.221 42.0829 53.3333 41.8 53.3333H16.2C15.9171 53.3333 15.6458 53.221 15.4458 53.0209C15.2457 52.8209 15.1333 52.5496 15.1333 52.2667Z" fill="#EC1C24"/>
              <path d="M35.9173 42.801L26.3173 37.4677C26.155 37.3777 25.972 37.3316 25.7864 37.3339C25.6007 37.3363 25.4189 37.3871 25.259 37.4813C25.099 37.5754 24.9663 37.7097 24.8742 37.8708C24.782 38.0319 24.7334 38.2143 24.7333 38.4V49.0666C24.7334 49.2523 24.782 49.4347 24.8742 49.5958C24.9663 49.7569 25.099 49.8912 25.259 49.9854C25.4189 50.0795 25.6007 50.1303 25.7864 50.1327C25.972 50.1351 26.155 50.0889 26.3173 49.9989L35.9173 44.6656C36.0835 44.5732 36.222 44.438 36.3184 44.2741C36.4148 44.1102 36.4657 43.9235 36.4657 43.7333C36.4657 43.5431 36.4148 43.3564 36.3184 43.1925C36.222 43.0286 36.0835 42.8935 35.9173 42.801ZM26.8667 47.2533V40.2133L33.2027 43.7333L26.8667 47.2533Z" fill="#EC1C24"/>
              <path d="M57.8 48V5.33333C57.7983 3.91937 57.2359 2.56379 56.236 1.56397C55.2362 0.564141 53.8806 0.00169371 52.4667 0H5.53335C4.11938 0.00169371 2.76381 0.564141 1.76398 1.56397C0.764153 2.56379 0.201706 3.91937 0.200012 5.33333V48C0.201706 49.414 0.764153 50.7695 1.76398 51.7694C2.76381 52.7692 4.11938 53.3316 5.53335 53.3333H10.8667C11.1496 53.3333 11.4209 53.221 11.6209 53.0209C11.821 52.8209 11.9333 52.5496 11.9333 52.2667C11.9333 51.9838 11.821 51.7125 11.6209 51.5124C11.4209 51.3124 11.1496 51.2 10.8667 51.2H5.53335C4.68465 51.2 3.87072 50.8629 3.2706 50.2627C2.67049 49.6626 2.33335 48.8487 2.33335 48V23.4667H55.6667V48C55.6667 48.8487 55.3295 49.6626 54.7294 50.2627C54.1293 50.8629 53.3154 51.2 52.4667 51.2H47.1333C46.8504 51.2 46.5791 51.3124 46.3791 51.5124C46.1791 51.7125 46.0667 51.9838 46.0667 52.2667C46.0667 52.5496 46.1791 52.8209 46.3791 53.0209C46.5791 53.221 46.8504 53.3333 47.1333 53.3333H52.4667C53.8806 53.3316 55.2362 52.7692 56.236 51.7694C57.2359 50.7695 57.7983 49.414 57.8 48ZM2.33335 21.3333V5.33333C2.33335 4.48464 2.67049 3.67071 3.2706 3.07059C3.87072 2.47047 4.68465 2.13333 5.53335 2.13333H52.4667C53.3154 2.13333 54.1293 2.47047 54.7294 3.07059C55.3295 3.67071 55.6667 4.48464 55.6667 5.33333V21.3333H2.33335Z" fill="#F5F5F5"/>
              <path d="M50.3333 4.26666H7.66667C6.81798 4.26666 6.00405 4.6038 5.40393 5.20392C4.80382 5.80404 4.46667 6.61797 4.46667 7.46666V16C4.46667 16.8487 4.80382 17.6626 5.40393 18.2627C6.00405 18.8629 6.81798 19.2 7.66667 19.2H50.3333C51.182 19.2 51.996 18.8629 52.5961 18.2627C53.1962 17.6626 53.5333 16.8487 53.5333 16V7.46666C53.5333 6.61797 53.1962 5.80404 52.5961 5.20392C51.996 4.6038 51.182 4.26666 50.3333 4.26666ZM7.66667 17.0667C7.38378 17.0667 7.11247 16.9543 6.91243 16.7542C6.71239 16.5542 6.60001 16.2829 6.60001 16V7.46666C6.60001 7.18377 6.71239 6.91245 6.91243 6.71242C7.11247 6.51238 7.38378 6.4 7.66667 6.4H19.4V17.0667H7.66667ZM51.4 16C51.4 16.2829 51.2876 16.5542 51.0876 16.7542C50.8875 16.9543 50.6162 17.0667 50.3333 17.0667H21.5333V6.4H50.3333C50.6162 6.4 50.8875 6.51238 51.0876 6.71242C51.2876 6.91245 51.4 7.18377 51.4 7.46666V16Z" fill="#F5F5F5"/>
              <path d="M15.5952 13.3536C15.9873 12.7034 16.1963 11.9593 16.2 11.2C16.2 10.3561 15.9498 9.53121 15.481 8.82956C15.0121 8.12791 14.3458 7.58104 13.5661 7.2581C12.7865 6.93517 11.9286 6.85067 11.101 7.0153C10.2733 7.17993 9.51307 7.58629 8.91637 8.183C8.31966 8.7797 7.9133 9.53995 7.74867 10.3676C7.58404 11.1953 7.66854 12.0531 7.99147 12.8328C8.3144 13.6124 8.86127 14.2788 9.56292 14.7476C10.2646 15.2164 11.0895 15.4667 11.9334 15.4667C12.6926 15.4629 13.4368 15.254 14.087 14.8619L15.4459 16.2208C15.6471 16.4151 15.9165 16.5226 16.1962 16.5202C16.4759 16.5177 16.7434 16.4056 16.9412 16.2078C17.1389 16.01 17.2511 15.7425 17.2535 15.4628C17.256 15.1831 17.1485 14.9137 16.9542 14.7125L15.5952 13.3536ZM9.80002 11.2C9.79977 10.8491 9.88606 10.5037 10.0512 10.1941C10.2164 9.8846 10.4554 9.62058 10.7469 9.42546C11.0385 9.23035 11.3737 9.11016 11.7229 9.07554C12.072 9.04093 12.4243 9.09295 12.7485 9.22701C13.0727 9.36106 13.3589 9.57301 13.5816 9.84408C13.8043 10.1151 13.9568 10.437 14.0255 10.781C14.0941 11.1251 14.0768 11.4808 13.9752 11.8166C13.8735 12.1524 13.6906 12.4579 13.4427 12.7061C13.1445 13.0046 12.7645 13.208 12.3508 13.2906C11.937 13.3731 11.5081 13.3311 11.1182 13.1699C10.7283 13.0087 10.395 12.7355 10.1604 12.3849C9.92572 12.0342 9.80032 11.6219 9.80002 11.2Z" fill="#F5F5F5"/>
              <path d="M36.4667 61.8667H51.4C51.6829 61.8667 51.9542 61.7543 52.1543 61.5543C52.3543 61.3542 52.4667 61.0829 52.4667 60.8C52.4667 60.5171 52.3543 60.2458 52.1543 60.0458C51.9542 59.8457 51.6829 59.7333 51.4 59.7333H36.4667C36.1838 59.7333 35.9125 59.8457 35.7124 60.0458C35.5124 60.2458 35.4 60.5171 35.4 60.8C35.4 61.0829 35.5124 61.3542 35.7124 61.5543C35.9125 61.7543 36.1838 61.8667 36.4667 61.8667Z" fill="#EC1C24"/>
              <path d="M28.1296 59.7333H6.60002C6.31712 59.7333 6.04581 59.8457 5.84578 60.0458C5.64574 60.2458 5.53336 60.5171 5.53336 60.8C5.53336 61.0829 5.64574 61.3542 5.84578 61.5543C6.04581 61.7543 6.31712 61.8667 6.60002 61.8667H28.1296C28.3812 62.5784 28.8764 63.1782 29.5275 63.5602C30.1786 63.9421 30.9437 64.0816 31.6877 63.9539C32.4317 63.8263 33.1066 63.4397 33.5932 62.8626C34.0798 62.2854 34.3466 61.5549 34.3466 60.8C34.3466 60.0451 34.0798 59.3146 33.5932 58.7374C33.1066 58.1603 32.4317 57.7737 31.6877 57.6461C30.9437 57.5184 30.1786 57.6579 29.5275 58.0399C28.8764 58.4218 28.3812 59.0217 28.1296 59.7333ZM32.2 60.8C32.2 61.011 32.1375 61.2172 32.0203 61.3926C31.903 61.568 31.7365 61.7047 31.5415 61.7855C31.3466 61.8662 31.1322 61.8873 30.9253 61.8462C30.7183 61.805 30.5283 61.7034 30.3791 61.5543C30.2299 61.4051 30.1283 61.215 30.0872 61.0081C30.046 60.8012 30.0672 60.5867 30.1479 60.3918C30.2286 60.1969 30.3653 60.0303 30.5407 59.9131C30.7162 59.7959 30.9224 59.7333 31.1334 59.7333C31.4163 59.7333 31.6876 59.8457 31.8876 60.0458C32.0876 60.2458 32.2 60.5171 32.2 60.8Z" fill="#EC1C24"/>
              </g>
              <defs>
              <clipPath id="clip0_278_169">
              <rect width="57.6" height="64" fill="white" transform="translate(0.200012)"/>
              </clipPath>
              </defs>
            </svg>

            </Stack>
            <Typography fontWeight={700} fontSize={20} lineHeight={"120%"} mt={20} mb={8} color={"text.primary"}>VIDEO & SEO</Typography>
            <Typography color={"text.secondary"} textAlign={"center"}>
            High-quality edited videos, each with a file containing relevant hashtags, description, and keywords for optimal video performance.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      
      <Stack alignItems={"center"} mt={24}>
        <a href="#faqs"><Button variant="contained" sx={{padding : "16px 50px" , borderRadius : "16px" , transition : ".5s" , "&:hover": {px : "60px"}}}> Let&apos;s Start </Button>
        </a>
      </Stack>
      
    </Stack>
  )
}

export default Services

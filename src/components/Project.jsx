
import { easeIn, motion } from 'framer-motion'
import React, { useState } from 'react'
import Cards from './Cards.jsx';


function Project() {
  
  const [hoverindex, setHover] = useState(-1);
  const [hoverindex1, setHover1] = useState(-1);
  const [translate, setTranslate] = useState(-1);

  return (
    <div onMouseOver={()=>setTranslate(1)} className=' w-[100vw]  bg-[#27272A] px-14 py-7'>
      <motion.h1  initial={{x:"100%"}} animate={{x:translate==1 ?"0%":"100%"}} transition={{ease:[0.25, 1, 0.5, 1],duration:"1"}} className='text-[500%] uppercase font-["Neue_Montreal"] tracking-tighter border-b-2 border-gray-600'>project</motion.h1>


      {/*  project cards -1*/}


      <div className=' relative flex flex-wrap h-[100vh] w-full  gap-[6%] items-center  justify-center mb-10'>

        {["tic-tac game", "Snake-Game"].map((item, index) => (
          <div className='absolute flex overflow-hidden  ' key={index}>
            {item.split("").map((character, charIndex) => (
              <motion.span initial={{ y: "100%" }} animate={{ y: hoverindex == index ? "0%" : "100%" }} transition={{ easeIn, duration: charIndex * 0.04 }} key={charIndex} className=" z-2  text-white text-7xl  ">{character}</motion.span>
            ))}
          </div>
        ))}

        <motion.div onMouseEnter={() => setHover(0)} onMouseLeave={() => setHover(-1)} initial={{ scale: "1" }} animate={{ scale: hoverindex == 0 ? "1.04" : "1" }} transition={{ ease: "linear", duration: 0.04 }} className=' z-1 h-[65%]  w-[45%] bg-gray-500 rounded-xl'>
          <img src="../images/tictac.jpg " className='h-full w-full rounded-xl' alt="tictac game" />
        </motion.div>

        <motion.div onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(-1)} initial={{ scale: "1" }} animate={{ scale: hoverindex == 1 ? "1.04" : "1" }} transition={{ ease: [0.25, 1, 0.5, 1], duration: 0.04 }} className='h-[65%] w-[45%] bg-gray-500 rounded-xl rounded-full'>
         <a href="https://github.com/SowreeshUndru/snake-game"> <img src="../images/snake.jpg" alt="snake project photo" className='h-full w-full rounded-xl' /></a>
        </motion.div>

      </div>


      {/*  project cards -2*/}


      <div className=' relative flex flex-wrap h-[100vh] w-full  gap-[6%] items-center  justify-center -mt-25 mb-10'>

        {["", "", "E-commerce", "my portfolio"].map((item, index) => (
          <div className='absolute flex overflow-hidden  ' key={index}>
            {item.split("").map((character, charIndex) => (
              <motion.span initial={{ y: "100%" }} animate={{ y: hoverindex1 == index ? "0%" : "100%" }} transition={{ easeIn, duration: charIndex * 0.04 }} key={charIndex} className=" z-2  text-[#989E86] text-7xl ">{character}</motion.span>
            ))}
          </div>
        ))}

        <motion.div onMouseEnter={() => setHover1(2)} onMouseLeave={() => setHover1(-1)} initial={{ scale: "1" }} animate={{ scale: hoverindex1 == 2 ? "1.04" : "1" }} transition={{ ease: "linear", duration: 0.04 }} className=' z-1 h-[65%]  w-[45%] bg-gray-500 rounded-xl'>
          <a href="https://github.com/SowreeshUndru/e-com"><img src="../images/ecom.jpg " className='h-full w-full rounded-xl' alt="tictac game" /></a>
        </motion.div>

        <motion.div onMouseEnter={() => setHover1(3)} onMouseLeave={() => setHover1(-1)} initial={{ scale: "1" }} animate={{ scale: hoverindex1 == 3 ? "1.04" : "1" }} transition={{ ease: [0.25, 1, 0.5, 1], duration: 0.04 }} className='h-[65%] w-[45%] bg-[url("./images/bg.jpg")] bg-cover bg-center rounded-xl rounded-full'>
          <div><a href="https://github.com/SowreeshUndru/main"><img src="./images/portfolio.png" alt="my-portfolio" className=''  /></a></div>

        </motion.div>

      </div>


      {/*  project cards -3*/}


    </div>
  )
}

export default Project






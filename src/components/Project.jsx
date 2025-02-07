
import { easeIn, motion } from 'framer-motion'
import React, { useState } from 'react'

function Project() {
  const [hoverindex, setHover] = useState(-1);

  return (
    <div className=' w-[100vw] min-h-screen bg-[#27272A] px-14 py-7'>
      <h1 className='text-[500%] uppercase font-["Neue_Montreal"] tracking-tighter border-b-2 border-gray-600'>project</h1>

      <div className=' relative flex flex-wrap h-[100vh] w-full  gap-[6%] items-center  justify-center'>

        {["E-commerce", "Snake-Game"].map((item, index) => (
          <div className='absolute flex overflow-hidden  ' key={index}>
            {item.split("").map((character, charIndex) => (
              <motion.span initial={{ y: "100%" }} animate={{ y: hoverindex == index ? "0%" : "100%" }} transition={{ easeIn, duration: charIndex * 0.04 }} key={charIndex} className=" z-2  text-[#FDF79F] text-3xl ">{character}</motion.span>
            ))}
          </div>
        ))}

        <motion.div onMouseEnter={() => setHover(0)} onMouseLeave={() => setHover(-1)} initial={{ scale: "1" }} animate={{scale:hoverindex==0 ?"1.04":"1"}}  transition={{ease:[0.25, 1, 0.5, 1],duration:0.04}} className=' z-1 h-[65%]  w-[45%] bg-gray-500 rounded-xl'></motion.div>

        <motion.div onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(-1)} initial={{ scale:"1" }}  animate={{scale:hoverindex==1 ?"1.04":"1"}} transition={{ease:[0.25, 1, 0.5, 1],duration:0.04}} className='h-[65%] w-[45%] bg-gray-500 rounded-xl'></motion.div>
        
        
       


      </div>
    </div>
  )
}

export default Project
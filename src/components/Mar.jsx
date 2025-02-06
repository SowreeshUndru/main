import React from 'react'
import { motion } from 'framer-motion';
function Mar() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.1" className='  bg-[#004D43] w-full h-[50vh] flex gap-10 overflow-hidden whitespace-nowrap rounded-tl-2xl  rounded-tr-2xl'>
        <motion.h1 
        initial={{ x: '-100%' }} 
        animate={{ x: '100%' }}    
        transition={{
          x: {
            repeat: Infinity,       
            repeatType: 'loop',      
            duration: 15,             
            ease: 'linear',          
          },
        }}
      className='uppercase text-[13vw] font-bold -mb-20  '>my portfolio </motion.h1>
       
       <motion.h1 
        initial={{ x: '-100%' }} 
        animate={{ x: '100%' }}    
        transition={{
          x: {
            repeat: Infinity,       
            repeatType: 'loop',      
            duration: 15,             
            ease: 'linear',          
          },
        }}
      className='uppercase text-[13vw] font-bold -mb-20  '>my portfolio </motion.h1>
       
       
        <motion.h1 
        initial={{ x: '-100%' }} 
        animate={{ x: '100%' }}    
        transition={{
          x: {
            repeat: Infinity,       
            repeatType: 'loop',      
            duration: 15,             
            ease: 'linear',          
          },
        }}
      className='  uppercase text-[13vw] font-bold -mb-20 '> my portfolio</motion.h1>
    </div>
  )
}

export default Mar



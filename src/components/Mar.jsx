import React from 'react'
import { motion } from 'framer-motion';

function Mar() {
  return (
    <div 
      data-scroll 
      data-scroll-section 
      data-scroll-speed="-0.1"
      className="bg-[#004D43] w-full min-h-[30vh] sm:min-h-[40vh] md:min-h-[50vh] flex items-center gap-6 sm:gap-10 overflow-hidden whitespace-nowrap rounded-tl-2xl rounded-tr-2xl px-4"
    >
      {[...Array(3)].map((_, i) => (
        <motion.h1
          key={i}
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
          className="uppercase font-bold text-[10vw] sm:text-[9vw] md:text-[8vw] leading-none"
        >
          my portfolio
        </motion.h1>
      ))}
    </div>
  );
}

export default Mar;

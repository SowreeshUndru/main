import { easeIn, motion } from 'framer-motion'
import React, { useState } from 'react'

function Project() {
  const [hoverindex, setHover] = useState(-1);
  const [hoverindex1, setHover1] = useState(-1);
  const [translate, setTranslate] = useState(-1);

  return (
    <div onMouseOver={() => setTranslate(1)} className='w-full bg-[#27272A] px-4 sm:px-14 py-7'>
      <motion.h1
        initial={{ x: "200%" }}
        animate={{ x: translate === 1 ? "0%" : "200%" }}
        transition={{ ease: [0.25, 1, 0.5, 1], duration: 1 }}
        className='text-4xl sm:text-[5rem] uppercase font-["Neue_Montreal"] tracking-tighter border-b-2 border-gray-600 mb-10'
      >
        project
      </motion.h1>

      {/* project cards -1 */}
      <div className='relative flex flex-wrap gap-4 sm:gap-[6%] justify-center items-center mb-10' style={{ minHeight: '60vh' }}>
        {["tic-tac game", "Snake-Game"].map((item, index) => (
          <div key={index} className='absolute flex overflow-hidden'>
            {item.split("").map((character, charIndex) => (
              <motion.span
                key={charIndex}
                initial={{ y: "100%" }}
                animate={{ y: hoverindex === index ? "0%" : "100%" }}
                transition={{ ease: easeIn, duration: charIndex * 0.04 }}
                className="z-20 text-white text-3xl sm:text-7xl font-bold"
              >
                {character}
              </motion.span>
            ))}
          </div>
        ))}

        <motion.div
          onMouseEnter={() => setHover(0)}
          onMouseLeave={() => setHover(-1)}
          initial={{ scale: 1 }}
          animate={{ scale: hoverindex === 0 ? 1.04 : 1 }}
          transition={{ ease: "linear", duration: 0.1 }}
          className='z-10 h-48 sm:h-[65vh] w-full sm:w-[45%] bg-gray-500 rounded-xl overflow-hidden'
        >
          <img src="/images/tictac.jpg" alt="tictac game" className='h-full w-full object-cover rounded-xl' />
        </motion.div>

        <motion.div
          onMouseEnter={() => setHover(1)}
          onMouseLeave={() => setHover(-1)}
          initial={{ scale: 1 }}
          animate={{ scale: hoverindex === 1 ? 1.04 : 1 }}
          transition={{ ease: [0.25, 1, 0.5, 1], duration: 0.1 }}
          className='h-48 sm:h-[65vh] w-full sm:w-[45%] bg-gray-500 rounded-xl overflow-hidden'
        >
          <a href="https://github.com/SowreeshUndru/snake-game" target="_blank" rel="noopener noreferrer">
            <img src="/images/snake.jpg" alt="snake project photo" className='h-full w-full object-cover rounded-xl' />
          </a>
        </motion.div>
      </div>

      {/* project cards -2 */}
      <div className='relative flex flex-wrap gap-4 sm:gap-[6%] justify-center items-center mb-10' style={{ minHeight: '60vh' }}>
        {["", "", "E-commerce", "my portfolio"].map((item, index) => (
          <div key={index} className='absolute flex overflow-hidden'>
            {item.split("").map((character, charIndex) => (
              <motion.span
                key={charIndex}
                initial={{ y: "100%" }}
                animate={{ y: hoverindex1 === index ? "0%" : "100%" }}
                transition={{ ease: easeIn, duration: charIndex * 0.04 }}
                className="z-20 text-white text-3xl sm:text-7xl font-bold"
              >
                {character}
              </motion.span>
            ))}
          </div>
        ))}

        <motion.div
          onMouseEnter={() => setHover1(2)}
          onMouseLeave={() => setHover1(-1)}
          initial={{ scale: 1 }}
          animate={{ scale: hoverindex1 === 2 ? 1.04 : 1 }}
          transition={{ ease: "linear", duration: 0.1 }}
          className='z-10 h-48 sm:h-[65vh] w-full sm:w-[45%] bg-gray-500 rounded-xl overflow-hidden'
        >
          <a href="https://github.com/SowreeshUndru/e-com" target="_blank" rel="noopener noreferrer">
            <img src="/images/ecom.jpg" alt="ecommerce project" className='h-full w-full object-cover rounded-xl' />
          </a>
        </motion.div>

        <motion.div
          onMouseEnter={() => setHover1(3)}
          onMouseLeave={() => setHover1(-1)}
          initial={{ scale: 1 }}
          animate={{ scale: hoverindex1 === 3 ? 1.04 : 1 }}
          transition={{ ease: [0.25, 1, 0.5, 1], duration: 0.1 }}
          className='h-48 sm:h-[65vh] w-full sm:w-[45%] bg-[url("./images/bg.jpg")] bg-cover bg-center rounded-xl overflow-hidden'
        >
          <a href="https://github.com/SowreeshUndru/main" target="_blank" rel="noopener noreferrer">
            <img src="/images/portfolio.png" alt="my-portfolio" className='h-full w-full object-contain' />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Project;

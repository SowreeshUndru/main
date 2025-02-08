import { motion } from 'framer-motion';
import { div, h1 } from 'framer-motion/client';
import React from 'react'
import { useState } from 'react';

function Cards() {
    
    const [translate, setTranslate] = useState(-1);

    return (
        <div onMouseOver={()=>setTranslate(1)} data-scroll data-scroll-speed="0.1" className='uppercase  w-[99vw]  -mt-20 rounded-tl-4xl rounded-tr-4xl  bg-gray-600 '>

           <div > <motion.h1 initial={{x:"100%"}} animate={{x:translate==1 ?"0%":"100%"}} transition={{ease:[0.25, 1, 0.5, 1],duration:"1.2"}} className='overflow-hidden ml-10 pt-10 -mb-10 font-bold tracking-tighter text-3xl ' >lets work together</motion.h1></div>
            <div className='flex flex-wrap gap-50 w-full h-full justiy-center items-center'>

                <img src="../images/work.jpg"
                    alt="worktogether"
                    className='mt-40 ml-15 rounded-xl w-[30%] h-[60%]' />

                <form action="https://formsubmit.co/sowreeshundru@gmail.com" method='POST'>

                    <div className='text-white flex flex-col   gap-24 justify-center content-center '>
                        <div className='flex gap-8 overflow-hidden'> <motion.input initial={{x:"-100%"}} animate={{x:translate==1 ?"0%":"-100%"}} transition={{ease:[0.25, 1, 0.5, 1],duration:"1.6"}} type="text" name='name' placeholder='Name' className='bg-white overflow-hidden h-8 w-90 text-[#18181B] rounded-full px-4' />
                            <motion.input initial={{x:"-100%"}} animate={{x:translate==1 ?"0%":"-100%"}} transition={{ease:[0.25, 1, 0.5, 1],duration:"1.2"}} type="text" placeholder='Your Email' name='email' className='bg-white h-8 w-90 text-[#18181B] rounded-full px-4' /></div>
                        <div className='flex gap-8 overflow-hidden'><motion.input initial={{x:"-100%%"}} animate={{x:translate==1 ?"0%":"-100%"}} transition={{ease:[0.25, 1, 0.5, 1],duration:"1.2"}} type="text" placeholder='Subject' name='subject' className=' overflow-hidden bg-white h-8 w-90 text-[#18181B] rounded-full px-4' />

                            <motion.textarea initial={{x:"-100%"}} animate={{x:translate==1 ?"0%":"-100%"}} transition={{ease:[0.25, 1, 0.5, 1],duration:"1.2"}} name="content" placeholder='content' id="text" className='bg-white h-40 w-90 text-[#18181B] rounded-xl px-4 overflow-hidden'></motion.textarea></div>
                        <button className='bg-white h-8 w-40 text-[#18181B] rounded-full px-4 ml-75'>send message</button>

                    </div>



                </form>



            </div>
            

        </div>
    )
}

export default Cards






import { motion } from 'framer-motion';
import React, { useState } from 'react';

function Cards() {
  const [translate, setTranslate] = useState(-1);

  return (
    <div
      onMouseOver={() => setTranslate(1)}
      data-scroll
      data-scroll-speed="0.1"
      className="uppercase w-full -mt-20 rounded-tl-[3rem] rounded-tr-[3rem] bg-gray-600 px-6 py-10"
    >
      <motion.h1
        initial={{ x: '100%' }}
        animate={{ x: translate === 1 ? '0%' : '100%' }}
        transition={{ ease: [0.25, 1, 0.5, 1], duration: 1.2 }}
        className="overflow-hidden font-bold tracking-tighter text-3xl ml-4 md:ml-10 mb-8"
      >
        let’s work together
      </motion.h1>

      <div className="flex flex-col z-[999] lg:flex-row gap-10 justify-center items-center w-full">
        {/* Image */}
        <img
          src="/images/work.jpg"
          alt="work together"
          className="rounded-xl w-full max-w-[400px] h-auto mt-10 lg:mt-0 z-[999]"
        />

        {/* Form */}
        <form
          action="https://formsubmit.co/sowreeshundru@gmail.com"
          method="POST"
          className="w-full max-w-[600px]"
        >
          <div className="text-white flex flex-col gap-8">
            {/* Name + Email */}
            <div className="flex flex-col md:flex-row gap-6">
              <motion.input
                initial={{ x: '-100%' }}
                animate={{ x: translate === 1 ? '0%' : '-100%' }}
                transition={{ ease: [0.25, 1, 0.5, 1], duration: 1.6 }}
                type="text"
                name="name"
                placeholder="Name"
                className="bg-white h-10 w-full md:w-1/2 text-[#18181B] rounded-full px-4"
              />
              <motion.input
                initial={{ x: '-100%' }}
                animate={{ x: translate === 1 ? '0%' : '-100%' }}
                transition={{ ease: [0.25, 1, 0.5, 1], duration: 1.2 }}
                type="email"
                name="email"
                placeholder="Your Email"
                className="bg-white h-10 w-full md:w-1/2 text-[#18181B] rounded-full px-4"
              />
            </div>

            {/* Subject + Content */}
            <div className="flex flex-col md:flex-row gap-6">
              <motion.input
                initial={{ x: '-100%' }}
                animate={{ x: translate === 1 ? '0%' : '-100%' }}
                transition={{ ease: [0.25, 1, 0.5, 1], duration: 1.2 }}
                type="text"
                name="subject"
                placeholder="Subject"
                className="bg-white h-10 w-full md:w-1/2 text-[#18181B] rounded-full px-4"
              />
              <motion.textarea
                initial={{ x: '-100%' }}
                animate={{ x: translate === 1 ? '0%' : '-100%' }}
                transition={{ ease: [0.25, 1, 0.5, 1], duration: 1.2 }}
                name="content"
                placeholder="Message"
                className="bg-white h-40 w-full md:w-1/2 text-[#18181B] rounded-xl px-4 py-2 resize-none"
              ></motion.textarea>
            </div>

            {/* Submit + Resume */}
            <div className="flex flex-col md:flex-row gap-4 items-center mt-4">
              <button
                type="submit"
                className="bg-white h-10 w-40 text-[#18181B] rounded-full px-4 hover:bg-gray-200 transition-all"
              >
                Send Message
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline hover:text-gray-300"
              >
                📄 View My Resume
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cards;

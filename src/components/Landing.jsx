import React, { useState } from 'react';

function Landing() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseOver = (index) => setHoveredIndex(index);
  const skills = [
    "HTML", "CSS", "JavaScript", "Node.js", "Express.js",
    "DSA", "C", "C++", "Python (Basics)", "Tailwind CSS",
    "Bootstrap", "MongoDB", "React", "Git", "Version Control",
    "EJS", "SQL"
  ];

  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      className="relative w-full min-h-screen bg-zinc-900 text-white py-20 border-t border-zinc-700"
    >
      <div className="textstructure mt-10 px-4 sm:px-8 md:px-10">
        <div className="masker">
          <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tighter font-semibold">
            I&apos;M
          </h1>
        </div>

        <div className="masker">
          <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tighter font-semibold mb-4">
            SOWREESH UNDRU
          </h1>
        </div>

        <div className="masker py-4">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight font-medium">
            I'm a Full Stack Web Developer with experience in building both the front-end and back-end of web applications. <br />
            I work with technologies like HTML, CSS, JavaScript, Node.js, and MongoDB to create responsive and efficient websites. <br />
            I'm always eager to learn and improve my skills to deliver quality solutions.
          </p>

          <div className="border-t border-zinc-600 mt-12 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">SKILLS</h2>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {skills.map((item, index) => (
                <span
                  key={index}
                  style={{ backgroundColor: hoveredIndex === index ? 'grey' : 'transparent' }}
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseLeave={() => setHoveredIndex(-1)}
                  className="px-4 py-2 rounded-full border border-gray-600 bg-zinc-800 text-xs sm:text-sm transition-all duration-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;

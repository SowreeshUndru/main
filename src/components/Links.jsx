import React, { useState } from 'react';

function Links() {
  // Social media links
  const socialLinks = [
    "https://www.instagram.com/sowreesh18/",
    "https://www.facebook.com/undru.sowreesh",
    "https://github.com/SowreeshUndru",
    "https://www.linkedin.com/in/sowreesh-undru-54b318258/"
  ];

  // Projects links
  const projectLinks = [
    { name: "E-Commerce", url: "https://e-com-h8gq.onrender.com" },
    { name: "Project AI", url: "https://ai-project-2-l52u.onrender.com/" },
  ];

  const [ismouseoverd, setMouseoverd] = useState(null);
  const [projectHover, setProjectHover] = useState(null);

  return (
    <div data-scroll data-scroll-speed="0" className='w-full h-screen bg-zinc-700 text-white'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-16'>

        {/* Social Media Section */}
        <div className='flex flex-col gap-6'>
          <h1 className='uppercase text-3xl md:text-4xl font-bold tracking-tighter leading-none'>
            social media
          </h1>
          {["Instagram", "Facebook", "Github", "Linkedin"].map((item, index) => (
            <div
              key={index}
              onMouseOver={() => setMouseoverd(index)}
              onMouseOut={() => setMouseoverd(null)}
              style={{
                backgroundColor: ismouseoverd === index ? "white" : "#D4D4D8",
              }}
              className='rounded-full w-full max-w-xs px-6 py-3 flex justify-between items-center cursor-pointer transition-colors duration-300'
            >
              <a
                href={socialLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm md:text-base ${ismouseoverd === index ? 'text-gray-700' : 'text-gray-800'}`}
              >
                {item}
              </a>
              <div className='rounded-full h-6 w-6 flex justify-center items-center'>
                <img
                  width="20"
                  height="20"
                  className='rotate-[-45deg]'
                  src="https://img.icons8.com/ios-glyphs/30/arrow.png"
                  alt="arrow"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className='flex flex-col gap-6'>
          <h1 className='uppercase text-3xl md:text-4xl font-bold tracking-tighter leading-none'>
            Deployed versions of my projects
          </h1>
          {projectLinks.map(({ name, url }, index) => (
            <div
              key={index}
              onMouseOver={() => setProjectHover(index)}
              onMouseOut={() => setProjectHover(null)}
              style={{
                backgroundColor: projectHover === index ? "white" : "#D4D4D8",
              }}
              className='rounded-full w-full max-w-xs px-6 py-3 flex justify-between items-center cursor-pointer transition-colors duration-300'
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm md:text-base ${projectHover === index ? 'text-gray-700' : 'text-gray-800'}`}
              >
                {name}
              </a>
              <div className='rounded-full h-6 w-6 flex justify-center items-center'>
                <img
                  width="20"
                  height="20"
                  className='rotate-[-45deg]'
                  src="https://img.icons8.com/ios-glyphs/30/arrow.png"
                  alt="arrow"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Links;

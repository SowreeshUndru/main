import React, { useState } from 'react';

function Landing() {
    const [hoveredIndex, setHoveredIndex] = useState(-1); // State to track hovered index

    function handleMouseOver(index) {
        setHoveredIndex(index); // Set the hovered index
    }

    return (
        <div  data-scroll
        data-scroll-speed="-.3" className='w-full min-h-screen bg-zinc-900 border-t-1 text-white py-40'>
            <div className='textstructure mt-20 px-10'>
                <div className='masker'>
                    <h1 className='uppercase text-6xl leading-tight tracking-tighter font-semibold'>I'M</h1>
                </div>
                <div className='masker'>
                    <h1 className='uppercase text-6xl leading-tight tracking-tighter font-semibold mb-4'>SOWREESH UNDRU</h1>
                </div>
                <div className='masker py-4'>
                    <h1 className='text-lg leading-7 tracking-tight font-medium'>
                        I'm a Full Stack Web Developer with experience in building both the front-end and back-end of web applications. <br />
                        I work with technologies like HTML, CSS, JavaScript, Node.js, and MongoDB to create responsive and efficient websites. <br />
                        I'm always eager to learn and improve my skills to deliver quality solutions.
                    </h1>

                    <div className='border-t-1 border-zinc-500 mt-16 pt-6'>
                        <h1 className='text-2xl mb-4 text-center'>SKILLS</h1>

                        <div className='flex flex-wrap justify-center gap-4'>
                            {[
                                "HTML", "CSS", "JavaScript", "Node.js", "Express.js",
                                "DSA", "C", "C++", "Python (Basics)", "Tailwind CSS",
                                "Bootstrap", "MongoDB", "React", "Git", "Version Control",
                                "EJS", "SQL"
                            ].map((item, index) => (
                                <h1
                                    key={index}
                                    style={{ backgroundColor: hoveredIndex === index ? 'grey' : 'transparent' }}
                                    onMouseOver={() => handleMouseOver(index)} 
                                    onMouseLeave={() => setHoveredIndex(-1)}  
                                    
                                    className='px-4 py-2 rounded-full border border-gray-600 bg-zinc-800 text-sm transition-colors duration-300'
                                >
                                    {item}
                                </h1>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;

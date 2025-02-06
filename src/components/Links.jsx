import React, { useState } from 'react';

function Links() {
    // Track the index of the hovered item
    const [ismouseoverd, setMouseoverd] = useState(null);

    return (
        <div className='w-[100vw] h-[100vh] text-black bg-zinc-700'>
            <div className='grid grid-cols-2 gap-4'>
                <div className='flex gap-15 px-8 py-25 flex-col'>
                    <h1 className='uppercase text-white text-4xl font-bold tracking-tighter leading-none'>social media</h1>
                    {["Instagram", "Facebook", "Github", "Linkedin"].map((item, index) => {
                        return (
                            <div 
                                key={index}
                                onMouseOver={() => setMouseoverd(index)} 
                                onMouseOut={() => setMouseoverd(null)} 
                                style={{ backgroundColor: ismouseoverd === index ?"white":"#D4D4D8"  }} 
                                className=' rounded-full w-25  flex justify-center items-center'>
                                <a href="####" className='text-gray-700'>{item}</a>
                               <div className='rounded-full h-4 w-3'> <img width="20" height="20" className='rotate-[-45deg]' src="https://img.icons8.com/ios-glyphs/30/arrow.png" alt="arrow"/></div>
                            </div>
                        );
                    })}
                </div>
                <div className='flex flex-col gap-15 px-8 py-25'>
                    <h1 className='uppercase text-white text-4xl font-bold tracking-tighter leading-none'>Deployed versions of my projects</h1>
                    
                </div>
            </div>
        </div>
    );
}

export default Links;



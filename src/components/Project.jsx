import React from 'react'

function Project() {
  return (
    <div className=' w-[100vw] min-h-screen bg-[#27272A] px-14 py-7'>
      <h1 className='text-[500%] uppercase font-["Neue_Montreal"] tracking-tighter border-b-2 border-gray-600'>project</h1>
    
      <div className=' relative flex  h-[100vh] w-full  gap-[6%] items-center  justify-center'>
       
      {["E-commerce", "Snake-Game"].map((item, index) => (
          <div className='absolute' key={index}>
            {item.split("").map((character, charIndex) => (
              <span key={charIndex} className="text-white text-2xl">{character}</span>
            ))}
          </div>
        ))}
      
        <div className='h-[75%] w-[45%] bg-gray-500 rounded-xl'>

        </div>

        <div className='h-[75%] w-[45%] bg-gray-500 rounded-xl'>

        </div>

      </div>
    </div>
  )
}

export default Project
import React from 'react'

function Links() {
    return (



        <div className='w-[100vw] h-[100vh] text-black bg-zinc-700'>
            <div className='grid grid-cols-2 gap-4'>
                <div className='flex   gap-15  px-8 py-25 flex-col '>
                    <h1 className='uppercase text-white text-4xl font-bold tracking-tighter leading-none'>social media</h1>
                    {["Instagram", "Facebook", "Github", "Linkedin"].map(function (item, index) {
                        return <div className='bg-zinc-300  rounded-full w-20 flex justify-center items-center'><a href="####" className='text-gray-700'  >{item}</a></div>
                    })}
                </div>
                <div className='flex flex-col gap-15  px-8 py-25 '>
                <h1 className='uppercase text-white text-4xl font-bold tracking-tighter leading-none'>Deployed versions of my projects</h1>
                
                </div>

            </div>

        </div>



    )
}

export default Links






// git commit
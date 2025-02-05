import React from 'react'

function About() {
  return (
    <div className='flex flex-col items-center  bg-[#CDEA68]  rounded-tl-3xl  rounded-tr-3xl  text-zinc-900'>
        <h1 className='text-black mt-5 text-2xl font-bold mb-9'>EDUCATION</h1>
        <div className='grid grid-col w-full grid-cols-3 gap-10 text-xl leading-[30px]'> 
            <h1 >
            During my 10th class, I focused on building a strong foundation in core subjects, including mathematics, science, and languages. My dedication to academics allowed me to perform well in the board exams, setting a solid groundwork for my future educational and professional journey.
            </h1>
            <h1>
            In my 11th and 12th classes, I specialized in [mention your stream, e.g., Science/Commerce/Arts], where I deepened my understanding of subjects like [mention key subjects, e.g., Physics, Chemistry, Mathematics, or Accountancy]. These years shaped my problem-solving skills and analytical thinking, preparing me for the challenges of higher education.
            </h1>
            <h1>
            I pursued a Bachelor of Technology (BTech) degree in [mention your branch, e.g., Computer Science, Electronics, etc.] at [mention the name of the institution]. Throughout my BTech, I focused on gaining both theoretical knowledge and practical experience, participating in various projects and internships that helped me apply my learning in real-world scenarios. The program enhanced my technical skills and fostered a passion for [specific interest in your field, e.g., software development, data science, etc.].
            </h1>
        </div>

         <div className='col-span-2 w-[45vw] h-[30vw] bg-[#CDEA] mt-20 rounded-[30px] mb-10'> <img src="photo" alt="my photo" className='h-fit'/></div>
          
          

        

    </div>
  )
}

export default About
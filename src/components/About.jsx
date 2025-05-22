import React from 'react';

function About() {
  return (
    <div
      data-scroll
      data-scroll-speed="0.1"
      className="relative z-2 -mt-18 flex flex-col items-center bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-zinc-900 px-4 py-10"
    >
      <h1 className="text-black text-xl sm:text-2xl font-bold mb-8">EDUCATION</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-base sm:text-lg lg:text-xl leading-relaxed w-full max-w-7xl">
        <p>
          During my 10th class, I focused on building a strong foundation in core subjects,
          including mathematics, science, and languages. My dedication to academics allowed me
          to perform well in the board exams, setting a solid groundwork for my future educational
          and professional journey.
        </p>
        <p>
          In my 11th and 12th classes, I specialized in Science, where I deepened my understanding
          of subjects like Physics, Chemistry, and Mathematics. These years shaped my problem-solving
          skills and analytical thinking, preparing me for the challenges of higher education.
        </p>
        <p>
          I pursued a Bachelor of Technology (BTech) degree in Computer Science at [Your Institution Name].
          Throughout my BTech, I focused on gaining both theoretical knowledge and practical experience,
          participating in various projects and internships that helped me apply my learning in real-world
          scenarios.
        </p>
      </div>

      <div className="w-full max-w-2xl mt-12">
        <img
          src="/images/your-photo.jpg"
          alt="My Photo"
          className="w-full h-auto rounded-[30px] object-cover"
        />
      </div>
    </div>
  );
}

export default About;

import React from 'react'
import Navbar from './components/navbar';
import Landing from './components/Landing';
import Mar from './components/Mar';
import About from './components/About';
import Eyes from './components/Eyes';
import Project from './components/project';
import Links from './components/Links';
import LocomotiveScroll from "locomotive-scroll";
import Cards from './components/Cards';

export default function App() {
  const locomotiveScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });
  return (
    <div data-scroll-container className='w-full min-h-screen  text-white bg-zinc-900'>
     <Navbar/>
     <Landing/>
     <Mar/>
     <About/>
     <Eyes/>
     <Project/>
     <Eyes/>
     <Links/>
     <Cards/>
     
    </div>
    
  )
}

import React from 'react'
import Navbar from './components/navbar';
import Landing from './components/Landing';
import Mar from './components/Mar';
import About from './components/about';
import Eyes from './components/Eyes';
import Project from './components/project';
export default function App() {
  return (
    <div className='w-full min-h-screen  text-white bg-zinc-900'>
     <Navbar/>
     <Landing/>
     <Mar/>
     <About/>
     <Eyes/>
     <Project/>
    </div>
    
  )
}

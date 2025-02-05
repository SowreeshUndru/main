import React, { useEffect } from 'react'
import { useState } from 'react';
function Eyes() {
 const [angle_v,setAngle]=useState(0);
 
  useEffect(function(){
      window.addEventListener("mousemove",function(event){
        const x=event.clientX;
        const y=event.clientY;
        const midx=window.innerWidth/2;
        const midy=window.innerHeight/2; 
        let deltay=y-midy;
        let deltax=x-midx;
        let angle=Math.atan2(deltay,deltax)*(180/Math.PI)-180;
      
         setAngle(angle);
         return function () {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      },[]);
      
  })
  return (
    <div className='flex justify-center bg-[#315839] h-[100vh] w-[100vw]'>
      <div className=' mt-20 h-[80vh] w-[80vw] flex justify-center items-center bg-cover bg-center bg-[url("../images/canva-green-illustrative-organic-plant-zoom-virtual-background-fpJFOduK3w4.jpg")]'>

        <div className='w-[60%] h-1/2  flex gap-20 justify-center items-center'>

         <div className='flex  h-60 w-60 rounded-full justify-center items-center bg-white'>
         <div className='relative bg-black h-2/3 w-2/3 rounded-full '>
            <div className='absolute  w-[100%]  h-1/9  top-1/2 -translate-y-1/2 -rotate-45  '  style={{transform:`rotate(${angle_v}deg) translateY(-50%)`}}>
              <div className='bg-white h-7 w-7 rounded-full'></div>
            </div>
          </div>
         </div>

          <div className=' h-60 w-60 flex rounded-full justify-center items-center bg-white'>
          <div className=' relative bg-black h-2/3 w-2/3  rounded-full '>
            <div className='absolute  w-[100%]  h-1/9  top-1/2 -translate-y-1/2 -rotate-45 ' style={{transform:`rotate(${angle_v}deg) translateY(-50%)`}}>
              <div className='bg-white h-7 w-7 rounded-full'></div>
            </div>
          </div>
          </div>

        </div>


      </div>

    </div>
  )
}

export default Eyes
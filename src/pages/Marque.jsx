import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

const Marque = () => {
  const maru = useRef(null);
  useEffect(() =>{
    const handlescroll = (e) =>{
      if(e.deltaY > 0){
        gsap.to(maru.current, {
          x: '-=100',
          duration: 0.6,
          
          ease: "power1.out"
        });
      } else{
        gsap.to(maru.current,{
          x:"+=100",
          duration: 0.6,
          
          ease: "power1.out"
        })
      }
    }
    window.addEventListener("wheel", handlescroll);
   return () => window.removeEventListener("wheel", handlescroll);
  },[]);

  return (
    <div className=' w-full p-10  '>
      <div className='w-full h-full overflow-hidden rounded-3xl'>
        <div ref={maru} className='flex  items-center h-full whitespace-nowrap justify-center'>
          <h1  className='text-black text-shadow-regal-blue font-bold text-8xl '>Sanish? Sanish? Sanish? Sanish? Sanish? Sanish? Sanish? Sanish? Sanish? Sanish? Sanish? Sanish? Sanish? Sanish? Sanish? </h1>
        </div>
        
      </div>
    </div>
  )
}

export default Marque;
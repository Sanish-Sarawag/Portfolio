import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Page1Bottom = () => {

    useGSAP(function(){
      gsap.to('#banner',{
        rotate: 360,
        duration:4,
        repeat:-1,
        ease: 'linear'
      })
    })
  return (
    <div className='absolute left-0  p-28 flex items-end justify-between bottom-0 w-full '>
        <div>
            <h2 className='text-2xl  font-[anzo2]'>BRAND DESIGN | WEBSITE DESIGN</h2>
                <h3 className='text-1xl  font-[anzo2] text-gray-400 '>BESPOKE FREELANCER</h3>
            
        </div>
        <div>
            <img id='banner' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_89,h_89,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png" alt="" />
        </div>
    </div>
    
  )
}

export default Page1Bottom
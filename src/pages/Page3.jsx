import React from 'react'

const Page3 = () => {
  return (
    <div className='relative h-screen flex items-center justify-center bg-white'>
        <img className='absolute z-20 w-[45vw]' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_713,h_410,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png" alt="" />
        <video autoPlay loop muted className='h-[45vh] w-[34vw] z-10 relative object-cover' src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4"></video>
        <div className='z-0 w-3/5 h-0.5 top-[40%] absolute bg-black '></div>
        <div className='z-0 w-4/5 h-0.5 top-[58%] absolute bg-black '></div>
        <div className='z-0 w-full h-0.5 top-[75%] absolute bg-black '></div>
    </div>
  )
}

export default Page3
import React from 'react'

const About = () => {
  return (
    <div id='about' className='h-screen relative p-10 bg-white'>
        <div className='h-full w-full rounded-[50px] overflow-hidden bg-black'>
            <video autoPlay loop muted className='h-full w-full object-cover' src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/720p/mp4/file.mp4"></video>
            <h1 className='font-[anzo4] text-[25vw] absolute bottom-0 tracking-tighter'>ABOUT</h1>
        </div>
    </div>
  )
}

export default About
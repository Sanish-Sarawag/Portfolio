import React from 'react'

const Page5 = () => {
  return (
    <div className='h-screen relative p-10 bg-white'>
        <div className='h-full w-full rounded-[50px] overflow-hidden bg-black'>
            <video autoPlay loop muted className='h-full w-full object-cover' src="/src/assets/2.mp4"></video>
            <h1 className='font-[anzo4] text-[25vw] absolute bottom-0 tracking-tighter'>ABOUT</h1>
        </div>
    </div>
  )
}

export default Page5
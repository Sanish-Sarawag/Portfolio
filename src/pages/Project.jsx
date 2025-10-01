import React from 'react'

const Project = () => {
  return (
    <div id='Project' className='h-screen p-10 bg-white text-white'>
      <div className='h-full w-full flex justify-between rounded-[50px] bg-black p-6 text-6xl '>
        <div className=' h-full relative  '>
          <div className='h-auto object-contain relative flex-col space-y-16 py-20'>

            <div className='m-6 group border-b-2 w-[30vw]'>
              <h1>GTA-VI</h1>
              <div className='bg-red-500 hidden absolute h-[56vh] group-hover:inline rounded-3xl left-[55vw] top-[12vh] w-[30vw]'>
                <img src="/images/GTA-6.png" alt="" className='w-full h-full rounded-3xl object-cover' />
              </div>
            </div>
            <div className='m-6 group border-b-2 w-[30vw]'>
              <h1>Project2</h1>
              <div className='bg-red-500 hidden absolute h-[56vh] group-hover:inline rounded-3xl left-[55vw] top-[12vh] w-[30vw]'>2</div></div>
            <div className='m-6 group border-b-2 w-[30vw]'>
              <h1>Project3</h1>
              <div className='bg-red-500 hidden absolute h-[56vh] group-hover:inline rounded-3xl left-[55vw] top-[12vh] w-[30vw]'>3</div></div>
            <div className='m-6 group border-b-2 w-[30vw]'>
              <h1>Project4</h1>
              <div className='bg-red-500 hidden absolute h-[56vh] group-hover:inline rounded-3xl left-[55vw] top-[12vh] w-[30vw]'>4</div></div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Project;
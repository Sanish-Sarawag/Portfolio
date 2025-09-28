import React from 'react'

const TiltText = (props) => {
  return (
    <>
    <div id="tiltDiv"  ref={props.abc} className="mt-52 z-30 absolute ">
          <h1 className="text-[4.3vw] leading-[4vw] uppercase font-[anzo1] ">
            I am <span className="text-black">DARK MODE</span>™
          </h1>
          <h1 className="text-[8vw] leading-[7vw] font-[anzo3]">DESIGNER</h1>
          <h1 className="text-[4.3vw] leading-[4vw] uppercase font-[anzo1]">
            To Hire
          </h1>
        </div>
    </>
  )
}

export default TiltText
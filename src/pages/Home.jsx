import React, { useState, useRef, useEffect } from "react";
import TiltText from "../assets/components/TiltText";
import Page1Bottom from "../assets/components/Page1Bottom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const mouseMoving = (e) => {
    setXVal(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        20
    );
    setYVal(
      -(
        e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().width / 2
      ) / 10
    );

    
  };

  useGSAP(
    function () {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 3,
        ease: "elastic.out(1,0.75)",
      });
    },
    [xVal, yVal]
  );

    const lala = useRef(null);
  useEffect(() =>{
    const move = (e) => {
      gsap.to(lala.current, {
        x: e.clientX - 25,
        y: e.clientY - 700,
        duration: 2.5,
        ease:  "elastic.out(1,0.5)",
      });
    }
     window.addEventListener("mousemove", move);
      return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);
  

  return (
    <div
      id="home"
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      className="h-screen p-7  bg-white"
    >
      <div
        id="page1-in"
        className=' p-20 shadow-xl shadow-gray-700 h-full w-full rounded-[50px] bg-cover bg-center bg-[url("/images/me.png")]'
      >

        <TiltText abc={tiltRef} />
        <Page1Bottom />
      </div>
      <div ref={lala} className='hill fixed bg-[#39FF14] w-3 h-3 items-center z-50 rounded-full'></div>
    </div>
  );
};

export default Home;

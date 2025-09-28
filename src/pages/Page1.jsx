import React, { useState, useRef } from "react";
import TiltText from "../assets/components/TiltText";
import Page1Bottom from "../assets/components/Page1Bottom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page1 = () => {
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

  return (
    <div
      id="page1"
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
    </div>
  );
};

export default Page1;

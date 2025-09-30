import React from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import 'remixicon/fonts/remixicon.css'

gsap.registerPlugin(ScrollToPlugin);
const Header = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      gsap.to(window, {
        duration: 1, // scroll duration in seconds
        scrollTo: { y: aboutSection, offsetY: 0 }, // scroll to the element
        ease: "power2.out",
      });
    }
  }
  const scrollToHome = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      gsap.to(window, {
        duration: 1, // scroll duration in seconds
        scrollTo: { y: homeSection, offsetY: 0 }, // scroll to the element
        ease: "power2.out",
      });
    }
  }
  const scrollToProject = () => {
    const ProjectSection = document.getElementById("Project");
    if (ProjectSection) {
      gsap.to(window, {
        duration: 1, // scroll duration in seconds
        scrollTo: { y: ProjectSection, offsetY: 0 }, // scroll to the element
        ease: "power2.out",
      });
    }
  }

  return (
    <div className='fixed  w-full flex items-center  justify-between z-10 py-14 pb-1 px-20'>
      <div className="w-[80px] h-[80px] flex items-center justify-center">
        <svg
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 1608 1279"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Anzo.Studio Brand Identity and Logo Design"
        >
          <g>
            <path fill="#FAFAFA" d="M661.18 1279C274.682 1279 0 992.076 0 639.5S274.682 0 661.18 0c384.07 0 656.32 286.924 656.32 639.5S1045.25 1279 661.18 1279Zm0-282.061c209.05 0 357.33-162.914 357.33-357.439 0-194.525-148.28-357.439-357.33-357.439-211.48 0-362.19 162.914-362.19 357.439 0 194.525 150.71 357.439 362.19 357.439Z" />
            <path fill="#FAFAFA" d="M1454.86 1279c-85.08 0-153.14-68.08-153.14-153.19 0-85.1 68.06-153.186 153.14-153.186 85.08 0 153.14 68.086 153.14 153.186 0 85.11-68.06 153.19-153.14 153.19Z" />
          </g>
        </svg>
      </div>
      <div className='backdrop-blur-lg z-40 rounded-3xl h-14 w-[44vw] object-contain gap-8 flex justify-evenly bg-neutral-400/20 text-neutral-400'>
        <button onClick={scrollToHome} className=' text-2xl'>Home</button>
        <button onClick={scrollToAbout} className=' text-2xl'>About</button>
        <button onClick={scrollToProject} className=' text-2xl'>Project</button>
      </div>
      <div>

        <a href='/public/Sanish_P.pdf' download='Sanish_P.pdf' className='bg-black border-4 text-xs px-8 py-3 hover:bg-gray-500 rounded-full  text-white'>Resume</a>
        <i className="ri-more-2-fill text-2xl ml-3"></i>
      </div>
    </div>
  )
}

export default Header
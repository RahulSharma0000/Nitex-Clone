import React from 'react'
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import boyImg from '../assets/images/boy-img.webp'

const MakingBelieve = () => {

      useGSAP(() => {
    gsap.from(".right-box", {
      x: 500,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".right-box",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        // remove in production
      }
    });
  });

  return (
  <section className="h-[80vh] sm:h-[120vh] w-dvw flex justify-center items-center text-nitex-black">

  {/* Left Image */}
  <div className="left-box w-1/2 h-full">
    <img
      src={boyImg}
      className="w-full h-full object-cover"
      alt=""
    />
  </div>

  {/* Right Text */}
  <div className="right-box w-1/2 h-full pt-10 sm:pt-20 relative pl-4 sm:pl-10">
    <div>
      <h4 className="text-base sm:text-lg text-nitex-black font-semibold">
        [02] What we do
      </h4>
      <h3 className="text-[8vw] sm:text-[5vw] text-nitex-black font-extrabold tracking-tight leading-[9vw] sm:leading-[5vw] uppercase pt-4 sm:pt-5">
        fashion moves <br /> fast so ,<br />should you
      </h3>
    </div>
    <p className="text-xs sm:text-sm text-nitex-black font-medium mt-4 sm:mt-0 absolute bottom-10 right-1.5 text-center sm:text-left">
      As the design-driven engine <br />for today’s agile brands,  
      <br />NITEX unites trend forecasting,  
      <br />in-house prototyping,<br /> fit validation and global  
      <br />delivery into one seamless workflow.  
      <br /> We focus on trending design,  
      <br />instead of the trendiest design,  
      <br /> to help our brand partners succeed.
    </p>
  </div>

</section>

  )
}

export default MakingBelieve

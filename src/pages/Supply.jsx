import { useGSAP } from "@gsap/react";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import tailorvideo from '../assets/videos/tailor-img.mp4'

const Supply = () => {
  useGSAP(() => {
    gsap.from(".supply-left", {
      x: -500,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".supply-left",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        // remove in production
      }
    });
  });



  return (
  <section className="w-screen h-auto sm:h-[130vh] overflow-hidden">
  <div className="supply-continer flex flex-col sm:flex-row w-full h-auto sm:h-[130vh] sm:py-10">
    
    {/* Left Section */}
    <div className="supply-left w-full h-1/2 sm:w-1/2 sm:h-[130vh] pt-10 sm:pt-20 relative px-4 sm:px-10">
      <div>
        <h4 className="text-lg text-nitex-black font-semibold">[02] What we do</h4>
        <h3 className="text-[10vw] sm:text-[5vw] text-nitex-black font-extrabold tracking-tight leading-[11vw] sm:leading-[5vw] uppercase pt-5">
          The new <br /> standard in <br /> fashion <br /> supply
        </h3>
      </div>
      <p className="text-sm text-nitex-black font-medium mt-6 sm:absolute sm:bottom-10 sm:right-1.5 sm:text-center">
        As the design-driven engine <br />for today’s agile brands,  
        <br />NITEX unites trend forecasting,  
        <br />in-house prototyping,<br /> fit validation and global  
        <br />delivery into one seamless workflow.  
        <br /> We focus on trending design,  
        <br />instead of the trendiest design,  
        <br /> to help our brand partners succeed.
      </p>
    </div>

    {/* Right Section */}
    <div className="supply-right w-full h-1/2 sm:w-1/2 sm:h-[130vh]">
      <video
        src={tailorvideo}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
      ></video>
    </div>

  </div>
</section>

  );
};

export default Supply;

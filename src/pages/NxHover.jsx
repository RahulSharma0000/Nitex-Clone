import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);


const NxHover = () => {
  
  useGSAP(() => {
    
    //left-span animation

    gsap.set(".animate-text1", {y:-110})
    gsap.set(".animate-text2", {y:-100})

    const tl = gsap.timeline()

    tl.to(".animate-text2", {
       y: 400 ,
       duration:2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".animate-text2",
        start: "top 50%",
        end: "top 10%",
      //  markers:true,
        scrub: true,
      }
    })

    gsap.to(".animate-text1", {
      y:400,
      delay:0.5,
      duration:2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".animate-text1",
        start: "top 40%",
       end: "top 0%",
        scrub: true,
       
      }
    })

    

    

  });


  return (
  <section className="animate-section h-[60vh] sm:h-dvh w-dvw overflow-hidden flex relative">
  {/* Big N */}
  <span className="animate-text1 absolute top-0 left-0 inline-block text-[25vw] font-nitex2 font-extrabold text-[#D7FF00] leading-none">
    N
  </span>

  <span className="animate-text2 absolute top-0 right-0 inline-block text-[25vw] font-nitex2 font-extrabold text-[#D7FF00] leading-none">
    X
  </span>

  {/* Left side image */}
  <div className="w-1/2 h-full">
    <img
      src="/src/assets/images/img-3.webp"
      alt=""
      className="w-full h-full object-cover"
    />
  </div>

  {/* Right side image */}
  <div className="w-1/2 h-full">
    <img
      src="/src/assets/images/girl-curly-hair.webp"
      alt=""
      className="w-full h-full object-cover"
    />
  </div>
</section>

  );
};

export default NxHover;

import { useGSAP } from "@gsap/react";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Impactpage = () => {
  useGSAP(() => {
    // 1) Text reveal
    gsap.from(".hero-text p", {
      y: 100,
      
      stagger: 0.3,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".hero-text",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // 2) Div scale on scroll
    gsap.to(".clip-path", {
      scaleX: 18,
      scaleY: 10,
      ease: "power2.inOut",
      clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      transformOrigin: "center center",
      scrollTrigger: {
        trigger: ".hero-text",
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
      },
    });

    // 3) Text color change
    gsap.to(".hero-text", {
      color: "#fff",
      scrollTrigger: {
        trigger: ".hero-text",
        start: "top top",
        end: "+=200%",
        scrub: true,
      },
    });
  });

  return (
    <section className="hero-text relative flex flex-col h-screen w-screen bg-white text-black overflow-hidden">
    

      {/* Text on top */}
      <div className="relative z-10 flex flex-col justify-center items-center h-screen text-center">
        <p className="heading-impact text-lg font-medium pb-10">[01] OUR COUNTRY</p>
        <p className="text-[12vw] font-extrabold leading-[10vw]">FROM VISION</p>
        <div className="flex items-center justify-center gap-4">
          <p className="text-[12vw] font-extrabold leading-[10vw]">TO</p>

          {/* DIV between TO and GLOBAL */}
          <div className="relative p-4 mt-5">
            <div className="clip-path w-[8vw] h-[14vh] rounded-lg z-0" > <img src="/src/assets/images/hover-img.webp" alt="" /></div>
          </div>

          <p className="text-[12vw] font-extrabold leading-[10vw]">GLOBAL</p>
        </div>
        <p className="text-[12vw] font-extrabold leading-[10vw]">IMPACT</p>
      </div>
    </section>
  );
};

export default Impactpage;

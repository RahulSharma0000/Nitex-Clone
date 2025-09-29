import { useGSAP } from "@gsap/react";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import hoverImg from '../assets/images/hover-img.webp'

const Impactpage = () => {
useGSAP(() => {
  // text reveal
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

  // responsive scale
  ScrollTrigger.matchMedia({

    // ✅ Mobile (max-width: 768px)
    "(max-width: 768px)": function () {
      gsap.to(".clip-path", {
        scaleX: 4, // bada rakha taki full screen cover ho
        scaleY: 10,
        ease: "power2.inOut",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        transformOrigin: "center center",
        scrollTrigger: {
          trigger: ".hero-text",
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
        },
      });
    },

    // ✅ Desktop
    "(min-width: 769px)": function () {
      gsap.to(".clip-path", {
        scaleX: 18,
        scaleY: 10,
        ease: "power2.inOut",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        transformOrigin: "center center",
        scrollTrigger: {
          trigger: ".hero-text",
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
        },
      });
    },
  });

  // text color change
  gsap.to(".hero-text", {
    color: "#fff",
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: ".hero-text",
      start: "top top",
      end: "+=200%",
      scrub: true,
    },
  });
});


  return (
    <section
      className="
        hero-text relative flex flex-col 
        min-h-screen w-full 
        bg-white text-black overflow-hidden 
        mt-0 sm:mt-0"  // mobile ke liye yaha spacing handle hoga
    >
      {/* Text on top */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center px-3 sm:px-6">
        <p className="heading-impact text-sm sm:text-lg font-medium pb-6 sm:pb-10 z-10">
          [01] OUR COUNTRY
        </p>
        <p className="text-[12vw] sm:text-[7vw] font-extrabold leading-[11vw] sm:leading-[7vw] z-10">
          FROM VISION
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <p className="text-[12vw] sm:text-[7vw] font-extrabold leading-[11vw] sm:leading-[7vw] z-10">
            TO
          </p>
          {/* DIV between TO and GLOBAL */}
          <div className="relative p-2 sm:p-4 mt-2 sm:mt-5 z-0">
            <div className="clip-path w-[50vw] h-[25vw] sm:w-[8vw] sm:h-[14vh] rounded-lg z-0">
              <img
                src={hoverImg}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="text-[12vw] sm:text-[7vw] font-extrabold leading-[11vw] sm:leading-[7vw] z-10">
            GLOBAL
          </p>
        </div>

        <p className="text-[12vw] sm:text-[7vw] font-extrabold leading-[11vw] sm:leading-[7vw] z-10">
          IMPACT
        </p>
      </div>
    </section>
  );
};

export default Impactpage;

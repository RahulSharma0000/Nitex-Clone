import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Navbar = () => {
  const barRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // initial states
    gsap.set(barRef.current, {
      transformOrigin: "left center",
      scaleX: 0,
      opacity: 0.4,
    });
    // set text initial color with alpha (neon-ish yellow rgba)
    gsap.set(textRef.current, {
      color: "rgba(215,255,0,0.4)",
      opacity: 0.85,
    });

    // timeline driven by scroll across the whole page
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true, // scrub true makes it follow scroll position
      },
    });

    // both animations run in parallel (start at same time)
    tl.to(
      barRef.current,
      {
        scaleX: 1,
        opacity: 1,
        ease: "power1.out",
      },
      0
    );

    tl.to(
      textRef.current,
      {
        // animate color alpha to full; using rgba ensures smooth transition
        color: "rgba(215,255,0,1)",
        opacity: 1,
        ease: "none",
      },
      0
    );

    return () => {
      // cleanup timeline + scrolltrigger
      if (tl && tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
      // kill any leftover ScrollTriggers (safe)
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center px-3 py-4 bg-transparent w-dvw fixed top-0 left-0 z-10">
      {/* Logo */}
      <div>
        <svg
          viewBox="0 0 614 100"
          fill="#D7FF00"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 transition-colors"
        >
          {/* (use your full svg paths here) */}
          <path d="M111 100H1L37.4 0H147.4L111 100Z" fill="#D7FF00"></path>
          <path d="M234.8 0H268.8V100H227.33L203.33 46.67H202V100H168V0H209.47L233.47 53.33H234.8V0ZM278.13 100V0H318.13V100H278.13ZM414.13 0V31.2H390.13V100H350.13V31.2H326.13V0H414.13ZM506.13 0V28.4H462.13V37.33H502.13V62.66H462.13V71.59H506.13V99.99H422.13V0H506.13Z" fill="#D7FF00"></path>
          <path d="M556.5 0L562.23 34.8H563.56L569.16 0H612.89L594.88 49.73V50.53L612.89 100H569.16L563.56 64.93H562.23L556.5 100H512.77L530.78 50.53V49.73L512.77 0H556.5Z" fill="#D7FF00"></path>
        </svg>
      </div>

      {/* Menu */}
      <div className="flex gap-8 text-black justify-end text-sm font-medium flex-col lg:flex-row pt-5">
      <div className="relative inline-block">
  <h4
    className="relative z-10 px-4 py-2 pr-[18vw] bg-[#ccea2590] font-bold"
  >
    MEET NITEX
  </h4>

  {/* Bar exactly h4 jitna */}
  <span
    ref={barRef}
    className="absolute left-0 top-0 w-full h-full bg-[#D7FF00] z-0"
    style={{
      transformOrigin: "left center",
      transform: "scaleX(0)",
      opacity: 0,
    }}
  />
</div>



        <h4 className="text-start pl-2 pr-[18vw] py-2 bg-[#929292]">GET NITEX</h4>
      </div>
    </div>
  );
};

export default Navbar;

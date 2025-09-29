import { useGSAP } from "@gsap/react";
import React from "react";
import { gsap } from "gsap";


const FuturePage = () => {


  useGSAP(() => {
  const isMobile = window.innerWidth < 768; // md breakpoint ke liye
  const xOffset = isMobile ? 50 : 150;

  gsap.to(".future-card2", {
    x: -xOffset,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".future-container",
      start: "top 20%",
      end: "top top",
      scrub: true,
    },
  });

  gsap.to(".future-card3", {
    x: xOffset,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".future-container",
      start: "top 20%",
      end: "top top",
      scrub: true,
    },
  });
});


  return (
    <section className="h-[60vh] lg:h-[120vh] w-dvw relative bg-gray-300 future-container">
      <div className="help-text w-full  pt-10 relative  flex flex items-center justify-center flex-col gap-10 py-10 ">
        <div>
          <h4 className="text-lg text-nitex-black font-semibold text-center uppercase text-gray-600">
            [02] What we do
          </h4>
          <h3 className="text-[5vw] text-nitex-black font-extrabold tracking-tight leading-[5vw] uppercase pt-5 text-center">
            Let's build the <br />
            future of fashion, <br />
            togther
          </h3>
        </div>
      </div>

      <div className="w-1/3 h-[55%] lg:w-[25vw] lg:h-[65vh] bg-white  absolute bottom-0 left-[40%] font-[nitex2] z-10 future-card1">
        <div className="card-text p-[1vw] flex flex-col  h-full justify-between "> 
          <div>
            <h4 className="text-[2vw] uppercase font-extrabold tracking-tighter ">For talent</h4>
            <p className="text-sm font-light tracking-tighter">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos, placeat. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Numquam, ex?
            </p>
          </div>
          <h4 className="text-lg font-extrabold uppercase">See how </h4>
        </div>
      </div>
      <div className="w-1/3 h-[45%] lg:w-[25vw] lg:h-[52vh] bg-black absolute text-white bottom-0 left-[25%] z-9 font-[nitex2] future-card2">
        {" "}
        <div className="card-text p-[1vw] flex flex-col  h-full justify-between ">
          <div>
            <h4 className="text-[2vw] uppercase font-extrabold tracking-tighter">For brand</h4>
            <p className="text-sm font-light tracking-tighter">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos, placeat. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Numquam, ex?
            </p>
          </div>
          <h4 className="text-lg font-extrabold uppercase">Join Us</h4>
        </div>
      </div>
      <div className="w-1/3 h-[40%] lg:w-[25vw] lg:h-[58vh] bg-[#D7FF00] absolute bottom-0 left-[55%] z-12 font-[nitex2] future-card3">
        {" "}
        <div className="card-text p-[1vw] flex flex-col  h-full justify-between ">
          <div>
            <h4 className="text-[2vw] uppercase font-extrabold tracking-tighter">
              For partners
            </h4>
            <p className="text-sm font-light tracking-tighter">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos, placeat. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Numquam, ex?
            </p>
          </div>
          <h4 className="text-lg font-extrabold uppercase">
            {" "}
            partners with us{" "}
          </h4>
        </div>
      </div>
    </section>
  );
};

export default FuturePage;

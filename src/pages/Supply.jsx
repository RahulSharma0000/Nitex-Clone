import { useGSAP } from "@gsap/react";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Supply = () => {
  useGSAP(() => {
    gsap.from(".supply-left", {
      x: -300,
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
    <section className="w-screen h-[130vh] overflow-hidden">
      <div className="supply-continer h-[130vh] w-dvw  flex  pl-10">
        <div className="supply-left w-1/2 h-[130vh]  pt-20 relative ">
          <div>
            <h4 className="text-lg text-nitex-black font-semibold ">[02]What we do</h4>
            <h3 className="text-[5vw] text-nitex-black font-extrabold tracking-tight leading-[5vw] uppercase pt-5">The new <br /> standard in <br />fashion <br />supply</h3>
          </div>
          <p className=" text-sm text-nitex-black font-medium absolute bottom-10 right-1.5 text-center">As the design-driven engine <br />for today’s agile brands,  <br />NITEX unites trend forecasting, <br />in-house prototyping,<br /> fit validation and global <br />delivery into one seamless workflow. <br /> We focus on trending design, <br />instead of the trendiest design, <br /> to help our brand partners succeed.</p>
        </div>
        <div className="supply-right w-1/2 h-[130vh]">
          <video
            src="/src/assets/videos/tailor-img.mp4"
            className="object-cover h-[130vh]"
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

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Loading = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    // Animate-1 (green expand)
    tl.to(".animate-1", {
      duration: 2,
    scale:10,
      ease: "power2.inOut",
    })
      // Animate-2 (white expand)
      .to(".animate-2", {
        duration: 2,
        scaleX: 15,
        scaleY: 5,
        ease: "power2.inOut",
      })
      // Fade out wrapper
      .to(".animate-wrapper", {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          document.querySelector(".animate-wrapper").style.display = "none"; // poora hata do
        },
      });
  });

  return (
    <div className="animate-wrapper fixed top-0 left-0 h-screen w-screen bg-black z-50 overflow-hidden">
      {/* animate-1 = green */}
      <div className="animate-1 h-[20vh] w-[10vw] bg-[#D7FF00] absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      {/* animate-2 = white */}
      <div className="animate-2 h-[20vh] w-[10vw] bg-white absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export default Loading;

import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
   useGSAP(() => {
      gsap.from('.footer-animate', {
         y: 100,
         opacity: 0,
         duration: 1,
         stagger: 0.2,
         ease: 'power2.out',
         scrollTrigger: {
            trigger: '.footer-animate',
            start: 'top 80%',
            end: 'top 40%',
            scrub: true,
            // markers:true,
            toggleActions: 'play none none none',
         },
      });
   });
   return (
      <section className='h-[50vh] lg:h-[70vh] p-20 lg:p-0 w-dvw bg-black text-[#dd00f] flex items-center justify-center'>
         <div className='flex flex-col lg:flex-row w-full gap-12 text-[#D7FF00] justify-between items-center  '>
            <h1 className='footer-animate text-[24vw] w-[15vw] font-nitex2 font-extrabold ml-0 pl-0 p-0 m-0'>N</h1>
            <div className='footer-animate flex flex-col justify-center items-center gap-2  w-[60vw]'>
               <div className='text-[2.5vw] leading-[3vw] text-center font-medium gap-10 font-[nitex2] uppercase'>
                  <h4>join us </h4>
                  <h4>meet nitex</h4>
                  <h4>contact</h4>
                  <h4></h4>
               </div>
               <button className='px-4 py-2 bg-[#D7FF00]  text-black mt-5 border-2 border-black text-lg font-bold'>Login</button>
            </div>
            <h1 className='footer-animate text-[24vw] w-[15vw] font-nitex2 font-extrabold'>X</h1>
         </div>
      </section>
   );
}

export default Footer

import React from 'react'
import HeroText from '../components/HeroText'
import Loading from '../components/loading'

const HeroPage = () => {
  return (
    
   <section  >
     
   
    <div className='hero-section flex h-screen w-screen relative overflow-x-hidden'>
   
        <div className='left-div w-[50vw]  h-screen  '>
        <img src="/src/assets/images/hero-img1.webp" alt="" className='h-screen object-cover w-[50vw]' /></div>
          <div className='left-div w-[50vw]  h-screen  '>
        <img src="/src/assets/images/hero-img2.webp" alt="" className='h-screen object-cover w-[50vw]' /></div>
         <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  '>
        <HeroText />
        </div>

    </div>
   </section>
  )
}

export default HeroPage

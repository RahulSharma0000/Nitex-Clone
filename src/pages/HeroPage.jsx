import React from 'react'
import HeroText from '../components/HeroText'

const HeroPage = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="hero-section flex flex-col md:flex-row h-full w-full">
        
        {/* Left Image */}
        <div className="left-div w-full md:w-1/2 h-[50vh] md:h-screen">
          <img
            src="/src/assets/images/hero-img1.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="left-div w-full md:w-1/2 h-[50vh] md:h-screen">
          <img
            src="/src/assets/images/hero-img2.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* HeroText Overlay */}
      <div
        className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          w-full flex justify-center items-center px-2
        "
      >
        <HeroText />
      </div>
    </section>
  )
}

export default HeroPage

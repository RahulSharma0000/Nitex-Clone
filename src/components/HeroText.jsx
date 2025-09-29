import React from 'react'

const HeroText = () => {
  return (
    <div className='flex flex-col sm:flex-row w-full gap-6 sm:gap-12 text-[#D7FF00] justify-center items-center px-4 sm:px-8'>
      
      {/* Left N */}
      <h1 className='text-[22vw] sm:text-[16vw] font-nitex2 font-extrabold text-center sm:text-left leading-none'>
        N
      </h1>

      {/* Middle text + button */}
      <div className='flex flex-col justify-center items-center sm:items-start gap-3 w-full sm:w-[60%]'>
        <div className='text-sm sm:text-lg leading-5 sm:leading-7 text-center sm:text-left font-medium'>
          <h4>We power real-time fashion with exclusive, ready-to-buy designs</h4>
          <h4>helping brands move faster, stay on trend, and grow without compromise.</h4>
        </div>
        <button className='px-5 py-2 sm:px-6 sm:py-3 bg-[#D7FF00] text-black mt-3 sm:mt-5 border-2 border-black text-sm sm:text-lg font-semibold hover:bg-black hover:text-[#D7FF00] transition'>
          INSIDE NITEX
        </button>
      </div>

      {/* Right X */}
      <h1 className='text-[22vw] sm:text-[16vw] font-nitex2 font-extrabold text-center sm:text-right leading-none'>
        X
      </h1>
    </div>
  )
}

export default HeroText

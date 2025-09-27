import React from 'react'

const HeroText = () => {
  return (
  <div className='flex w-full gap-12 text-[#D7FF00] justify-start items-stretch pl-0 min-w-0'>
          <h1 className='text-[24vw] w-[15vw] font-nitex2 font-extrabold ml-0 pl-0 p-0 m-0'>N</h1>
          <div className='flex flex-col justify-center items-center gap-2  w-[60vw] '>
         <div className='text-lg leading-6 text-center font-medium '>   <h4 >We power real-time fashion with exclusive,  ready-to-buy designs</h4> <h4>helping brands move faster, stay on trend, and grow without compromise.</h4></div>
            <button className='px-4 py-2 bg-[#D7FF00]  text-black mt-5 border-2 border-black'>INSIDE NITEX</button>
          </div>
          <h1 className='text-[24vw] w-[15vw] font-nitex2 font-extrabold '>X</h1>
    </div>
  )
}

export default HeroText

import React from 'react'

const Impactpage = () => {
  return (
    <section className='flex flex-col   h-screen w-screen bg-white text-black p-30 overflow-x-hidden '>
        <div className='w-full h-screen'>
            <p className='text-lg text-nitex font-medium text-center pb-10'>[01] OUR COUNTRY</p>
            <p className='text-[154px] text-nitex-black font-extrabold tracking-tight leading-[130px] text-center ' >FROM VISION</p>
            <div className='flex justify-center items-center   text-nitex '>
                <p className='text-[154px] text-nitex2 font-extrabold tracking-tight leading-[130px]  '>TO</p>
                <div><img src="/src/assets/images/hover-img.webp" className='w-30 h-30 px-2' alt="" /></div>
                <p className='text-[154px]  text-nitex2 font-extrabold tracking-tight leading-[130px] '>GLOBAL</p>
            </div>
            <p className='text-[154px] text-nitex2 font-extrabold tracking-tight  text-center leading-[130px] '>IMPACT</p>
        </div>
      
    </section>
  )
}

export default Impactpage

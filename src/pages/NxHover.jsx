import React from 'react'

const NxHover = () => {
  return (
    <section className="h-[130vh] w-dvw overflow-hidden flex relative">
      {/* Big N */}
      <h1 className="text-[24vw] font-nitex2 font-extrabold absolute top-0 left-0 text-[#D7FF00] z-50">
        N
      </h1>

      {/* Left side image */}
      <div className="img-left w-1/2 bg-red-900 z-0">
        <img src="/src/assets/images/img-3.webp" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Right side */}
      <div className="img-right w-1/2 bg-amber-300 relative"></div>
    </section>
  )
}

export default NxHover

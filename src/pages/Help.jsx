import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Help = () => {

  useGSAP(() => {
    gsap.from(".card", {
      y: 200,
      stagger: 0.1,
      duration: 1,
      scrollTrigger:{
        trigger:".help-card",
        start:"top top",
        end:"bottom center",
        scrub:true,
      }
    })
  })

  return (
    <section className='h-[100vh] sm:h-[140vh] w-dvw overflow-x-hidden help-card'>
      <div className="help-text w-full pt-10 relative flex bg-white items-center justify-center flex-col gap-8 sm:gap-10 py-6 sm:py-10">
        <div>
          <h4 className="text-base sm:text-lg text-nitex-black font-semibold text-center uppercase text-gray-600">
            [02] What we do
          </h4>
          <h3 className="text-[7vw] sm:text-[5vw] text-nitex-black font-extrabold tracking-tight leading-[8vw] sm:leading-[5vw] uppercase pt-4 sm:pt-5 text-center">
            Launch Faster. <br />
            Operate Leaner. <br />
            Sell Smarter.
          </h3>
        </div>
      </div>

      <div>
        {Array.from({length:5}, (_, i) => (
          <div key={i} className='card w-full h-[20vw] sm:h-[15vh] bg-white border-t-2 flex items-center justify-between px-4 sm:px-10'>
            <h4 className='text-[6vw] sm:text-[4vw] font-extrabold'>{i+1}</h4>
            <div>
              <h4 className='text-[3vw] sm:text-[1.5vw] font-bold tracking-tighter uppercase'>
                {[
                  "CHANGE FIXED COST TO VARIABLE",
                  "FOCUS ON YOUR BRAND",
                  "SCALE WITH EFFIECIENCY",
                  "MOVE WITH SPEED",
                  "Deliver with Confidence"
                ][i]}
              </h4>
              <p className='text-xs sm:text-sm'>
                {[
                  "Skip the fixed salaries. just pick from Nitex’s ready styles and pay only when you order.",
                  "Free your team to focus on creative works while we handle the backend supply chain.",
                  "Leverage our vetted factory network to secure better pricing and consistent quality.",
                  "React instantly to market shifts with ready-to-shop designs and flexible production.",
                  "Our built-in real-time order tracking means you stay in control, even under pressure."
                ][i]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Help;

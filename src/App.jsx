import React from 'react'
import HeroPage from './pages/HeroPage'
import Navbar from './components/Navbar'
import Impactpage from './pages/Impactpage'
import Loading from './components/loading'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Supply from './pages/Supply'
import NxHover from './pages/NxHover'
import MakingBelieve from './pages/MakingBelieve'
import Help from './pages/Help'
import LovePage from './pages/LovePage'
import FuturePage from './pages/FuturePage'
import Footer from './pages/Footer'

const App = () => {

   useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className='overflow-x-hidden' >
     
      <Navbar />
      <HeroPage />
      <Impactpage />
      <Supply/>
      <NxHover/>
      <MakingBelieve/>
      <Help/>
      <LovePage/>
      <FuturePage/>
      <Footer/>
    </div>
  )
}

export default App

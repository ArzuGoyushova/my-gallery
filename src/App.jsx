import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Content from './components/Content';
import WebsiteManagement from './components/WebsiteManagement';
import Tools from './components/Tools';
import DesignGallery from './components/Design';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  const scrollRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Horizontal scroll effect only for desktop
 useEffect(() => {
  if (isMobile) return;

  const el = scrollRef.current;
  if (!el) return;

  const SCROLL_MULTIPLIER = 3; // increase this to make scrolling faster

  const handleWheel = (e) => {
    e.preventDefault();

    // Normalize so that line/page modes behave more consistently across devices
    let delta = e.deltaY;
    if (e.deltaMode === 1) {
      // "line" mode — approximate to pixels
      delta *= 16;
    } else if (e.deltaMode === 2) {
      // "page" mode — big jump
      delta *= window.innerHeight;
    }

    el.scrollLeft += delta * SCROLL_MULTIPLIER;
  };

  el.addEventListener("wheel", handleWheel, { passive: false });

  return () => {
    el.removeEventListener("wheel", handleWheel);
  };
}, [isMobile]);


  return (
    <div className={`${isMobile ? 'h-auto min-h-screen' : 'h-screen'} w-screen ${isMobile ? 'overflow-auto' : 'overflow-hidden'} cursor-[url('/cursor.png'),_auto]`}>
      <Navbar />
      <div
        ref={scrollRef}
        className={`
          ${isMobile 
            ? 'flex flex-col h-auto overflow-visible' 
            : 'flex h-full overflow-x-scroll overflow-y-hidden'
          } 
          ${isMobile ? 'whitespace-normal' : 'whitespace-nowrap'} 
          scroll-smooth
        `}
      >
        <div className={isMobile ? 'w-full' : 'flex-shrink-0'}>
          <Hero />
        </div>
        <div className={isMobile ? 'w-full' : 'flex-shrink-0'}>
          <About />
        </div>
        <div className={isMobile ? 'w-full' : 'flex-shrink-0'}>
          <Content />
        </div>
        <div className={isMobile ? 'w-full' : 'flex-shrink-0'}>
          <WebsiteManagement />
        </div>
        <div className={isMobile ? 'w-full' : 'flex-shrink-0'}>
          <Tools />
        </div>
        <div className={isMobile ? 'w-full' : 'flex-shrink-0'}>
          <DesignGallery />
        </div>
        <div className={isMobile ? 'w-full' : 'flex-shrink-0'}>
          <Achievements />
        </div>
        <div className={isMobile ? 'w-full' : 'flex-shrink-0'}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
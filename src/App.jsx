import { useEffect, useRef } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Contact from './components/Contact';

function App() {
  const scrollRef = useRef();

  useEffect(() => {
    const el = scrollRef.current;

    const handleWheel = (e) => {
      if (el) {
        e.preventDefault(); // Prevent vertical scroll
        el.scrollLeft += e.deltaY; // Translate vertical scroll to horizontal movement
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      el.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <Navbar />
      <div
          ref={scrollRef}
          className="flex h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth"
           >
        <Hero />
        <About />
        <Services />
        <Projects />
        <Tools />
        <Contact />
      </div>
    </div>
  );
}

export default App;
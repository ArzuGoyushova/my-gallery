const Hero = () => {
  return (
    <section
      id="home"
      className="w-screen h-screen shrink-0 relative flex items-center justify-between px-24 text-white"
    >
      {/* Left: Wall Text */}
     <div className="w-1/2 p-6 break-words">
  <h1 className="text-[2.75rem] leading-snug font-serif tracking-wide mb-4 text-neutral-100">
    Welcome to My Digital Gallery
  </h1>
  <p className="text-lg text-neutral-300 leading-relaxed font-light border-l-4 border-yellow-600 pl-4 text-wrap">
    Each scroll reveals a new exhibit — a project, a tool, a vision. Just like walking through curated halls,
    this portfolio invites you to explore code as a form of art.
  </p>
</div>


      {/* Right: Framed Image with Light */}
      <div className="relative flex flex-col items-center -mt-12"> {/* move image up */}
            {/* Framed Image */}
        <div className="max-w-[260px] bg-neutral-900 shadow-xl rounded-md overflow-hidden">
          {/* Brown Frame with wood-like gradient */}
          <div className="rounded-md bg-gradient-to-br from-[#a97458] via-[#8B5E3C] to-[#5c3a22] p-[6px]">
            {/* White Canvas */}
            <div className="bg-white p-2 rounded-sm">
              {/* Image */}
              <div className="aspect-[2/3] overflow-hidden rounded-sm">
                <img
                  src="src/assets/hero.png"
                  alt="Hero Portrait"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Label below image */}
              <div className="mt-3 text-center text-neutral-700 text-xs italic border-t border-gray-300 pt-2">
                “The Digital Artisan”  
                <br />
                Portrait by Arzu, 2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

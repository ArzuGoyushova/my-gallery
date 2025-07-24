import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
  <section
  id="home"
  className="w-[100vw] md:w-screen md:h-screen md:shrink-0 relative  md:flex flex-row items-center md:justify-between px-6 md:ps-24 text-white"
>
  {/* Left: Wall Text */}
  <div className="md:w-1/2 w-full p-12 md:p-6 md:text-start text-center">
  <h1 className="md:text-[3.6rem] text-[2rem] leading-snug font-serif tracking-wide mb-4 text-neutral-100 text-wrap">
  {t('hero.welcome')}
</h1>

    <p className="hidden md:block text-base md:text-lg text-neutral-300 leading-relaxed font-light border-l-4 border-yellow-600 pl-4 text-wrap">
  {t('hero.desc')}
</p>
  </div>

  {/* Right: Framed Image with Light */}
  <div className="md:w-1/2 w-full relative flex flex-col items-center md:-mt-12 md:mb-0 flex-shrink-0">
    <div className="max-w-[186px] md:max-w-[250px] lg:max-w-[300px] bg-neutral-900 shadow-xl rounded-md overflow-hidden">
      <div className="rounded-md bg-gradient-to-br from-[#a97458] via-[#8B5E3C] to-[#5c3a22] p-[6px]">
        <div className="bg-white p-2 rounded-sm">
          <div className="aspect-[2/3] overflow-hidden rounded-sm">
            <img
              src="src/assets/hero.png"
              alt="Hero Portrait"
              className="w-full h-full object-cover"
            />
          </div>
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

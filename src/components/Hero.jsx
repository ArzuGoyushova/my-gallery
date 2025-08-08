import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageWrapperVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const Hero = () => {
  const { t } = useTranslation();
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="w-[100vw] md:w-screen md:h-screen md:shrink-0 relative md:flex flex-row items-center md:justify-between px-6 md:ps-24 text-white"
    >
      {/* Left: Wall Text */}
      <motion.div
        className="md:w-1/2 w-full p-12 md:p-6 md:text-start text-center"
        variants={textVariant}
        initial="hidden"
        animate="visible"
        {...(reduce && { transition: { duration: 0 } })}
      >
        <h1 className="md:text-[3.6rem] text-[2rem]  2xl:text-[5rem] leading-snug font-serif tracking-wide mb-4 text-neutral-100 text-wrap">
          {t("hero.welcome")}
        </h1>

        <p className="md:text-[1.2rem] text-[1rem] 2xl:text-[1.8rem] hidden md:block text-base  text-neutral-300 leading-relaxed font-light border-l-4 border-yellow-600 pl-4 text-wrap">
          {t("hero.desc")}
        </p>
      </motion.div>

      {/* Right: Framed Image with Light */}
      <motion.div
        className="md:w-1/2 w-full relative flex flex-col items-center md:-mt-12 md:mb-0 flex-shrink-0"
        variants={imageWrapperVariant}
        initial="hidden"
        animate="visible"
        {...(reduce && { transition: { duration: 0 } })}
      >
        <div className="max-w-[186px] md:max-w-[260px]  2xl:max-w-[400px] bg-neutral-900 shadow-xl rounded-md overflow-hidden">
          <div className="rounded-md bg-gradient-to-br from-[#a97458] via-[#8B5E3C] to-[#5c3a22] p-[6px]">
            <motion.div
              className="bg-white p-2 rounded-sm"
              whileHover={!reduce ? { scale: 1.03 } : {}}
              whileTap={!reduce ? { scale: 0.97 } : {}}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
            >
              <div className="aspect-[2/3] overflow-hidden rounded-sm">
                <img
                  src="/assets/hero.png"
                  alt="Hero Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 text-center text-neutral-700 md:text-md text-xs italic border-t border-gray-300 pt-2">
                “The Digital Artisan”  
                <br />
                Portrait by Arzu, 2025
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

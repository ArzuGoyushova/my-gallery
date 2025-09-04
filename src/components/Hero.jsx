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
  className="container min-h-screen min-w-screen mx-auto flex flex-col md:flex-row items-center justify-around min-h-screen px-6 text-white"
>
  {/* Left: Text */}
  <motion.div
    className="w-full md:w-1/2 text-center md:text-left !mt-20 !md:mt-0"
    variants={textVariant}
    initial="hidden"
    animate="visible"
    {...(reduce && { transition: { duration: 0 } })}
  >
    <h1 className="text-2xl lg:text-4xl 2xl:text-6xl font-serif tracking-wide !mb-4 text-neutral-100 text-wrap">
      {t("hero.welcome")}
    </h1>
    <p className="hidden md:block text-sm md:text-md lg:text-lg 2xl:text-xl text-neutral-300 leading-relaxed font-light border-l-4 border-yellow-600 pl-4 text-wrap">
      {t("hero.desc")}
    </p>
  </motion.div>

  {/* Right: Portrait */}
  <motion.div
    className="w-[80%] md:w-[50%] lg:w-[40%] xl:w-[19%] max-w-[800px] mx-auto md:mx-0 relative"
    variants={imageWrapperVariant}
    initial="hidden"
    animate="visible"
    {...(reduce && { transition: { duration: 0 } })}
  >
    <div className="rounded-md bg-gradient-to-br from-[#a97458] via-[#8B5E3C] to-[#5c3a22] p-[6px]">
      <motion.div
        className="bg-white p-3 rounded-md"
        whileHover={!reduce ? { scale: 1.03 } : {}}
        whileTap={!reduce ? { scale: 0.97 } : {}}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      >
        <div className="aspect-[2/3] rounded-md overflow-hidden">
          <img
            src="assets/hero.png"
            alt="Hero Portrait"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-3 text-center text-neutral-700 text-sm md:text-base italic border-t border-gray-300 pt-3">
          “The Digital Artisan”  
          <br />
          Portrait by Arzu, 2025
        </div>
      </motion.div>
    </div>
  </motion.div>
</section>

  );
};

export default Hero;

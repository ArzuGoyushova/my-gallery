import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";

const bioVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 15, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const About = () => {
  const { t } = useTranslation();
  const reduce = useReducedMotion();

  const categories = [
    { titleKey: "about.titles.title1", itemsKey: "about.items.title1" },
    { titleKey: "about.titles.title2", itemsKey: "about.items.title2" },
    { titleKey: "about.titles.title3", itemsKey: "about.items.title3" },
    { titleKey: "about.titles.title4", itemsKey: "about.items.title4" },
  ];

  return (
    <section
      id="about"
      className="w-screen md:h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-24 py-16 text-white md:shrink-0"
    >
      {/* Left Side: Short Bio */}
      <motion.div
        className="md:w-1/2 max-w-xl mb-4"
        variants={bioVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        {...(reduce && { transition: { duration: 0 } })}
      >
        <h2 className="text-base xl:text-3xl 2xl:text-7xl hidden md:block text-base  font-serif text-yellow-400 mb-4">
          {t("about.intro.curator")}
        </h2>
        <p className="text-sm md:text-base xl:text-lg 2xl:text-3xl hidden md:block text-wrap text-neutral-300 leading-relaxed border-l-4 border-yellow-600 pl-4">
          {t("about.intro.desc")}
        </p>
      </motion.div>

     <motion.div
  className="md:w-1/2 w-screen max-h-100 md:max-h-full md:overflow-y-auto py-4 md:overflow-visible mb-8 md:mb-0 grid grid-cols-2 gap-y-4 md:px-12 justify-items-center"
  variants={containerVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  {categories.map(({ titleKey, itemsKey }, i) => {
    const items = t(itemsKey, { returnObjects: true }) || [];
    return (
      <motion.div
        key={titleKey}
        className={`relative bg-white text-yellow-900 
          w-40 sm:w-44 md:w-52 lg:w-56 xl:w-60 2xl:w-72
          px-3 sm:px-4 py-2 sm:py-3
          rounded-md shadow-lg border border-yellow-300 shrink-0
          ${i % 2 === 0 ? "rotate-[-2deg]" : "rotate-[1.5deg]"}`}
        variants={cardVariant}
        whileHover={!reduce ? { scale: 1.03 } : {}}
        whileTap={!reduce ? { scale: 0.97 } : {}}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
      >
        {/* Pin */}
        <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-3 sm:w-4 h-3 sm:h-4 bg-yellow-600 rounded-full shadow-md z-10" />

        {/* Title */}
        <h4 className="text-xs sm:text-sm md:text-base 2xl:text-lg font-bold text-yellow-700 mb-2">
          {t(titleKey)}
        </h4>

        {/* List */}
        <ul className="space-y-0.5 sm:space-y-1 text-xs sm:text-sm md:text-base xl:text-base">
          {Array.isArray(items) &&
            items.map((item) => (
              <li
                key={item}
                className="before:content-['•'] before:mr-1 md:before:mr-2 before:text-yellow-500"
              >
                {item}
              </li>
            ))}
        </ul>
      </motion.div>
    );
  })}
</motion.div>

    </section>
  );
};

export default About;

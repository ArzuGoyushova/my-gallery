import { FaSearch } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const WebsiteManagement = () => {
  const { t } = useTranslation();
  const reduce = useReducedMotion();

  const searchResults = [
    {
      keyword: "uşaqlar üçün IT kursu",
      title: "JET School | Uşaqlar üçün IT kursları, Proqramlaşdırma kursları!",
      url: "jetschool.az/az",
      link: "https://www.google.com/search?q=u%C5%9Faqlar+%C3%BC%C3%A7%C3%BCn+it+kursu&oq=...",
      place: "1-2",
    },
    {
      keyword: "uşaqlar üçün proqramlaşdırma",
      title: "JET School | Uşaqlar üçün IT kursları, Proqramlaşdırma kursları!",
      url: "jetschool.az/az",
      link: "https://www.google.com/search?q=u%C5%9Faqlar+%C3%BC%C3%A7%C3%BCn+proqramla%C5%9F...",
      place: "1-2",
    },
    {
      keyword: "scratch nədir",
      title: "Scratch nədir? Uşaqlar üçün Proqramlaşdırma Dünyasında İnqilab",
      url: "jetschool.az/az/news/scratch-nedir-usaqlar-ucun-...",
      link: "https://www.google.com/search?q=scratch+n%C9%99dir&sca_esv=...",
      place: "2-3",
    },
  ];

  return (
    <section
      id="websiteManagement"
      className=" w-full pt-6 px-4 sm:px-6 md:px-12 mt-4 lg:px-20 text-white shrink-0"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-[1.75rem] sm:text-[2.5rem] md:text-[3.6rem] font-bold text-yellow-400 mb-2">
          {t("website.title")}
        </h1>

        {/* Overview */}
        <div className="mb-6 max-w-3xl">
          <p className="text-gray-300 text-sm md:text-base lg:text-lg xl:text-xl text-wrap">{t("website.desc")}</p>
          <p className="text-yellow-300 mt-2 text-sm md:text-base lg:text-lg xl:text-xl underline">
            <a href="https://jetschool.az" target="_blank" rel="noreferrer">
              {t("website.visit")}
            </a>
          </p>
        </div>
      </motion.div>

      {/* SEO Search Result Showcase */}
      <motion.div
        className="space-y-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="flex flex-col sm:items-center md:items-start gap-2"
          variants={fadeUp}
        >
          <h2 className="md:text-base lg:text-lg xl:text-2xl text-yellow-300 flex items-center gap-2">
            <FaSearch /> {t("website.google")}
          </h2>
          <p className="text-sm md:text-base lg:text-lg  text-gray-400 sm:ml-4 display:block">
            {t("website.google-desc")}
          </p>
        </motion.div>

        <div className="space-y-4">
          {searchResults.map((result, i) => (
            <motion.div
              key={i}
              className="bg-neutral-800 border border-yellow-500 rounded-md p-4 shadow-md flex flex-col sm:flex-row justify-between gap-3 w-full"
              variants={fadeUp}
              whileHover={!reduce ? { scale: 1.02 } : {}}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
            >
              {/* Left side */}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-400 break-words">
                  🔍 <span className="italic">"{result.keyword}"</span>
                </p>
                <p className="text-sm md:text-base lg:text-lg xl:text-xl text-blue-400 font-medium truncate">
                  {result.title}
                </p>
                <p className="text-sm text-green-400 truncate">{result.url}</p>
              </div>

              {/* Right side */}
              <div className="mt-2 sm:mt-0 flex flex-col items-start sm:items-end gap-1">
                <p className="text-sm md:text-base lg:text-lg  text-yellow-300 font-semibold whitespace-nowrap">
                  📍 {t("website.rank")} #{result.place}
                </p>
                <a
                  href={result.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-300 underline hover:text-blue-400 whitespace-nowrap"
                >
                  {t("website.google-check")}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WebsiteManagement;

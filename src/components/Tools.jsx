import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.2,
      },
    },
  ],
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Tools = () => {
  const { t } = useTranslation();
  const reduce = useReducedMotion();

  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const tools = [
    { name: "Google Analytics", icon: "📝" },
    { name: "Notion", icon: "📒" },
    { name: "Google Docs", icon: "📄" },
    { name: "Trello", icon: "🗂️" },
    { name: "Ahrefs / SEMrush", icon: "🔍" },
    { name: "Google Search Console", icon: "📈" },
    { name: "Meta Tag Analyzer", icon: "🔎" },
    { name: "Meta Business Suite", icon: "📱" },
    { name: "ChatGPT / AI Tools", icon: "🤖" },
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "📜" },
    { name: "React", icon: "⚛️" },
    { name: "Git & GitHub", icon: "🔧" },
    { name: "Figma", icon: "📐" },
    { name: "Canva", icon: "🖌️" },
  ];

  const certificates = [
    {
      title: "Fundamentals of Marketing",
      provider: "Google",
      link: "#",
      image: "assets/certs/fund.jpg",
    },
    {
      title: "SEO",
      provider: "Hubspot",
      link: "#",
      image: "assets/certs/hubspot-seo.png",
    },
     {
      title: "Content Marketing",
      provider: "Hubspot",
      link: "#",
      image: "assets/certs/hub-content.jpeg",
    },
    {
      title: "Content Marketing",
      provider: "Semrush",
      link: "#",
      image: "assets/certs/semrush-content.jpg",
    },
    {
      title: "Lead Generation",
      provider: "Semrush",
      link: "#",
      image: "assets/certs/semrush-leads.jpg",
    },
    {
      title: "Emoji Marketing",
      provider: "Semrush",
      link: "#",
      image: "assets/certs/semrush-emoji.jpg",
    },
    {
      title: "Google Analytics",
      provider: "Google",
      link: "#",
      image: "assets/certs/google-analytics.jpg",
    }
  ];

  return (
    <section id="tools" className="min-h-screen w-screen shrink-0 px-10 py-16 text-white">
      <motion.h1
        className="md:text-[3.6rem] text-[2rem] font-bold text-yellow-400 mb-4 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {t("tools.title")}
      </motion.h1>

      <motion.div
        className="flex flex-col md:flex-row gap-4"
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* TOOLS SECTION */}
        <motion.div className="md:w-1/3 w-full" variants={fadeUp}>
          <h2 className="text-xl lg:text-3xl xl:text-5xl text-yellow-300 mb-2">{t("tools.tool")}</h2>
          <div className="flex flex-wrap gap-2 ">
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                className="bg-yellow-100 text-black px-4 py-2 rounded-lg shadow-md text-sm md:text-base lg:text-lg xl:text-xl flex items-center gap-2"
                whileHover={!reduce ? { scale: 1.05 } : {}}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
              >
                <span>{tool.icon}</span>
                <span>{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CERTIFICATES */}
       <motion.div className="md:w-2/3 w-full" variants={fadeUp}>
  <h2 className="text-2xl text-yellow-300 mb-6">🎓 {t("tools.cert")}</h2>
  <Slider {...sliderSettings} className="certificates-slider">
    {certificates.map((cert, i) => (
      <motion.div
        key={i}
        onClick={() => openModal(cert)}
        className="cursor-pointer bg-neutral-800 border border-yellow-500 rounded-lg p-3 shadow-md hover:bg-neutral-700 transition flex flex-col justify-between"
        whileHover={!reduce ? { scale: 1.02 } : {}}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className="w-full h-[140px] mb-2">
          <img
            src={cert.image}
            alt={`${cert.title} Certificate`}
            className="w-full h-full object-cover rounded-md border border-yellow-400"
          />
        </div>
        <h3 className="font-semibold text-yellow-200 text-sm leading-tight line-clamp-2">
          {cert.title}
        </h3>
        <p className="text-xs text-gray-400">{cert.provider}</p>
        <button className="button-yellow mt-3 self-start">
          <span className="font-extrabold">{t("tools.click")}</span>
        </button>
      </motion.div>
    ))}
  </Slider>
</motion.div>

      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-start justify-center overflow-x-auto z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            <motion.div
              className="relative bg-neutral-900 text-white p-6 pt-10 rounded-xl h-[90vh] w-[90%] max-w-[500px] border border-yellow-400 shadow-lg mt-10 overflow-y-auto"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.25, ease: "easeOut" } }}
              exit={{ scale: 0.96, opacity: 0, transition: { duration: 0.2 } }}
            >
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center text-lg shadow hover:bg-yellow-400 transition"
                onClick={closeModal}
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Image */}
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="rounded-md w-full object-contain mb-4 border"
              />

              {/* Title & Description */}
              <h2 className="text-xl text-yellow-300 font-semibold">{selectedItem.title}</h2>
              <p className="text-sm text-gray-300 mt-1">{selectedItem.provider}</p>
              <p className="text-sm italic text-gray-400">{selectedItem.date}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Tools;

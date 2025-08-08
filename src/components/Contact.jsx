import { FaEnvelope, FaLinkedin, FaRegStickyNote, FaFileAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";

const Contact = () => {
  const { t } = useTranslation();
  const reduce = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.15, when: "beforeChildren" }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  const iconHover = reduce
    ? {}
    : {
        scale: 1.05,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      };

  return (
    <section
      id="contact"
      className="min-h-screen min-w-screen flex flex-col items-center py-18 px-6 text-white shrink-0"
    >
      <motion.h1
        className="md:text-[3.6rem] text-[2rem] font-bold text-yellow-400 mb-10"
        initial="hidden"
        animate="visible"
        variants={itemVariants}
      >
        📬{t("contact.title")}
      </motion.h1>

      <motion.div
        className="w-full max-w-5xl flex flex-col md:flex-row gap-10 items-center md:items-start bg-neutral-900 rounded-2xl shadow-lg p-8 border border-yellow-500"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Card */}
        <motion.div
          className="w-full md:w-1/3 bg-neutral-800 p-6 rounded-xl text-center border border-yellow-400 shadow-md"
          variants={itemVariants}
        >
          <img
            src="assets/contact/IMG_6221.png" 
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border border-yellow-300"
          />
          <h2 className="text-xl font-bold text-yellow-300 mb-1">
            {t("contact.name")}
          </h2>
          <p className="text-sm text-gray-400">{t("contact.job-title")}</p>
        </motion.div>

        {/* Right Side - Contact Info */}
        <motion.div
          className="w-full md:w-2/3"
          variants={itemVariants}
        >
          <p className="text-gray-300 mb-6 leading-relaxed text-wrap">
            {t("contact.desc1")}
          </p>

          <div className="space-y-5">
            {[ 
              { icon: FaEnvelope, href: "mailto:arzugoyushova16@gmail.com", text: "arzugoyushova16@gmail.com" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/arzugoyushova/", text: "linkedin.com/in/arzugoyushova" },
              { icon: FaRegStickyNote, href: "https://www.notion.so/Weekly-Blog-Planner-2349fcf27599801e9da9e3268d1a8238?source=copy_link", text: "notion.so/arzugoyushova" },
              { icon: FaFileAlt, href: "/cv.pdf", text: t("contact.CVbutton"), isFile: true }
            ].map(({ icon: Icon, href, text, isFile }, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4 group"
                whileHover={iconHover}
                whileTap={{ scale: 0.2 }}
              >
                <Icon className="text-yellow-300 text-xl" />
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 group-hover:underline"
                  {...(isFile ? { download: true } : {})}
                >
                  {text}
                </a>
              </motion.div>
            ))}
          </div>

          <p className="text-sm text-gray-500 italic mt-10">
            {t("contact.desc2")}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;

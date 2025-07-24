import {
  FaHome,
  FaUser,
  FaRegStickyNote,
  FaSitemap,
  FaTools,
  FaImages,
  FaTrophy,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const sections = [
  { id: "home", icon: <FaHome />, labelKey: "nav.home" },
  { id: "about", icon: <FaUser />, labelKey: "nav.about" },
  { id: "content", icon: <FaRegStickyNote />, labelKey: "nav.content" },
  { id: "websiteManagement", icon: <FaSitemap />, labelKey: "nav.websiteManagement" },
  { id: "tools", icon: <FaTools />, labelKey: "nav.tools" },
  { id: "designGallery", icon: <FaImages />, labelKey: "nav.designs" },
  { id: "achievements", icon: <FaTrophy />, labelKey: "nav.achievements" },
  { id: "contact", icon: <FaEnvelope />, labelKey: "nav.contact" },
];

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Language Switcher - always top left */}
      <div className="fixed top-2 left-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* Desktop Vertical Navbar */}
      <nav
        className="
          hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-40
          flex-col items-center gap-2
          bg-black/60 rounded-xl py-2
        "
      >
        {sections.map(({ id, icon, labelKey }) => (
          <a
            key={id}
            href={`#${id}`}
            className="group relative flex items-center justify-center text-white p-3 rounded-full hover:bg-black/70 transition"
          >
            <span className="text-2xl">{icon}</span>
            <span
              className="
                absolute left-12 whitespace-nowrap
                opacity-0 group-hover:opacity-100
                translate-x-2 group-hover:translate-x-0
                transition-all duration-300
                bg-black/80 text-white text-sm font-semibold
                px-3 py-1 rounded-md
              "
            >
              {t(labelKey)}
            </span>
          </a>
        ))}
      </nav>

      {/* Hamburger Button on Mobile */}
      <button
        className="fixed top-4 right-4 z-50 p-3 text-white bg-black/60 rounded-md md:hidden"
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Mobile Slide-out Menu */}
      <div
        className={`
          fixed top-0 right-0 h-full w-3/4 sm:w-2/5 bg-black z-40
          flex flex-col items-start pt-20 px-6 gap-6
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {sections.map(({ id, icon, labelKey }) => (
          <a
            key={id}
            href={`#${id}`}
            className="flex items-center gap-3 text-white text-lg hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)} 
          >
            <span>{icon}</span>
            <span>{t(labelKey)}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;

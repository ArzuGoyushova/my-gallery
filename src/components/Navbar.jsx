import {
  FaHome,
  FaUser,
  FaRegStickyNote,
  FaSitemap,
  FaTools,
  FaImages,
  FaTrophy,
  FaEnvelope,
} from "react-icons/fa";
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

  return (
    <>
      {/* Top-left Language Switcher */}
      <div className="fixed top-2 left-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* Vertical Navbar (center-left) */}
      <nav
        className="
          fixed left-4 top-1/2 -translate-y-1/2 z-40
          flex flex-col items-center gap-2
          bg-black/60 rounded-xl py-2
        "
      >
        {sections.map(({ id, icon, labelKey }) => (
          <a
            key={id}
            href={`#${id}`}
            className="
              group relative flex items-center justify-center
              text-white p-3 rounded-full hover:bg-black/70 transition
            "
          >
            <span className="text-2xl">{icon}</span>

            {/* Hover label to the right */}
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
    </>
  );
};

export default Navbar;

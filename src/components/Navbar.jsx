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
    <nav
      className=" border
        fixed bottom-4 z-50 flex
        md:left-4 md:top-1/2 md:bottom-auto md:-translate-y-1/2
        flex-col gap-2 bg-black/50 rounded-md
        w-full md:w-12
        items-center border h-screen md:h-auto
        px-2 py-2
      "
    >
      {/* Language Switcher */}
      <LanguageSwitcher />

      {/* Spacer */}
      <div className="hidden md:block h-4"></div>

      {/* Nav Links */}
      {sections.map(({ id, icon, labelKey }) => (
        <a
          key={id}
          href={`#${id}`}
          className=" border ms-10
            group flex items-start justify-start
            md:flex-row flex-col gap-2 text-white text-xl p-2 rounded-full
            md:hover:bg-black/50 transition-all duration-300
            whitespace-nowrap
          "
        >
          <span className="text-2xl">{icon}</span>
          <span
            className="
              bg-black/50 hidden md:inline-block
              opacity-0 md:group-hover:opacity-100
              translate-x-2 md:group-hover:translate-x-0
              transition-all duration-300
              px-2 py-1 rounded-md text-sm font-semibold text-white
            "
          >
            {t(labelKey)}
          </span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;

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

const sections = [
  { id: "home", icon: <FaHome />, label: "Home" },
  { id: "about", icon: <FaUser />, label: "About" },
  { id: "content", icon: <FaRegStickyNote />, label: "Content" },
  { id: "websiteManagement", icon: <FaSitemap />, label: "Website Management" },
  { id: "tools", icon: <FaTools />, label: "Tools" },
  { id: "designGallery", icon: <FaImages />, label: "Designs" },
  { id: "achievements", icon: <FaTrophy />, label: "Achievements" },
  { id: "contact", icon: <FaEnvelope />, label: "Contact" },
];

const Navbar = () => {
  return (
    <nav
      className="
        fixed bottom-4 z-50 flex
        md:left-4 md:top-1/2 md:bottom-auto md:-translate-y-1/2 md:-translate-x-0
        md:flex md:flex-col md:gap-4
       bg-black/50 md:w-10 w-full rounded-md
      "
    >
      {sections.map(({ id, icon, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="
            group flex items-center gap-2 text-white text-xl p-2 rounded-full
            md:hover:bg-black/50
            transition-all duration-300
            whitespace-nowrap
          "
        >
          <span className="text-2xl text-white">{icon}</span>
          <span
            className=" bg-black/50
              hidden md:inline-block
              opacity-0 md:group-hover:opacity-100
              translate-x-2 md:group-hover:translate-x-0
              transition-all duration-300
              px-2 py-1 rounded-md text-sm font-semibold text-white
            "
          >
            {label}
          </span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;

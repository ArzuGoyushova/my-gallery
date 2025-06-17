import { FaHome, FaSitemap, FaUser, FaRegStickyNote, FaTools, FaProjectDiagram, FaWrench, FaEnvelope } from 'react-icons/fa';

const sections = [
  { id: 'home', icon: <FaHome />, label: 'Home' },
  { id: 'about', icon: <FaUser />, label: 'About' },
  { id: 'content', icon: <FaRegStickyNote />, label: 'Content' },
  { id: 'websiteManagement', icon: <FaSitemap />, label: 'Website Management' },
  { id: 'services', icon: <FaTools />, label: 'Services' },
  { id: 'projects', icon: <FaProjectDiagram />, label: 'Projects' },
  { id: 'tools', icon: <FaWrench />, label: 'Tools' },
  { id: 'contact', icon: <FaEnvelope />, label: 'Contact' },
];

const Navbar = () => {
  return (
    <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 ">
      {sections.map(({ id, icon, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="group flex items-center gap-2 text-white text-xl p-2 rounded-full hover:bg-black/50 transition-all duration-300"
        >
          <span className="text-2xl text-white">{icon}</span>
          <span className="opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 px-2 py-1 rounded-md text-sm font-semibold text-white">
            {label}
          </span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;

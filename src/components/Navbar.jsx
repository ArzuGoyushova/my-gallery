const Navbar = () => {
  const sections = ['home', 'about', 'services', 'projects', 'tools', 'contact'];

  return (
    <nav className="fixed top-4 left-4 z-50 bg-white/20 backdrop-blur-md rounded-xl shadow-lg p-4">
      <ul className="space-y-2 text-sm font-medium text-white">
        {sections.map((id) => (
          <li key={id}>
            <a href={`#${id}`} className="hover:underline">
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

const Tools = () => {
  const tools = [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "📜" },
    { name: "React", icon: "⚛️" },
    { name: "Vue.js", icon: "🖼️" },
    { name: "Python", icon: "🐍" },
    { name: "Django", icon: "🌿" },
    { name: "Git & GitHub", icon: "🔧" },
    { name: "Figma", icon: "📐" },
    { name: "Power BI", icon: "📊" },
    { name: "WordPress", icon: "📝" },
  ];

  const certificates = [
    {
      title: "Fundamentals of Marketing",
      provider: "Google",
      date: "March 2025",
      link: "#", // replace with actual file/view link
    },
    {
      title: "SEO",
      provider: "Hubspot",
      date: "Jan 2024",
      link: "#",
    },
    {
      title: "Emoji Marketing",
      provider: "Semrush",
      date: "March 2023",
      link: "#",
    },
  ];

  return (
    <section className="min-h-screen w-screen shrink-0 p-10 text-white">
      <h1 className="text-3xl font-bold text-yellow-400 mb-10">Tools & Certificates</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Tools Section */}
        <div>
          <h2 className="text-2xl text-yellow-300 mb-4">🧰 Tools & Technologies</h2>
          <div className="flex flex-wrap gap-4">
            {tools.map((tool, i) => (
              <div
                key={i}
                className="bg-yellow-100 text-black px-4 py-2 rounded-lg shadow-md text-sm flex items-center gap-2 hover:scale-105 transition"
              >
                <span>{tool.icon}</span>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div>
          <h2 className="text-2xl text-yellow-300 mb-4">🎓 Certificates</h2>
          <div className="flex flex-col gap-4">
            {certificates.map((cert, i) => (
              <div
                key={i}
                className="bg-neutral-800 border border-yellow-500 rounded-lg p-4 shadow-md hover:bg-neutral-700 transition"
              >
                <h3 className="text-lg font-semibold text-yellow-200">{cert.title}</h3>
                <p className="text-sm text-gray-400">{cert.provider}</p>
                <p className="text-sm text-gray-500 italic">{cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-blue-300 underline mt-1 inline-block hover:text-blue-400"
                >
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;

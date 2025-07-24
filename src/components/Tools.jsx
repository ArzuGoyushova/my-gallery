import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Tools = () => {
  const { t } = useTranslation();
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
      image: "/src/assets/certs/semrush-emoji.jpg",
    },
    {
      title: "SEO",
      provider: "Hubspot",
      link: "#",
      image: "/src/assets/certs/hubspot-seo.png",
    },
    {
      title: "Content Marketing",
      provider: "Semrush",
      link: "#",
      image: "/src/assets/certs/semrush-content.jpg",
    },
       {
      title: "Lead Generation",
      provider: "Semrush",
      link: "#",
      image: "/src/assets/certs/semrush-leads.jpg",
    },
    {
      title: "Emoji Marketing",
      provider: "Semrush",
      link: "#",
      image: "/src/assets/certs/semrush-emoji.jpg",
    },
    {
      title: "Google Analytics",
      provider: "Google",
      link: "#",
      image: "/src/assets/certs/google-analytics.jpg",
    },
       {
      title: "Fundamentals of Marketing",
      provider: "Google",
      link: "#",
      image: "/src/assets/certs/semrush-emoji.jpg",
    },
    {
      title: "SEO",
      provider: "Hubspot",
      link: "#",
      image: "/src/assets/certs/semrush-leads.jpg",
    },
    {
      title: "Emoji Marketing",
      provider: "Semrush",
      link: "#",
      image: "/src/assets/certs/semrush-emoji.jpg",
    }
  ];

  return (
    <section id="tools" className="min-h-screen w-screen shrink-0 px-10 py-16 text-white">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">{t('tools.title')}</h1>
      <div className="flex gap-4">
        {/* TOOLS SECTION */}
        <div className="w-1/4">
          <h2 className="text-2xl text-yellow-300 mb-1">{t('tools.tool')}</h2>
          <div className="flex flex-wrap gap-2 max-w-[800px]">
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

        {/* CERTIFICATES SECTION */}
        <div className="w-3/4">
          <h2 className="text-2xl text-yellow-300 mb-2">🎓 {t('tools.cert')}</h2>
          <div className="flex gap-2 flex-wrap">
            {certificates.map((cert, i) => (
              <div
                key={i}
                onClick={() => openModal(cert)}
                className="cursor-pointer bg-neutral-800 min-w-[200px] max-w-[200px] border border-yellow-500 rounded-lg p-4 shadow-md hover:bg-neutral-700 transition"
              >
                <img
                  src={cert.image}
                  alt={`${cert.title} Certificate`}
                  className="w-full rounded-md mb-1 border border-yellow-400"
                />
                <h3 className="text-wrap font-semibold text-yellow-200">{cert.title}</h3>
                <p className="text-sm text-gray-400">{cert.provider}</p>
                 <button className="button-yellow">
  Click
</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-start justify-center overflow-x-auto z-50">
          <div className="relative bg-neutral-900 text-white p-6 pt-10 rounded-xl h-[90vh] w-[90%] max-w-[500px] border border-yellow-400 shadow-lg mt-10 overflow-y-auto">
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

            {/* Link */}
            <a
              href={selectedItem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-blue-400 hover:underline"
            >
              View Certificate ↗
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Tools;

import { useState } from "react";
import {  FaPlay } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Achievements = () => {
 const { t } = useTranslation();

  const items = [
    {
      title: `📹 ${t('achiev.head1')}`,
      description:
        `${t('achiev.desc1')}`,
      type: "video",
      media: "IGf9dnNxwY0",
      link: "https://www.youtube.com/shorts/IGf9dnNxwY0",
    },
    {
      title: `🎯 ${t('achiev.head2')}`,
      description:
        `${t('achiev.desc2')}`,
      type: "image",
      media: "/src/assets/designs/AI.png",
      link: "https://www.canva.com/design/your-banner-link",
    },
    {
      title: `🔍 ${t('achiev.head3')}`,
      description:
        `${t('achiev.desc3')}`,
      type: "image",
      media: "/src/assets/designs/seorank.png",
      link: "https://www.google.com/search?q=u%C5%9Faqlar+%C3%BC%C3%A7%C3%BCn+proqramla%C5%9Fd%C4%B1rma",
    },
  ];

  const [selectedMedia, setSelectedMedia] = useState(null);

  const openModal = (item) => setSelectedMedia(item);
  const closeModal = () => setSelectedMedia(null);

  return (
    <section id="achievements"  className="min-h-screen px-10 py-16 text-white min-w-screen shrink-0">
      <h1 className="text-4xl font-bold text-yellow-400 mb-12 text-center">
        🏆  {t('achiev.title')}
      </h1>

      <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto">
  {items.map((item, index) => (
    <div
      key={index}
      className="flex flex-col md:flex-row border border-yellow-500 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
    >
      {/* Left: Media */}
      <div
        className="relative w-full md:w-1/2 aspect-[9/16] md:aspect-auto md:h-auto cursor-pointer bg-black/30"
        onClick={() => openModal(item)}
      >
        {item.type === "video" ? (
          <>
            <img
              src={`https://img.youtube.com/vi/${item.media}/hqdefault.jpg`}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => openModal(item)}
              className="absolute top-1/2 left-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-yellow-300 text-black hover:scale-110 transition"
            >
              ▶
            </button>
          </>
        ) : (
          <img
            src={item.media}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Right: Info */}
      <div className="w-full text-wrap md:w-1/2 p-5 flex flex-col justify-between bg-neutral-900">
        <div>
          <h2 className="text-lg font-semibold text-yellow-300 mb-2">{item.title}</h2>
          <p className="text-sm text-gray-300 mb-3 leading-relaxed">
            {item.description}
          </p>
        </div>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 hover:underline mt-auto"
          >
            🔗 {t('achiev.button')} ↗
          </a>
        )}
      </div>
    </div>
  ))}
</div>


      {/* ✅ Modal (compatible with your previous one) */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white max-w-2xl w-full p-6 rounded-lg shadow-lg relative">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl"
              onClick={closeModal}
            >
              ✕
            </button>

            <h3 className="text-yellow-600 font-semibold text-lg mb-4">
              {selectedMedia.title}
            </h3>

            {selectedMedia.type === "video" ? (
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedMedia.media}?autoplay=1`}
                  title="YouTube video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            ) : (
              <img
                src={selectedMedia.media}
                alt={selectedMedia.title}
                className="mt-0 mx-auto w-2/3 rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
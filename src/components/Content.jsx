import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
  FaLinkedin,
  FaGlobe,
  FaPlay,
} from "react-icons/fa";
import { useState } from "react";

const Content = () => {
  const [selectedCaption, setSelectedCaption] = useState(null);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openCaptionModal = (caption) => {
    setSelectedCaption(caption);
    setSelectedVideoId(null);
    setModalType("caption");
    setIsModalOpen(true);
  };

  const openVideoModal = (videoId) => {
    setSelectedVideoId(videoId);
    setSelectedCaption(null);
    setModalType("video");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCaption(null);
    setSelectedVideoId(null);
    setModalType(null);
  };

  const captions = [
    "Caption lihakdjsakdgsakjhagdhsagdjhsa sjhakdsgjajdhsd hsagdjshadjshgajdhnk 1",
    "Caption link 2",
    "Caption link 3",
    "Caption link 4",
  ];

  const ideas = [
    "📦 Campaign: 'Unbox the Unexpected' — reveal concept with mystery packaging.",
    "🎯 Idea: 'Brand Archetypes Quiz' — funnel entry through a personality quiz.",
    "🎥 Video Series: 'Behind the Rebrand' — storytelling via transformation journey.",
    "🎯 Idea: 'Brand Archetypes Quiz' — funnel entry through a personality quiz.",
  ];

  const academyChannels = [
    { name: "Instagram", icon: <FaInstagram />, color: "text-pink-400" },
    { name: "Facebook", icon: <FaFacebookF />, color: "text-blue-600" },
    { name: "TikTok", icon: <FaTiktok />, color: "text-white" },
    { name: "YouTube", icon: <FaYoutube />, color: "text-red-500" },
    { name: "LinkedIn", icon: <FaLinkedin />, color: "text-blue-400" },
  ];

  const schoolChannels = [
    { name: "Instagram", icon: <FaInstagram />, color: "text-pink-400" },
    { name: "Facebook", icon: <FaFacebookF />, color: "text-blue-600" },
    { name: "TikTok", icon: <FaTiktok />, color: "text-white" },
    { name: "YouTube", icon: <FaYoutube />, color: "text-red-500" },
    { name: "Website", icon: <FaGlobe />, color: "text-yellow-400" },
  ];

  const videoData = [
    { id: "awILi7_vJW8", title: "Video 1" },
    { id: "G761b2qE5b0", title: "Video 2" },
    { id: "XTfqCbku_Qs", title: "Video 3" },
  ];

  return (
    <section id="content" className="flex w-[200vw] md:w-screen h-screen text-white">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white max-w-2xl w-full p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={closeModal}
            >
              ✕
            </button>

            {modalType === "caption" && selectedCaption && (
              <>
                <h3 className="text-lg font-semibold mb-4 text-yellow-500">Full Caption</h3>
                <p className="text-sm text-gray-800 whitespace-pre-line">{selectedCaption}</p>
              </>
            )}

            {modalType === "video" && selectedVideoId && (
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
                  title="YouTube video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="w-screen h-screen flex flex-col">
        {/* Top Half: Channels */}
        <div className="flex justify-center items-center h-1/3 relative z-10 gap-16 px-8">
          {/* JET Academy */}
          <div className="flex flex-col items-center">
            <div className="relative flex items-center animate-swing" style={{ transformOrigin: "top center" }}>
              <div className="bg-yellow-400 text-black font-bold text-sm tracking-wide px-6 py-2 rounded-l-md z-10">
                JET Academy
              </div>
              <div className="w-6 h-9 bg-yellow-400" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}></div>
            </div>
          </div>

          {/* Academy Channels */}
          <div className="flex gap-4">
            {academyChannels.map(({ icon, name, color }, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-px h-24 bg-yellow-300 animate-pulse" />
                <div
                  className={`w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center shadow-xl border border-yellow-400 animate-glow text-2xl ${color}`}
                >
                  {icon}
                </div>
                <p className="text-xs text-yellow-200 mt-1 font-light uppercase tracking-wider whitespace-nowrap">
                  {name}
                </p>
              </div>
            ))}
          </div>

          {/* JET School */}
          <div className="flex flex-col items-center">
            <div className="relative flex items-center animate-swing" style={{ transformOrigin: "top center" }}>
              <div className="bg-yellow-400 text-black font-bold text-sm tracking-wide px-6 py-2 rounded-l-md z-10">
                JET School
              </div>
              <div className="w-6 h-9 bg-yellow-400" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}></div>
            </div>
          </div>

          {/* School Channels */}
          <div className="flex gap-4">
            {schoolChannels.map(({ icon, name, color }, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-px h-24 bg-yellow-300 animate-pulse" />
                <div
                  className={`w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center shadow-xl border border-yellow-400 animate-glow text-2xl ${color}`}
                >
                  {icon}
                </div>
                <p className="text-xs text-yellow-200 mt-1 font-light uppercase tracking-wider whitespace-nowrap">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Half */}
        <div className="flex justify-center items-start h-2/3 relative z-10">
          <div className="flex gap-16 mt-8 overflow-x-auto">
            {/* Captions */}
            <div className="min-w-[25rem] p-6">
              <h2 className="text-2xl font-serif text-yellow-400 mb-4">Captions</h2>
              <div className="grid grid-cols-2 gap-4">
                {captions.map((text, i) => (
                  <div key={i} className="paper relative">
                    <p className="text-black/60 text-sm leading-snug line-clamp-2 pr-8">{text}</p>
                    <button className="absolute bottom-2 right-2" onClick={() => openCaptionModal(text)}>
                      Read more
                    </button>
                  </div>
                ))}
              </div>
            </div>

       <div className="min-w-[25rem] p-6">
  <h2 className="text-2xl font-serif text-yellow-400 mb-4">Video Scripts</h2>
  <div className="flex gap-4">
 {videoData.map((video) => {
  const thumbnail = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
  return (
    <div
      key={video.id}
    className="relative w-40 h-60 shadow-lg bg-gray-200 border"

    >
      {/* Background YouTube Thumbnail */}
      <img
        src={thumbnail}
        alt={video.title}
          className="w-full h-full object-cover block"
      />

      {/* Play Button */}
      <button
        onClick={() => openVideoModal(video.id)}
      className="absolute top-1/2 left-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-yellow-300 text-black hover:scale-110 transition"
    >
        <FaPlay />
      </button>
    </div>
  );
})}

  </div>
</div>


            {/* Content Ideas */}
            <div className="min-w-[25rem] p-6">
              <h2 className="text-2xl font-serif text-yellow-400 mb-4">Content Ideas</h2>
              <div className="grid grid-cols-2 gap-4">
                {ideas.map((text, i) => (
                  <div key={i} className="paper relative">
                    <p className="text-black/60 text-sm leading-snug line-clamp-2 pr-8">{text}</p>
                    <button className="absolute bottom-2 right-2" onClick={() => openCaptionModal(text)}>
                      Read more
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;

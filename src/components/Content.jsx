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

function openCaptionModal(text, link = null) {
  setSelectedCaption({ text, link });
  setModalType("caption");
  setIsModalOpen(true);
}
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
    {text:"IT Mühəndis kursumuzda təhsil tamamilə praktika əsaslıdır! 🔧\n\nBu videoda tələbələrimiz turniket sisteminin qurulması prosesini yerində öyrənirlər.\n\nMüəllimin dəstəyi ilə turniket açılır, daxili sistemlər yoxlanılır və kabel bağlantıları düzgün şəkildə qoşulur. 🧰\n\nBu cür real avadanlıq üzərində keçirilən praktiki dərslər, tələbələrimizin yalnız nəzəri bilik deyil, həm də peşəkar təcrübə qazanmasına şərait yaradır. 💡", link:"https://www.instagram.com/p/DKuQGHcNKBA/"},
    "Caption link 2",
    "Caption link 3",
    "Caption link 4",
  ];

const ideas = [
  {
  "text": "🦑 Slider İdeyası: OOP Konseptini Squid Game ilə İzah Etmək.\n\nOOP (Object-Oriented Programming) prinsiplərini vizual və əyləncəli şəkildə izah etmək üçün Squid Game serialından istifadə etdik. Hər bir əsas OOP prinsipi üçün serialdan uyğun bir simvol və ya səhnə seçərək, bu abstrakt anlayışları tələbələr üçün daha yadda qalan və aydın bir formaya gətirdik:\n\n Encapsulation (İnkapsulyasiya) — Oyuncuların şəxsi məlumatları və keçmişləri sanki \"gizlədilmişdi\". Hər kəs eyni oyun formasında olsa da, içəridə fərqli həyat hekayələri və motivasiyalar var idi. Bu, məlumatların qorunmasını simvollaşdırdı.\n\n Inheritance (İrsiyyət) — Squid Game-dəki oyunlar əvvəlki oyun versiyalarına əsaslanırdı, eynilə bir class-ın başqa bir class-dan xüsusiyyətləri miras alması kimi.\n\nPolymorphism (Polimorfizm) — Eyni oyun qaydaları olsa da, hər bir oyunçu bu qaydalara fərqli reaksiya verirdi. Bu da eyni interfeysə fərqli cavabların verilməsi ideyasını çatdırdı.\n\nAbstraction (Abstraksiya) — Oyunçular nə baş verdiyini tam anlamadan yalnız lazımi məlumatları alaraq hərəkət edirdilər. Bu, OOP-də kompleks detalların gizlədilməsi və yalnız lazım olan funksiyaların təqdim olunmasını simvolizə etdi.\n\nBu yanaşma yalnız OOP anlayışlarını sadələşdirmədi, həm də tələbələrdə maraq və təxəyyül yaratdı.",
 link: "https://www.instagram.com/p/DLkVh9nNrIc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
}
,
 {
  "text": "🐥 Əgər mən Duolingo-nun Marketinq komandasında olsaydım, aşağıdakı kreativ ideyaları təklif edərdim:\n\nAygün Kazımovanın S.O.S klipinin parodiyasını yaratmaq: Duolingo quşu ilə bu məşhur videonu yenidən canlandıraraq həm nostalji, həm də əyləncəli kontent təqdim etmək.\n\nDuo quşunu ikonik məkanlarda fotosessiyalara çıxarmaq: Məsələn, Crescent Mall, İçərişəhər və ya Flame Towers kimi tanınmış yerlərdə foto və video çəkilişlər.\n\nMəşhur “Mənə çay verərsən?” videosunun parodiyası: Duo quşunu bu səhnəyə daxil etməklə həm lokal mədəniyyəti vurğulamaq, həm də viral potensial yaratmaq.\n\n“Dünyanın ən hündür bayrağı” önündə çəkiliş: Milli qürur elementlərini yumorla birləşdirərək izləyicilərlə emosional bağ qurmaq.\n\nJet2 Holidays üslubunda, lakin Azərbaycanın küləyi ilə bağlı video: Duo quşu dincəlmək üçün Azərbaycana gəlir, küləyə qapılıb işinə qayıdır – həm əyləncəli, həm də brend mesajı daşıyan video konsept.\n\nBu ideyalar Duolingo-nun həm lokal auditoriya ilə əlaqəsini gücləndirər, həm də kreativ kontentlə yadda qalmasını təmin edərdi."
},

  { text: "🎥 Video Series: 'Behind the Rebrand' — storytelling via transformation journey." },
  { text: "🎯 Idea: 'Brand Archetypes Quiz' — funnel entry through a personality quiz.", link: "https://instagram.com/p/xyz456" },
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
              className="button-yellow absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={closeModal}
            >
              ✕
            </button>
{modalType === "caption" && selectedCaption && (
  <>
    <h3 className="text-lg font-semibold mb-4 text-yellow-500">Full Caption</h3>
    <p className="text-sm text-gray-800 whitespace-pre-line mb-4">{selectedCaption.text}</p>

    {selectedCaption.link && (
      <a
        href={selectedCaption.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        View Instagram Post
      </a>
    )}
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
                {captions.map((caption, i) => {
                   const text = typeof caption === "string" ? caption : caption.text;
      const link = typeof caption === "object" && caption.link;
      return(
                  <div key={i} className="paper relative">
          <p className="text-black/60 text-sm leading-snug line-clamp-2 pr-8">{text}</p>
          <div className="absolute bottom-2 right-2 flex gap-2">
            <button className="button-yellow" onClick={() => openCaptionModal(text, link)}>
  Read more
</button>
          
          </div>
        </div>
                )})}
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
      className="button-yellow absolute top-1/2 left-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-yellow-300 text-black hover:scale-110 transition"
    >
        <FaPlay />
      </button>
    </div>
  );
})}

  </div>
</div>


          <div className="min-w-[25rem] p-6">
  <h2 className="text-2xl font-serif text-yellow-400 mb-4">Content Ideas</h2>
  <div className="grid grid-cols-2 gap-4 text-wrap">
    {ideas.map((idea, i) => {
      const text = typeof idea === "string" ? idea : idea.text;
      const link = typeof idea === "object" && idea.link;
      return (
        <div key={i} className="paper relative">
          <p className="text-black/60 text-sm leading-snug line-clamp-2 pr-8">{text}</p>
          <div className="absolute bottom-2 right-2 flex gap-2">
            <button className="button-yellow" onClick={() => openCaptionModal(text, link)}>
  Read more
</button>
          
          </div>
        </div>
      );
    })}
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
  FaLinkedin,
  FaGlobe,
  FaPlay,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const scaleHover = !0;

const Content = () => {
  const { t } = useTranslation();
  const reduce = useReducedMotion();

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
    {
      text: "Tom artıq Jerry-ni qovmur — indi hakerlərin izinə düşüb! 🐭💻\n\Dünya Pişiklər Günü münasibətilə uşaqlığımızın məşhur pişik qəhrəmanlarının texnologiya sahələrindəki “karyera dəyişikliklərini” sizə təqdim edirik. 😹\n\Bəs sizin ən sevdiyiniz pişik qəhrəman kimdir? Rəy bölməsində bizimlə paylaşın! 💬🐾",
      link: "https://www.instagram.com/p/DKuQGHcNKBA/",
    },
    {
      text: "Tarixi memarlığa rəqəmsal baxış! 🏛\n\nİstedadlı tələbəmiz Hüseynin Tinkercad-də hazırladığı Kolizey layihəsi ilə tanış olun! ⚔\n\nBu videoda o bizə həm öz 3D modelini nümayiş etdirir, həm də ilham mənbəyindən və layihə üzərində necə çalışdığından danışır. 📹",
      link: "https://www.instagram.com/reel/DM2ujuWtnQF/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
    },
    {
      text: "Texnologiya tarixini dəyişən qadınlar! 💻🚀💡\n\nOnların kəşfləri Wi-Fi, süni intellekt və hətta Aya uçuşların əsasında duran texnologiyaların inkişafına töhfə verib! 💪✨\n\nİstər texnologiya, istərsə də digər sahələrdə iz qoyan bütün qadınları təbrik edir, onlara xoşbəxtlik, uğur, güc və sağlamlıq arzulayırıq! 💐\n\nTexnologiya sahəsində çalışan, bu sahəyə yeni addım atan və ya bu yolda ilk addımlarını atmağı düşünən bütün qadınları dəstəkləyir və onlarla birlikdə daha parlaq gələcək qurmaqdan qürur duyuruq! 💻✨\n\n8 Mart – Beynəlxalq Qadınlar Gününüz mübarək! 🌸",
      link: "https://www.instagram.com/p/DG75dTGIoQt/?img_index=2&igsh=MWZkNmY5cGpyaW1pMQ%3D%3D",
    },
    {
      text: "BUG BOUNTY DÜNYASINA GİRİŞ! 🔎💰\n\nEtik hakerlik bacarıqlarınızı gəlirə çevirmək istəyirsiniz? 🤑💡 Bug bounty proqramları sizə kiber təhlükəsizlik sahəsində həm inkişaf etmək, həm də mükafatlar qazanmaq imkanı verir! 🚀\n\nBu slaydlarda maksimum gəlir əldə etmə strategiyalarını öyrənəcəksiniz:\n\n🛠️ Əsas bacarıqlar və metodlar \n\n🎯 Az araşdırılan sahələrdə ixtisaslaşmaq \n\n📊 Alətlər və avtomatlaşdırma \n\nKibertəhlükəsizlik kursu haqqında ətraflı məlumat almaq üçün bizə müraciət edin!",
      link: "https://www.instagram.com/p/DHx-IO9IdeM/?igsh=YzdheDIxYWNpOXYy",
    },
  ];

  const ideas = [
    {
      text: "🦑 Slider İdeyası: OOP Konseptini Squid Game ilə İzah Etmək.\n\nOOP (Object-Oriented Programming) prinsiplərini vizual və əyləncəli şəkildə izah etmək üçün Squid Game serialından istifadə etdik. Hər bir əsas OOP prinsipi üçün serialdan uyğun bir simvol və ya səhnə seçərək, bu abstrakt anlayışları tələbələr üçün daha yadda qalan və aydın bir formaya gətirdik:\n\n Encapsulation (İnkapsulyasiya) — Oyuncuların şəxsi məlumatları və keçmişləri sanki \"gizlədilmişdi\". Hər kəs eyni oyun formasında olsa da, içəridə fərqli həyat hekayələri və motivasiyalar var idi. Bu, məlumatların qorunmasını simvollaşdırdı.\n\n Inheritance (İrsiyyət) — Squid Game-dəki oyunlar əvvəlki oyun versiyalarına əsaslanırdı, eynilə bir class-ın başqa bir class-dan xüsusiyyətləri miras alması kimi.\n\nPolymorphism (Polimorfizm) — Eyni oyun qaydaları olsa da, hər bir oyunçu bu qaydalara fərqli reaksiya verirdi. Bu da eyni interfeysə fərqli cavabların verilməsi ideyasını çatdırdı.\n\nAbstraction (Abstraksiya) — Oyunçular nə baş verdiyini tam anlamadan yalnız lazımi məlumatları alaraq hərəkət edirdilər. Bu, OOP-də kompleks detalların gizlədilməsi və yalnız lazım olan funksiyaların təqdim olunmasını simvolizə etdi.\n\nBu yanaşma yalnız OOP anlayışlarını sadələşdirmədi, həm də tələbələrdə maraq və təxəyyül yaratdı.",
      link: "https://www.instagram.com/p/DLkVh9nNrIc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      text: "🐥 Əgər mən Duolingo-nun Marketinq komandasında olsaydım, aşağıdakı kreativ ideyaları təklif edərdim:\n\nAygün Kazımovanın S.O.S klipinin parodiyasını yaratmaq: Duolingo quşu ilə bu məşhur videonu yenidən canlandıraraq həm nostalji, həm də əyləncəli kontent təqdim etmək.\n\nDuo quşunu ikonik məkanlarda fotosessiyalara çıxarmaq: Məsələn, Crescent Mall, İçərişəhər və ya Flame Towers kimi tanınmış yerlərdə foto və video çəkilişlər.\n\nMəşhur “Mənə çay verərsən?” videosunun parodiyası: Duo quşunu bu səhnəyə daxil etməklə həm lokal mədəniyyəti vurğulamaq, həm də viral potensial yaratmaq.\n\n“Dünyanın ən hündür bayrağı” önündə çəkiliş: Milli qürur elementlərini yumorla birləşdirərək izləyicilərlə emosional bağ qurmaq.",
    },
    { text: "📹 Informativ video ideyası: Authentication və Authorization - real həyat nümunəsi ilə izahı:\n\nVizual Konsept:\nŞagird və ya nümayişçi qapı qarşısında dayanır.\n\nAuthentication: Mühafizəçi şəxsiyyət vəsiqəsini tələb edir və yoxlayır. (Kim olduğunu təsdiqləyir)\n\nAuthorization: Binaya daxil olduqdan sonra fərqli qapılar göstərilir. Eyni açarla bəzilərini açmaq mümkündür, bəzilərini yox. (Hansı resurslara icazəsi olduğunu göstərir)\n\nMesaj:\nAuthentication = “Bu insan kimdir?”\nAuthorization = “Bu insan nə edə bilər?”\nİkisi birlikdə sistemin təhlükəsizliyini təmin edir.\n\nPortfolio üçün Qeyd: Bu ideya texniki anlayışları real vizuallaşdıraraq izah etməyə imkan verir və praktik nümayişlə yadda qalan təqdimat yaradır." },
    {
      text: "🎯 Idea: 'Brand Archetypes Quiz' — funnel entry through a personality quiz.",
      link: "https://instagram.com/p/xyz456",
    },
  ];

  const academyChannels = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/jetacademy.az/",
      icon: <FaInstagram />,
      color: "text-pink-400",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/jetacademy.az",
      icon: <FaFacebookF />,
      color: "text-blue-600",
    },
    {
      name: "TikTok",
      link: "https://www.tiktok.com/@jetacademy.az",
      icon: <FaTiktok />,
      color: "text-white",
    },
    {
      name: "YouTube",
      link: "https://www.youtube.com/@jetacademy-az",
      icon: <FaYoutube />,
      color: "text-red-500",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/jetacademy-az/",
      icon: <FaLinkedin />,
      color: "text-blue-400",
    },
  ];

  const schoolChannels = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/jet.school.baku/",
      icon: <FaInstagram />,
      color: "text-pink-400",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/jetschool.az",
      icon: <FaFacebookF />,
      color: "text-blue-600",
    },
    {
      name: "TikTok",
      link: "https://www.tiktok.com/@jetschoolbaku",
      icon: <FaTiktok />,
      color: "text-white",
    },
    {
      name: "YouTube",
      link: "https://www.youtube.com/@jetschoolbaku",
      icon: <FaYoutube />,
      color: "text-red-500",
    },
    {
      name: "Website",
      link: "https://jetschool.az",
      icon: <FaGlobe />,
      color: "text-yellow-400",
    },
  ];

  const videoData = [
    { id: "awILi7_vJW8", title: "Video 1" },
    { id: "G761b2qE5b0", title: "Video 2" },
    { id: "XTfqCbku_Qs", title: "Video 3" },
  ];

  return (
    <section id="content" className="flex flex-col w-full md:h-screen h-auto text-white">
      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
         <motion.div
  className="bg-white max-w-2xl w-full p-6 rounded-lg shadow-lg relative
             max-h-[90vh] overflow-y-auto"
  initial={{ scale: 0.94, opacity: 0 }}
  animate={{ scale: 1, opacity: 1, transition: { duration: 0.25, ease: "easeOut" } }}
  exit={{ scale: 0.96, opacity: 0, transition: { duration: 0.2 } }}
>
              <button
                className="button-yellow absolute top-2 right-2 text-gray-500 hover:text-black"
                onClick={closeModal}
                aria-label="Close modal"
              >
                ✕
              </button>

              {modalType === "caption" && selectedCaption && (
                <>
                  <h3 className="text-lg font-semibold mb-4 text-yellow-500">
                    {t("content.full-version")}
                  </h3>
                  <p className="text-sm text-gray-800 whitespace-pre-line mb-4">
                    {selectedCaption.text}
                  </p>

                  {selectedCaption.link && (
                    <a
                      href={selectedCaption.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                      {t("content.ins-post")}
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Half: Channels */}
      <motion.div
        className="flex flex-col md:flex-row flex-wrap justify-center md:items-start items-center relative z-10 gap-8 px-4 md:px-8 py-6"
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* JET Academy */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-around md:w-2/5"
          variants={fadeUp}
        >
          <div
            className="relative flex items-center animate-swing"
            style={{ transformOrigin: "top center" }}
          >
            <div className="bg-yellow-400 text-black font-bold text-sm tracking-wide px-5 py-2 md:rounded-l-md z-10 mb-4 md:mb-0">
              JET Academy
            </div>
            <div
              className="w-6 h-9 bg-yellow-400 hidden md:block"
              style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
            ></div>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mt-2">
            {academyChannels.map(({ icon, name, color, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
                aria-label={name}
                whileHover={!reduce ? { scale: 1.07 } : {}}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
              >
                <div className="w-px h-16 bg-yellow-300 mb-1 hidden md:block" />
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-neutral-800 flex items-center justify-center shadow-xl border border-yellow-400 animate-glow text-2xl transition-transform duration-300 group-hover:scale-110 ${color}`}
                >
                  {icon}
                </div>
                <p className="text-[10px] text-yellow-200 mt-1 font-light uppercase tracking-wider whitespace-nowrap group-hover:underline">
                  {name}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* JET School */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-around md:w-2/5"
          variants={fadeUp}
        >
          <div
            className="relative flex items-center animate-swing"
            style={{ transformOrigin: "top center" }}
          >
            <div className="bg-yellow-400 text-black font-bold text-sm tracking-wide px-5 py-2 md:rounded-l-md z-10 mb-4 md:mb-0">
              JET School
            </div>
            <div
              className="w-6 h-9 bg-yellow-400 hidden md:block"
              style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
            ></div>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mt-2">
            {schoolChannels.map(({ icon, name, color, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex flex-col items-center group"
                whileHover={!reduce ? { scale: 1.07 } : {}}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
              >
                <div className="w-px h-16 bg-yellow-300 mb-1 hidden md:block" />
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-neutral-800 flex items-center justify-center shadow-xl border border-yellow-400 animate-glow text-2xl transition-transform duration-300 group-hover:scale-110 ${color}`}
                >
                  {icon}
                </div>
                <p className="mt-1 text-[10px] text-yellow-200 mt-1 font-light uppercase tracking-wider whitespace-nowrap group-hover:underline">
                  {name}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Half */}
      <motion.div
        className="flex flex-col xl:mt-20 lg:flex-row gap-8 px-4 md:px-8 py-4 relative z-10"
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Captions panel */}
        <motion.div
          className="flex-shrink-0 w-full lg:w-1/3  min-w-0 max-w-xl p-6"
          variants={fadeUp}
        >
          <h2 className="text-3xl 2xl:text-5xl font-serif text-yellow-400 mb-4">
            {t("content.caption")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {captions.map((caption, i) => {
              const text = typeof caption === "string" ? caption : caption.text;
              const link = typeof caption === "object" && caption.link;
              return (
                <motion.div
                  key={i}
                  className="paper relative"
                  variants={fadeUp}
                  whileHover={!reduce ? { scale: 1.02 } : {}}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                >
                  <p className="text-black/60 text-sm md:text-base 2xl:text-xl leading-snug text-wrap line-clamp-2 pr-8">
                    {text}
                  </p>
                  <div className="absolute bottom-2 right-2 flex gap-2">
                    <button
                      className="button-yellow text-sm md:text-base lg:text-lg xl:text-xl"
                      onClick={() => openCaptionModal(text, link)}
                    >
                      {t("content.read-more")}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Video scripts panel */}
        <motion.div
          className="flex-shrink-0 w-full lg:w-1/3 min-w-0 max-w-xl p-6"
          variants={fadeUp}
        >
          <h2 className="text-3xl 2xl:text-5xl font-serif text-yellow-400 mb-4">
            {t("content.video-scripts")}
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {videoData.map((video) => {
              const thumbnail = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
              return (
                <motion.div
                  key={video.id}
                  className="relative w-1/3 sm:w-40 h-56 sm:h-60 shadow-lg bg-gray-200 border flex-shrink-0 rounded-md overflow-hidden"
                  variants={fadeUp}
                  whileHover={!reduce ? { scale: 1.03 } : {}}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                >
                  <img
                    src={thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover block"
                  />
                  <button
                    onClick={() => openVideoModal(video.id)}
                    className="button-yellow absolute top-1/2 left-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-yellow-300 text-black hover:scale-110 transition"
                    aria-label={`Play ${video.title}`}
                  >
                    <FaPlay />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Content ideas panel */}
        <motion.div
          className="flex-shrink-0 w-full lg:w-1/3 min-w-0 max-w-xl p-6"
          variants={fadeUp}
        >
          <h2 className="text-3xl 2xl:text-5xl font-serif text-yellow-400 mb-4">
            {t("content.content-ideas")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ideas.map((idea, i) => {
              const text = typeof idea === "string" ? idea : idea.text;
              const link = typeof idea === "object" && idea.link;
              return (
                <motion.div
                  key={i}
                  className="paper relative"
                  variants={fadeUp}
                  whileHover={!reduce ? { scale: 1.02 } : {}}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                >
                  <p className="text-black/60 text-sm md:text-base 2xl:text-xl leading-snug text-wrap line-clamp-2 pr-8">
                    {text}
                  </p>
                  <div className="absolute bottom-2 right-2 flex gap-2">
                    <button
                      className="button-yellow"
                      onClick={() => openCaptionModal(text, link)}
                    >
                      {t("content.read-more")}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Content;

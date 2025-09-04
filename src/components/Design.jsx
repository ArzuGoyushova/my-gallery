import { useState } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const DesignGallery = () => {
  const { t } = useTranslation();
  const reduce = useReducedMotion();

  const topDesigns = [
    {
      title: "Süni İntellekt Mühəndisliyi",
      image: "assets/designs/AI.png",
      link: "https://www.canva.com/design/DAGeOl1c6pc/y02kiVpXShmWKWcd8y1XoA/edit?utm_content=DAGeOl1c6pc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      description:
        "AI kursu üçün hazırlanmış reklam banneri. Kursla bağlı əsas və diqqətçəkən məqamlar vizualda ön plana çıxarılıb. Kampaniya nəticəsində yüksək keyfiyyətli müraciətlər əldə olunub.",
    },
    {
      title: "Travel to China",
      image: "assets/designs/Travel.png",
      link: "https://www.canva.com/design/DAGrdJ8EunE/TiRyVdKaC9gtSWSN0_kYTQ/edit?utm_content=DAGrdJ8EunE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      description:
        "Çin səfəri ilə bağlı kurs elanını təqdim etmək üçün sadə və diqqətçəkən tur banneri hazırlanmışdır. Dizayn Pinterest-də başqa bir dizayndan ilhamlanıb.",
    },
    {
      title: "Rus sektoru üçün banner",
      image: "assets/designs/schoolrussian.png",
      link: "https://www.canva.com/design/your-link-here",
      description:
        "JET School-un rus sektoru üçün hazırlanmış reklam banneri. Kursla bağlı əsas və diqqətçəkən məqamlar vizualda ön plana çıxarılıb. Kampaniya nəticəsində yüksək keyfiyyətli müraciətlər əldə olunub.",
    },
    {
      title: "Python Əsasları - Açıq Dərs",
      image: "assets/designs/schoolpython.png",
      link: "https://www.canva.com/design/DAGrc8VmdZE/MfkakrNdRiUtk3ff3ohB4w/edit?utm_content=DAGrc8VmdZE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      description:
        "Python ilə Back-End Proqramlaşdırma kursunun açıq dərsi üçün hazırlanmış banner.",
    },
    {
      title: "'Fərqi Yoxdu' Coffee Shop",
      image: "assets/designs/Fərqi yoxdu ad.png",
      link: "https://www.canva.com/design/DAGr1TAeEis/PQb5kA5vRjrGS5VnxjKEOw/view?utm_content=DAGr1TAeEis&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha85e7a0086",
      description: `Layihə adı: 
Fərqi Yoxdu Coffee Shop – Outdoor Banner Dizaynı 

İdeya və Konsept:
“Fərqi Yoxdu” adı gündəlik danışıqda çox istifadə olunan “mənə fərqi yoxdu” ifadəsindən ilhamlanaraq seçilmişdir. İnsanlar nə vaxt harasa getmək, nə yemək və ya nə içmək barədə qərar verə bilmirlərsə, bu ifadəni işlədirlər. Mən də bu qərarsızlığa yumorla yanaşaraq onu bir brend kimliyinə çevirdim. Kafe, məhz belə insanlar üçün rahat və qərarsızlığın “qərarlı ünvanı” olur.

Vizual Elementlər:
Dizaynda istifadə etdiyim pişik obrazı sakitliyi, müstəqilliyi və 'mənə nə' ifadəsini təmsil edir. Pişiklər də insanlar kimi öz istədikləri vaxtda, öz istədikləri şəkildə hərəkət edirlər — bu da “Fərqi Yoxdu” konsepti ilə tam uyğun gəlir. Bu obraz həm brendə xarakter qatır, həm də izləyicilərdə tanışlıq və təbəssüm yaradır.

Dizayn Yanaşması:
Üslub olaraq zarafatcıl bir yanaşma seçmişəm. Coffee Shop mövzsunda rəng palitrası və əyləncəli tipoqrafiya sayəsində məkan daha rahat və dəvətkar görünür. Ölkə mədəniyyətinə bağlılıq və vizual yumor bir araya gələrək, brendin yadda qalmasına kömək edir. Bu ideya dizayner işi ilə daha yaxşı formatda göstərilə bilər.`,
    },
  ];

  const presentations = [
    {
      title: "Java Course - Market Research",
      image: "assets/designs/Java Research.png",
      link: "https://www.canva.com/design/DAGW5mkuK9M/id808K8jAXrU_NKnmYu3XQ/edit?utm_content=DAGW5mkuK9M&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      description: "Introductory presentation for Python & AI course.",
    },
    {
      title: "General Course Presentation",
      image: "assets/designs/JET.png",
      link: "https://www.canva.com/design/DAGoENxq6DU/P9w7do2DEJL8VsTFQ4Y9dg/edit?utm_content=DAGoENxq6DU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      description: "Slides for our travel-themed digital design course.",
    },
  ];

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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4.2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };

  return (
    <section
      id="designGallery"
      className="w-screen min-h-screen text-white px-10 py-12"
    >
      {/* Header */}
      <motion.div
        className="mb-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-2xl lg:text-4xl 2xl:text-5xl font-bold text-yellow-400 text-center md:text-start">
          🎨 {t("design.title")}
        </h1>
        <p className=" desc text-gray-400 max-w-2xl mt-2">{t("design.desc")}</p>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="flex flex-col lg:flex-row gap-12 justify-between"
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Slider Section */}
        <motion.div className="md:w-1/2 w-full" variants={fadeUp}>
          <h2 className="desc text-2xl font-semibold text-yellow-300 mb-4">
            🖼️ {t("design.banners")}
          </h2>
          <Slider {...sliderSettings}>
            {topDesigns.map((item, index) => (
              <motion.div
                key={index}
                className="px-2 cursor-pointer"
                onClick={() => openModal(item)}
                whileHover={!reduce ? { scale: 1.03 } : {}}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                variants={fadeUp}
              >
                <div className="w-full rounded-lg border border-yellow-500 overflow-hidden hover:scale-105 transition shadow-md mx-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 aspect-[4/5] object-cover"
                  />
                  <div className="bg-black bg-opacity-60 text-yellow-200 text-center p-1 text-xs">
                    {item.title}
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>

        <motion.div className="md:w-1/2 w-full" variants={fadeUp}>
          <h2 className="text-2xl font-semibold text-yellow-300 mb-4">
            📽️ {t("design.presentation")}
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            {presentations.map((item, index) => (
              <motion.div
                key={index}
                className="md:w-1/2 w-full border border-yellow-500 rounded-lg overflow-hidden shadow-md bg-neutral-800"
                whileHover={!reduce ? { scale: 1.02 } : {}}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                variants={fadeUp}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-yellow-200">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-800 whitespace-pre-line md:mb-4">
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block md:mt-3 text-blue-400 text-sm hover:underline"
                  >
                    {t("design.canva")} ↗
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-start justify-center overflow-x-auto z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            <motion.div
              className="relative bg-neutral-900 text-white p-6 pt-10 rounded-xl h-[90vh] w-1/4 border border-yellow-400 shadow-lg mt-10 overflow-y-auto"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              exit={{ scale: 0.96, opacity: 0, transition: { duration: 0.2 } }}
            >
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
              <h2 className="text-xl text-yellow-300 font-semibold">
                {selectedItem.title}
              </h2>
              <p className="text-sm whitespace-pre-line mb-4 text-wrap">
                {selectedItem.description}
              </p>

              {/* Link */}
              <a
                href={selectedItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-blue-400 hover:underline"
              >
                {t("design.canva")} ↗
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DesignGallery;

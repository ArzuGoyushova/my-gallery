import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DesignGallery = () => {
  const topDesigns = [
    {
      title: "AI Banner",
      image: "/src/assets/designs/AI.png",
      link: "https://www.canva.com/design/your-link-here",
      description: "Promotional banner for AI course",
    },
    {
      title: "Course Banner",
      image: "/src/assets/designs/Travel.png",
      link: "https://www.canva.com/design/your-link-here",
      description: "Used in course announcement",
    },
    {
      title: "Instagram Carousel",
      image: "/src/assets/designs/schoolrussian.png",
      link: "https://www.canva.com/design/your-link-here",
      description: "Instagram carousel design",
    },
    {
      title: "Event Announcement",
      image: "/src/assets/designs/schoolpython.png",
      link: "https://www.canva.com/design/your-link-here",
      description: "Event banner",
    },
  ];

  const presentations = [
    {
      title: "Java Research",
      image: "/src/assets/designs/Java Research.png",
      link: "https://www.canva.com/design/python-pitch",
      description: "Introductory presentation for Python & AI course.",
    },
    {
      title: "Travel Course Presentation",
      image: "/src/assets/designs/JET.png",
      link: "https://www.canva.com/design/travel-pitch",
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
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-yellow-400">🎨 Design Gallery</h1>
        <p className="text-gray-400 max-w-2xl mt-2">
          Preview my design work. Click to view in detail.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-12 justify-between">
        {/* Slider Section */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-4">🖼️ Top Banners</h2>
          <Slider {...sliderSettings}>
            {topDesigns.map((item, index) => (
              <div
                key={index}
                className="px-2 cursor-pointer"
                onClick={() => openModal(item)}
              >
                <div className="w-[160px] rounded-lg border border-yellow-500 overflow-hidden hover:scale-105 transition shadow-md mx-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 aspect-[4/5] object-cover"
                  />
                  <div className="bg-black bg-opacity-60 text-yellow-200 text-center p-1 text-xs">
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Presentations Section */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-4">📽️ Presentations</h2>
          <div className="flex gap-4">
            {presentations.map((item, index) => (
              <div
                key={index}
                className="w-1/2 border border-yellow-500 rounded-lg overflow-hidden shadow-md bg-neutral-800"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-yellow-200">{item.title}</h3>
                  <p className="text-sm text-gray-300 mt-1">{item.description}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-blue-400 text-sm hover:underline"
                  >
                    View on Canva ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
<div className="w-1/2  border-t border-yellow-600 pt-3 text-center">
  <p className="text-gray-300 text-sm mb-2">
    Want to explore more designs?
  </p>
 <a
  href="https://www.canva.com/folder/your-folder-link"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-yellow-500 text-black font-medium px-4 py-2 rounded hover:bg-yellow-300 transition no-underline"
>
  📁 View Full Canva Folder
</a>
</div>

      {/* Modal */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-neutral-900 text-white p-6 rounded-xl max-w-lg w-full relative border border-yellow-400">
            <button
              className="absolute top-2 right-3 text-gray-400 hover:text-white text-xl"
              onClick={closeModal}
            >
              ✕
            </button>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="rounded-md w-full aspect-[4/5] object-contain mb-4"
            />
            <h2 className="text-xl text-yellow-300 font-semibold">{selectedItem.title}</h2>
            <p className="text-sm text-gray-300 mt-2">{selectedItem.description}</p>
            <a
              href={selectedItem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-blue-400 hover:underline"
            >
              Open in Canva ↗
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default DesignGallery;

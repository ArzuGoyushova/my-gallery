const DesignGallery = () => {
  const topDesigns = [
    {
      title: "Open Lesson Poster",
      image: "/gallery/poster1.jpg",
      link: "https://www.canva.com/design/your-link-here",
    },
    {
      title: "Course Banner",
      image: "/gallery/banner1.jpg",
      link: "https://www.canva.com/design/your-link-here",
    },
    {
      title: "Instagram Carousel",
      image: "/gallery/insta-carousel.jpg",
      link: "https://www.canva.com/design/your-link-here",
    },
    {
      title: "Event Announcement",
      image: "/gallery/event.jpg",
      link: "https://www.canva.com/design/your-link-here",
    },
  ];

  const bottomItems = [
    {
      title: "Presentation: Course Pitch",
      image: "/gallery/presentation.jpg",
      link: "https://www.canva.com/design/your-link-here",
    },
    {
      title: "Certificate of Completion",
      image: "/gallery/certificate.jpg",
      link: "https://www.canva.com/design/your-link-here",
    },
  ];

  return (
    <section id="designGallery" className="min-h-screen px-10 py-16 text-white">
      <h1 className="text-3xl font-bold text-yellow-400 mb-10">🎨 Design Gallery</h1>
      <p className="text-gray-400 max-w-2xl mb-12">
        A collection of my creative work – from promotional visuals to presentations and certificates.
        Click any item to view the Canva file.
      </p>

      {/* Top Designs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {topDesigns.map(({ title, image, link }, i) => (
          <a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg border border-yellow-500 shadow-md transform hover:scale-105 transition"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover group-hover:opacity-80 transition"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2 text-xs text-yellow-200 font-medium">
              {title}
            </div>
          </a>
        ))}
      </div>

      {/* Bottom Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {bottomItems.map(({ title, image, link }, i) => (
          <a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg border border-yellow-500 shadow-md transform hover:scale-105 transition"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-56 object-cover group-hover:opacity-80 transition"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-3 text-sm text-yellow-200 font-medium">
              {title}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default DesignGallery;

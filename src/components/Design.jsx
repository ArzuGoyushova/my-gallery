const DesignGallery = () => {
    const designs = [
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
      // add more as needed
    ];
  
    return (
      <section className="min-h-screen px-10 py-16 bg-neutral-950 text-white">
        <h1 className="text-3xl font-bold text-yellow-400 mb-10">🎨 Design Gallery</h1>
        <p className="text-gray-400 max-w-2xl mb-12">
          A collection of my creative work – from promotional banners to event visuals.
          Each piece is linked to its Canva file for a closer look.
        </p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {designs.map(({ title, image, link }, i) => (
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
                className="w-full h-60 object-cover group-hover:opacity-80 transition"
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
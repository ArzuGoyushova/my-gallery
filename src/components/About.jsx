const About = () => {
  return (
    <section
      id="about"
      className="w-screen h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-24 py-16 text-white shrink-0"
    >
      {/* Left Side: Short Bio */}
      <div className="md:w-1/2 max-w-xl mb-4">
        <h2 className="text-4xl font-serif text-yellow-400 mb-4">Meet the Curator</h2>
        <p className="text-lg text-wrap text-neutral-300 leading-relaxed border-l-4 border-yellow-600 pl-4">
          I’m Arzu — a digital marketing specialist who crafts content, visuals, and strategy with purpose.
          From writing Instagram captions and blog scripts to leading creative campaigns, managing websites,
          organizing events, and optimizing SEO, I connect ideas with execution — and brands with their audiences.
        </p>
      </div>

      {/* Right Side: Skills - vertical scroll on mobile, grid on desktop */}
      <div className="md:w-1/2 w-screen max-h-100 md:max-h-full overflow-y-auto py-4 md:overflow-visible mb-8 md:mb-0 grid grid-cols-2 gap-y-4 md:px-12 justify-items-center">

        {[
          {
            title: "Content & Copywriting",
            items: ["Blog Writing", "Instagram Captions", "Video Scripts", "Brand Voice"],
          },
          {
            title: "Design & Visuals",
            items: ["Presentations", "Syllabuses", "Stickers & Certificates", "Aesthetic Layouts"],
          },
          {
            title: "Campaigns & Web",
            items: ["Campaign Ideas", "Creative Briefs", "Website Management", "Content Uploading"],
          },
          {
            title: "Events & SEO",
            items: ["Event Planning", "Communication", "SEO Research", "Keyword Strategy"],
          },
        ].map((category, i) => (
          <div
            key={category.title}
            className={`relative bg-white text-yellow-900 md:w-56 w-44 px-4 py-3 rounded-md shadow-lg border border-yellow-300 shrink-0 ${
              i % 2 === 0 ? "rotate-[-2deg]" : "rotate-[1.5deg]"
            }`}
          >
            {/* Pin */}
            <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-600 rounded-full shadow-md z-10" />
            <h4 className="text-sm font-bold text-yellow-700 mb-2">{category.title}</h4>
            <ul className="space-y-1 text-sm">
              {category.items.map((item) => (
                <li key={item} className="before:content-['•'] before:mr-2 before:text-yellow-500">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;

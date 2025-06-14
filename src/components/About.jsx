const About = () => {
  return (
    <section
      id="about"
      className="w-full h-screen flex flex-col shrink-0 md:flex-row items-center justify-between px-8 md:px-24 py-16 text-white"
    >
      {/* Left Side: Short Bio */}
      <div className="max-w-xl mb-10 md:mb-0">
        <h2 className="text-4xl font-serif text-yellow-400 mb-4">Meet the Curator</h2>
        <p className="text-lg text-wrap text-neutral-300 leading-relaxed border-l-4 border-yellow-600 pl-4 mb-6">
          I’m Arzu — a digital marketing specialist who crafts content, visuals, and strategy with purpose.
          From writing Instagram captions and blog scripts to leading creative campaigns, managing websites,
          organizing events, and optimizing SEO, I connect ideas with execution — and brands with their audiences.
        </p>
</div>

        {/* Skills grouped by categories */}
        <div className="flex flex-wrap gap-6 ml-4">
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
      items: ["Event Planning", "Logistics & Communication", "SEO Research", "Keyword Strategy"],
    },
  ].map((category, i) => (
    <div
      key={category.title}
      className={`relative bg-white text-yellow-900 w-56 px-4 py-3 rounded-md shadow-lg border border-yellow-300 ${
        i % 2 === 0 ? "rotate-[-2deg]" : "rotate-[1.5deg]"
      }`}
    >
      {/* Pin */}
      <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-600 rounded-full shadow-md z-10"></div>

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

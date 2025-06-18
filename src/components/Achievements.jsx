const Achievements = () => {
  const items = [
    {
      title: "📹 Most Viewed Video on YouTube",
      description:
        "A short-form video I created for JET School became the **most viewed video** on their YouTube channel of all time. It led to over **100+ new subscribers**, increasing the total follower count by **50%**.",
      link: "https://www.youtube.com/@jetschool", // optional real link
    },
    {
      title: "🎯 Full Group Conversion from One Banner",
      description:
        "A single banner I designed for the **AI Engineering** course led to two full groups being formed. The Canva design was used across platforms and had a direct impact on registration.",
      link: "https://www.canva.com/design/your-banner-link", // optional
    },
    {
      title: "🔍 SEO Keyword Success",
      description:
        "Thanks to strategic content writing, our JET School site ranks **on the first page of Google** for keywords like _'uşaqlar üçün proqramlaşdırma'_ and _'Scratch dərsləri Bakı.'_ We gained visibility with **zero paid ads**.",
      link: "https://www.google.com/search?q=u%C5%9Faqlar+%C3%BC%C3%A7%C3%BCn+proqramla%C5%9Fd%C4%B1rma", // optional real proof
    },
    // Add more if needed
  ];

  return (
    <section className="min-h-screen px-10 py-16 text-white">
      <h1 className="text-3xl font-bold text-yellow-400 mb-10">🏆 Achievements</h1>
      <p className="text-gray-300 max-w-2xl mb-12 text-wrap">
        Highlights of my work that created measurable impact — in video engagement,
        design conversions, SEO performance, and more.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map(({ title, description, link }, i) => (
          <div
            key={i}
            className="border border-yellow-500 p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-yellow-300 mb-2">{title}</h2>
            <p className="text-sm text-gray-200 mb-2 text-wrap">{description}</p>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 text-sm underline hover:text-yellow-300"
              >
                View Proof ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;

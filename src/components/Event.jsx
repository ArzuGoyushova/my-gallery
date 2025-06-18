const Events = () => {
  const events = [
    {
      title: "Startup Seminar at Innoland",
      date: "May 2024",
      role: "Content Creator & Organizer",
      description:
        "I supported the event by preparing all visual content — including the presentation slides, social media banners, and the registration form. I also helped in organizing the logistics, communication with speakers, and on-site coordination during the seminar.",
      image: "/events/startup-seminar.jpg", // event photo
      proof: "https://www.canva.com/design/presentation-link", // link to presentation if public
    },
    {
      title: "AI Engineering Open Day",
      date: "March 2024",
      role: "Content & Visuals",
      description:
        "Created the open day banner that led to full group registration. Assisted in audience communication, coordination of instructors, and visual content displayed during the session.",
      image: "/events/ai-open-day.jpg",
      proof: "https://www.canva.com/design/ai-banner-link",
    },
    // Add more events as needed
  ];

  return (
    <section className="min-h-screen px-10 py-16 text-white">
      <h1 className="text-3xl font-bold text-yellow-400 mb-10">📅 Events I’ve Contributed To</h1>
      <p className="text-gray-300 max-w-2xl mb-12">
        From planning logistics to creating visual content and coordinating live sessions —
        here's a look at the events I've helped bring to life.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {events.map(({ title, date, role, description, image, proof }, i) => (
          <div
            key={i}
            className="border border-yellow-500 rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-yellow-300">{title}</h2>
              <p className="text-sm text-yellow-100 mb-1">{date} • {role}</p>
              <p className="text-sm text-gray-200 mb-3">{description}</p>
              {proof && (
                <a
                  href={proof}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 text-sm underline hover:text-yellow-300"
                >
                  View Presentation ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;

import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
  FaLinkedin,
  FaGlobe,
  FaPlay,
} from "react-icons/fa";

const Content = () => {
  const blogPages = [
    {
      title: "The Power of Brand Storytelling",
      image: "blog1.jpg",
      link: "https://example.com/brand-storytelling",
    },
    {
      title: "Optimizing Funnels with Psychology",
      image: "blog2.jpg",
      link: "https://example.com/funnel-psychology",
    },
  ];

  const captions = [
    "Caption link 1",
    "Caption link 2",
    "Caption link 3",
    "Caption link 4",
  ];

  const speeches = [
    {
      title: "Video Intro",
      content:
        "“What if your brand spoke louder than words? That’s where we come in.”",
    },
    {
      title: "Event Opener",
      content:
        "“We’re not here just to talk about marketing — we’re here to shape the experience.”",
    },
  ];

  const ideas = [
    "📦 Campaign: 'Unbox the Unexpected' — reveal concept with mystery packaging.",
    "🎯 Idea: 'Brand Archetypes Quiz' — funnel entry through a personality quiz.",
    "🎥 Video Series: 'Behind the Rebrand' — storytelling via transformation journey.",
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
  return (
    <section id="content" className="flex w-[200vw] md:w-screen h-screen text-white">
      {/* Horizontal Panel */}
      <div className="w-screen h-screen flex flex-col">
        {/* Top Half: Channels */}
        <div className="flex justify-center items-center h-1/3 relative z-10 gap-16 px-8 border">
          {/* JET Academy Signboard */}
          <div className="flex flex-col items-center">
            <div
              className="relative flex items-center"
              style={{
                transformOrigin: "top center",
                animation: "swing 3s ease-in-out infinite",
              }}
            >
              {/* Arrow signboard */}
              <div className="relative flex items-center">
                {/* Arrow body */}
                <div className=" bg-yellow-400 text-black font-bold text-sm tracking-wide px-6 py-2 rounded-l-md z-10">

                  JET Academy
                </div>

                {/* Arrow head */}
                <div
                  className="w-6 h-9 bg-yellow-400"
                  style={{
                    clipPath: "polygon(0 0, 100% 50%, 0 100%)"
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Academy Channels */}
          <div className="flex gap-10">
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

          {/* JET School Signboard */}
          <div className="flex flex-col items-center">
            <div
              className="relative flex items-center"
              style={{
                transformOrigin: "top center",
                animation: "swing 3s ease-in-out infinite",
              }}
            >
              {/* Arrow signboard */}
              <div className="relative flex items-center">
                {/* Arrow body */}
                <div className=" bg-yellow-400 text-black font-bold text-sm tracking-wide px-6 py-2 rounded-l-md z-10">

                  JET School
                </div>

                {/* Arrow head */}
                <div
                  className="w-6 h-9 bg-yellow-400"
                  style={{
                    clipPath: "polygon(0 0, 100% 50%, 0 100%)"
                  }}
                ></div>
              </div>
            </div>
          </div>
          {/* School Channels */}
          <div className="flex gap-10">
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

        <div className="flex justify-center items-start h-2/3 relative z-10 border">
          <div className="flex gap-16 mt-8">
            {/* Bottom Half: Exhibits Side by Side */}
            <div className="flex flex-grow overflow-x-auto">
              {/* Captions */}
              <div className="min-w-[25rem] p-6">
                <h2 className="text-2xl font-serif text-yellow-400 mb-4">Captions</h2>
                <div className="flex flex-wrap gap-4">
                  {captions.map((text, i) => (
                    <div
                      key={i}
                      className="paper"
                    >
                      {text}
                    </div>
                  ))} </div>
              </div>
              {/* Play Buttons */}
              <div className="min-w-[25rem] p-6 ">
                <h2 className="text-2xl font-serif text-yellow-400 mb-4">Video Scripts</h2>
                <div className="flex gap-4">
                  {[1, 2, 3].map((n) => (
                    <a
                      key={n}
                      href="#"
                      className="w-14 h-14 rounded-full bg-yellow-300 text-black flex items-center justify-center shadow-lg hover:scale-110 transition"
                    >
                      <FaPlay />
                    </a>
                  ))}
                </div>
              </div>

              {/* Creative Ideas */}
              <div className="min-w-[25rem] p-6">
                <h2 className="text-2xl font-serif text-yellow-400 mb-4">Content Ideas</h2>
                <div className="flex flex-col gap-3">
                  {ideas.map((idea, i) => (
                    <div
                      key={i}
                      className="bg-yellow-200 text-black text-sm p-4 italic rounded-md shadow border-l-4 border-yellow-600"
                    >
                      {idea}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
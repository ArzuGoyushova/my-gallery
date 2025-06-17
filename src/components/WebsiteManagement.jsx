import { FaSearch } from "react-icons/fa";

const WebsiteManagement = () => {
  const searchResults = [
    {
      keyword: "uşaqlar üçün proqramlaşdırma kursları",
      title: "JET School | Uşaqlar üçün Kodlaşdırma və İT Təlimləri",
      url: "jetschool.az/kids-programming",
    },
    {
      keyword: "uşaqlar üçün scratch dərsləri",
      title: "Scratch ilə Əyləncəli Proqramlaşdırma | JET School",
      url: "jetschool.az/scratch-kids",
    },
    {
      keyword: "uşaqlar üçün veb proqramlaşdırma kursu",
      title: "Uşaqlar üçün Web Proqramlaşdırma | JET School",
      url: "jetschool.az/kids-web-dev",
    },
  ];

  return (
    <section id="websiteManagement" className="min-h-screen w-screen shrink-0 p-10 text-white">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">
        Website Management
      </h1>

      {/* Overview */}
      <div className="mb-10">
        <p className="text-gray-300 max-w-2xl">
          I manage all the written content for the JET School website — including course descriptions, blog posts, news updates, and general site copy.
        </p>
        <p className="text-yellow-300 mt-2 underline">
          <a href="https://jetschool.az" target="_blank" rel="noreferrer">
            Visit Website ↗
          </a>
        </p>
      </div>

      {/* SEO Search Result Showcase */}
      <div className="mb-10">
        <h2 className="text-xl text-yellow-300 mb-4 flex items-center gap-2">
          <FaSearch /> Google Search Visibility (SEO-Based)
        </h2>
        <p className="text-sm text-gray-400 mb-3">
          These results were achieved organically — without any paid ads.
        </p>

        <div className="space-y-4">
          {searchResults.map((result, i) => (
            <div
              key={i}
              className="bg-neutral-800 border border-yellow-500 rounded-md p-4 shadow-md w-120"
            >
              <p className="text-sm text-gray-400">
                🔍 Keyword: <span className="italic">{result.keyword}</span>
              </p>
              <p className="text-lg text-blue-400">{result.title}</p>
              <p className="text-sm text-green-400">{result.url}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsiteManagement;

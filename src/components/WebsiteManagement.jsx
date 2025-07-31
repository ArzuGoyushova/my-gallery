import { FaSearch } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const WebsiteManagement = () => {

  const { t } = useTranslation();

  const searchResults = [
    {
      keyword: "uşaqlar üçün IT kursu",
      title: "JET School | Uşaqlar üçün IT kursları, Proqramlaşdırma kursları!",
      url: "jetschool.az/az",
      link: "https://www.google.com/search?q=u%C5%9Faqlar+%C3%BC%C3%A7%C3%BCn+it+kursu&oq=...",
      place: "1-2"
    },
    {
      keyword: "uşaqlar üçün proqramlaşdırma",
      title: "JET School | Uşaqlar üçün IT kursları, Proqramlaşdırma kursları!",
      url: "jetschool.az/az",
      link: "https://www.google.com/search?q=u%C5%9Faqlar+%C3%BC%C3%A7%C3%BCn+proqramla%C5%9F...",
      place: "1-2"
    },
    {
      keyword: "scratch nədir",
      title: "Scratch nədir? Uşaqlar üçün Proqramlaşdırma Dünyasında İnqilab",
      url: "jetschool.az/az/news/scratch-nedir-usaqlar-ucun-...",
      link: "https://www.google.com/search?q=scratch+n%C9%99dir&sca_esv=...",
      place: "2-3"
    },
  ];

  return (
<section
  id="websiteManagement"
  className=" w-full pt-6 px-4 sm:px-6 md:px-12 lg:px-20 text-white"
>
  <h1 className="text-[1.75rem] sm:text-[2.5rem] md:text-[3.6rem] font-bold text-yellow-400 mb-2">
    {t('website.title')}
  </h1>

  {/* Overview */}
  <div className="mb-6 max-w-3xl">
    <p className="text-gray-300">
      {t('website.desc')}
    </p>
    <p className="text-yellow-300 mt-2 underline">
      <a href="https://jetschool.az" target="_blank" rel="noreferrer">
        {t('website.visit')}
      </a>
    </p>
  </div>

  {/* SEO Search Result Showcase */}
  <div className="space-y-4">
    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
      <h2 className="text-xl text-yellow-300 flex items-center gap-2">
        <FaSearch /> {t('website.google')}
      </h2>
      <p className="text-sm text-gray-400 sm:ml-4">
        {t('website.google-desc')}
      </p>
    </div>

    <div className="space-y-4">
      {searchResults.map((result, i) => (
        <div
          key={i}
          className="bg-neutral-800 border border-yellow-500 rounded-md p-4 shadow-md flex flex-col sm:flex-row justify-between gap-3 w-full"
        >
          {/* Left side */}
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-400 break-words">
              🔍 <span className="italic">"{result.keyword}"</span>
            </p>
            <p className="text-base sm:text-lg text-blue-400 font-medium truncate">
              {result.title}
            </p>
            <p className="text-sm text-green-400 truncate">{result.url}</p>
          </div>

          {/* Right side */}
          <div className="mt-2 sm:mt-0 flex flex-col items-start sm:items-end gap-1">
            <p className="text-sm text-yellow-300 font-semibold whitespace-nowrap">
              📍 {t('website.rank')} #{result.place}
            </p>
            <a
              href={result.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-300 underline hover:text-blue-400 whitespace-nowrap"
            >
              {t('website.google-check')}
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default WebsiteManagement;

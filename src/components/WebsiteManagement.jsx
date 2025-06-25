import { FaSearch } from "react-icons/fa";

const WebsiteManagement = () => {
  const searchResults = [
    {
      keyword: "uşaqlar üçün IT kursu",
      title: "JET School | Uşaqlar üçün IT kursları, Proqramlaşdırma kursları!",
      url: "jetschool.az/az",
      link: "https://www.google.com/search?q=u%C5%9Faqlar+%C3%BC%C3%A7%C3%BCn+it+kursu&oq=u%C5%9Faqlar+%C3%BC%C3%A7%C3%BCn+it+kursu&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPNIBCDQ4MTZqMGoxqAIAsAIB&sourceid=chrome&ie=UTF-8&sei=u_pbaJeEBI7gxc8P1Lmx0Qk",
      place: "1-2"
    },
    {
      keyword: "uşaqlar üçün proqramlaşdırma",
      title: "JET School | Uşaqlar üçün IT kursları, Proqramlaşdırma kursları!",
      url: "jetschool.az/az",
      link: "https://www.google.com/search?q=u%C5%9Faqlar+%C3%BC%C3%A7%C3%BCn+proqramla%C5%9Fd%C4%B1rma&sca_esv=6db176930c53557b&ei=u_pbaNiyGO2Cxc8P84zygQw&oq=u%C5%9Faqlar+%C3%BC%C3%A7%C3%BCn+proqramla%C5%9F&gs_lp=Egxnd3Mtd2l6LXNlcnAiHHXFn2FxbGFyIMO8w6fDvG4gcHJvcXJhbWxhxZ8qAggAMgUQABiABDIFEAAYgAQyCBAAGIAEGKIEMggQABiABBiiBEi0yAdQ1rEHWJS7B3AEeAGQAQCYAc4BoAGGDqoBBTAuOS4xuAEByAEA-AEBmAIOoAKyDsICChAAGLADGNYEGEfCAgYQABgWGB6YAwCIBgGQBgiSBwU0LjkuMaAHzymyBwUwLjkuMbgHog7CBwUwLjguNsgHJA&sclient=gws-wiz-serp",
      place: "1-2"
    },
    {
      keyword: "scratch nədir",
      title: "Scratch nədir? Uşaqlar üçün Proqramlaşdırma Dünyasında İnqilab",
      url: "jetschool.az/az/news/scratch-nedir-usaqlar-ucun-proqramlasdirma-dunyasinda-inqilab",
      link: "https://www.google.com/search?q=scratch+n%C9%99dir&sca_esv=6db176930c53557b&biw=1536&bih=695&ei=_ftbaKfPCLGUxc8PwK7mmQ8&ved=0ahUKEwjnwa2O2YyOAxUxSvEDHUCXOfMQ4dUDCBA&uact=5&oq=scratch+n%C9%99dir&gs_lp=Egxnd3Mtd2l6LXNlcnAiDnNjcmF0Y2ggbsmZZGlyMgUQABiABDIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIFEAAY7wVI4W9QoRhY3G1wAngBkAEAmAGbAaABpQ6qAQQwLjEzuAEDyAEA-AEBmAIPoALoDqgCCsICChAAGLADGNYEGEfCAh0QABiABBi0AhjUAxjlAhi3AxiKBRjqAhiKA9gBAcICChAAGIAEGEMYigXCAgsQABiABBixAxiDAcICDhAAGIAEGLEDGIMBGIoFwgILEAAYgAQYsQMYigXCAggQABiABBixA8ICBhAAGBYYHpgDBfEFuSi_PFP2vf2IBgGQBgi6BgQIARgHkgcEMi4xM6AH6jSyBwQwLjEzuAfeDsIHBjAuMy4xMsgHOA&sclient=gws-wiz-serp",
      place: "2-3"
    },
  ];

  return (
    <section id="websiteManagement" className="min-h-screen w-3/4 shrink-0 p-10 text-white">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">
        Website Management
      </h1>

      {/* Overview */}
      <div className="mb-4">
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
    className="bg-neutral-800 border border-yellow-500 rounded-md p-4 shadow-md w-2/3 flex justify-between items-start"
  >
    {/* Left side */}
    <div>
      <p className="text-sm text-gray-400 mb-1">
        🔍 <span className="italic">"{result.keyword}"</span>
      </p>
      <p className="text-lg text-blue-400">{result.title}</p>
      <p className="text-sm text-green-400">{result.url}</p>
    </div>

    {/* Right side */}
    <div className="text-right ml-4 ">
      <p className="text-sm text-yellow-300 font-semibold whitespace-nowrap">
        📍 Rank: #{result.place}
      </p>
      <a
        href={result.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-300 underline hover:text-blue-400 whitespace-nowrap"
      >
        See on Google ↗
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

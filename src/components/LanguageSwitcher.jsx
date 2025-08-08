import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(i18n.language || "en");

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    setDropdownOpen(false);
  };

  const displayLang = currentLang === "az" ? "AZE" : "ENG";

  return (
    <div className="relative hidden md:block pt-2">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="
          flex items-center gap-1
          text-white
          px-3 py-2
          rounded-md
          bg-black/50 hover:bg-white/10
          transition
          text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl
          font-semibold
        "
      >
        {displayLang}
        <FaChevronDown className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl" />
      </button>

      {dropdownOpen && (
        <div
          className="
            absolute left-0 mt-1 w-full
            bg-black border border-white rounded-md
            z-50
            text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl
          "
        >
          {currentLang !== "en" && (
            <button
              onClick={() => changeLanguage("en")}
              className="
                w-full text-left px-4 py-2
                text-white
                hover:bg-white/10
                transition
              "
            >
              ENG
            </button>
          )}
          {currentLang !== "az" && (
            <button
              onClick={() => changeLanguage("az")}
              className="
                w-full text-left px-4 py-2
                text-white
                hover:bg-white/10
                transition
              "
            >
              AZE
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

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
        className="flex items-center gap-1 text-white text-sm px-1 py-1 rounded-md bg-black/50 hover:bg-white/10 transition"
      >
        {displayLang}
        <FaChevronDown className="text-xs" />
      </button>

      {dropdownOpen && (
        <div className="absolute left-0 mt-1 w-full bg-black border border-white rounded-md text-sm z-50">
          {currentLang !== "en" && (
            <button
              onClick={() => changeLanguage("en")}
              className="w-full text-left px-2 py-1 text-white hover:bg-white/10"
            >
              ENG
            </button>
          )}
          {currentLang !== "az" && (
            <button
              onClick={() => changeLanguage("az")}
              className="w-full text-left px-2 py-1 text-white hover:bg-white/10"
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
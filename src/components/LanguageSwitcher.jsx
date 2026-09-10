import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="ml-4 px-3 py-1 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
    >
      {language === "es" ? "EN" : "ES"}
    </button>
  );
};

export default LanguageSwitcher;

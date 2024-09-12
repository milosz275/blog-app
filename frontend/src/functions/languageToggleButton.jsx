import React from "react";
import { poland, england } from "../icons";
import { useTranslation } from "react-i18next";

function LanguageToggleButton() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed right-4 top-5 z-50">
      <button
        onClick={() => changeLanguage(i18n.language === "en" ? "pl" : "en")}
        className="w-14 h-8 p-1 bg-slate-100 dark:bg-gray-700 text-lg rounded-full flex items-center justify-between"
      >
        <div
          className={`w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out transition-all ${i18n.language === "pl" ? "translate-x-6" : "translate-x-0"
            } flex items-center justify-center`}
        >
          {i18n.language === "pl" ? React.cloneElement(poland, { className: "rounded-full h-6 w-6 outline outline-1 outline-slate-300 transition-all" }) : React.cloneElement(england, { className: "rounded-full h-6 w-6 outline outline-1 outline-slate-300 transition-all" })}
        </div>
      </button>
    </div>
  );
}

export default LanguageToggleButton;

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import useCheckDarkMode from "../handlers/useCheckDarkmode";
import { moon, sun } from "../icons";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useCheckDarkMode();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed left-5 top-5 z-50 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <button
        onClick={toggleTheme}
        className="w-14 h-8 p-1 bg-slate-100 dark:bg-gray-700 hover:bg-slate-200 dark:hover:bg-gray-800 text-lg rounded-full flex items-center justify-between transition-all duration-300 ease-in-out transform"
      >
        <div
          className={`w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${theme === "dark" ? "translate-x-6 bg-blue-400" : "translate-x-0 bg-yellow-400"
            } flex items-center justify-center`}
        >
          {theme === "dark" ? moon : sun}
        </div>
      </button>
    </div>
  );
}

export default ThemeToggleButton;

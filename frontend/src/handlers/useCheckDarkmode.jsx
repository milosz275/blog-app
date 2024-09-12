import { useEffect, useState } from "react";
import { getCookie } from "../components/GetCookie";
import { setCookie } from "../components/SetCookie";

const useCheckDarkMode = () => {
  const [theme, setTheme] = useState(document.documentElement.classList.contains("dark") ? "dark" : "light");

  useEffect(() => {
    let darkThemeCookie = getCookie("dark-theme");
    if (darkThemeCookie) {
      setTheme(darkThemeCookie === "true" ? "dark" : "light");
    }
  }
    , []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    setCookie("dark-theme", theme === "dark" ? "true" : "false");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme === "light" ? "dark" : "light");
  };

  return { theme, toggleTheme };
}

export default useCheckDarkMode;

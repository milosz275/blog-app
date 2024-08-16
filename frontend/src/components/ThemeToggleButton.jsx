import useCheckDarkMode from "../functions/useCheckDarkmode";
import { moon, sun } from "../components/Icons";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useCheckDarkMode();

  return (
    <div className="fixed left-4 top-5 z-50">
      <button
        onClick={toggleTheme}
        className="w-14 h-8 p-1 bg-white dark:bg-gray-700 hover:drop-shadow-lg dark:hover:drop-shadow-lg text-lg rounded-full flex items-center justify-between"
      >
        <div
          className={`w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
            theme === "dark" ? "translate-x-6 bg-blue-400" : "translate-x-0 bg-yellow-400"
          } flex items-center justify-center`}
        >
          {theme === "dark" ? moon : sun}
        </div>
      </button>
    </div>
  );
}

export default ThemeToggleButton;

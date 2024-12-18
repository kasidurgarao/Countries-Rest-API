import { useState } from "react";
import { MoonIcon } from "@heroicons/react/24/solid";

function HeaderPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="flex items-center justify-between h-16 bg-white dark:bg-slate-800 dark:text-white md:px-12 px-10 shadow-lg">
      <h1 className="text-sm md:text-lg font-semibold md:pl-10">Where in the World?</h1>
      <button
        className="flex items-center space-x-2"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? (
          <MoonIcon className="w-6 h-6 text-white" />
        ) : (
          <MoonIcon className="w-6 h-6 text-slate-200" />
        )}
        <span className="text-sm md:text-lg">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
      </button>
    </div>
  );
}

export default HeaderPage;

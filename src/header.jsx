// import { useState } from "react";
// import { MoonIcon } from "@heroicons/react/24/solid";

// function HeaderPage() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//     if (!isDarkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   };

//   return (
//     <div className="flex items-center justify-between h-20 bg-white dark:bg-slate-800 dark:text-white md:px-32 px-4 shadow-sm">
//       <h1 className="text-lg md:text-2xl font-extrabold ">Where in the World?</h1>
//       <button
//         className="flex items-center space-x-2"
//         onClick={toggleDarkMode}
//       >
//         {isDarkMode ? (
//           <MoonIcon className="w-4 h-4 text-white" />
//         ) : (
//           <MoonIcon className="w-4 h-4 text-slate-300" />
//         )}
//         <span className="text-base md:text-xl">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
//       </button>
//     </div>
//   );
// }

// export default HeaderPage;


// header.js
import React, { useContext } from "react";
import { MoonIcon } from "@heroicons/react/24/solid";
import ThemeContext from "./Theme/ThemePage";
function HeaderPage() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className="flex items-center justify-between h-20 bg-white dark:bg-slate-800 dark:text-white md:px-32 px-4 shadow-sm">
      <h1 className="text-lg md:text-2xl font-extrabold">Where in the World?</h1>
      <button
        className="flex items-center space-x-2"
        onClick={toggleDarkMode}
      >
        <MoonIcon className={`w-4 h-4 ${isDarkMode ? "text-white" : "text-slate-300"}`} />
        <span className="text-base md:text-xl">
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </span>
      </button>
    </div>
  );
}

export default HeaderPage;


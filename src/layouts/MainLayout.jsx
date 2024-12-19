// import { Outlet } from "react-router-dom";
// import HeaderPage from "../header";
// import React from 'react'

// const MainLayout = () => {
//   return (
//     <>
//     <HeaderPage></HeaderPage>
//     <Outlet></Outlet>
//     </>
//   )
// }

// export default MainLayout

// layouts/MainLayout.js
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import HeaderPage from "../header";
import ThemeContext from "../Theme/ThemePage";
function MainLayout() {
  // const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  // className={isDarkMode ? "dark" : ""}

  return (
    <div > 
      <HeaderPage />
      <Outlet />
    // </div>
  );
}

export default MainLayout;

// import {
//   Route,
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
// } from "react-router-dom";

// import HeaderPage from "./header";
// import GetDataAndApplyFIlter from "./fetchData";
// import DisplayCountries from "./displayCountries";
// import MainLayout from "./layouts/MainLayout";
// import CountryDetails from "./detailesPage";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//   <Route path='/' element={<MainLayout/>}>
//     <Route index element={<GetDataAndApplyFIlter/>}/>
//     <Route index element={<DisplayCountries/>}/>
//     <Route path="country/:name" element={<CountryDetails />}/>
//   </Route>
// )
// )
// function App() {
//   return (
//     <RouterProvider router={router}/>
//   );
// }
// export default App;


// App.js
import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { ThemeProvider } from "./Theme/ThemePage";
import MainLayout from "./layouts/MainLayout";
import GetDataAndApplyFilter from "./fetchData";
import DisplayCountries from "./displayCountries";
import CountryDetails from "./detailesPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<GetDataAndApplyFilter />} />
      <Route path="countries" element={<DisplayCountries />} />
      <Route path="country/:name" element={<CountryDetails />} />
    </Route>
  )
);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;


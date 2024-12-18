import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HeaderPage from "./header";
import GetDataAndApplyFIlter from "./fetchData";
import DisplayCountries from "./displayCountries";
import { H1Icon } from "@heroicons/react/24/solid";
import MainLayout from "./layouts/MainLayout";
import CountryDetails from "./detailesPage";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<GetDataAndApplyFIlter/>}/>
    <Route index element={<DisplayCountries/>}/>
    <Route path="country/:name" element={<CountryDetails />}/>
  </Route>
)
)
function App() {
  return (
    <RouterProvider router={router}/>
    // <div>
    //   <HeaderPage></HeaderPage>
    //   <GetDataAndApplyFIlter></GetDataAndApplyFIlter>
    //   <DisplayCountries></DisplayCountries>
    // </div>
  );
}
export default App;

import { Outlet } from "react-router-dom";
import HeaderPage from "../header";
import React from 'react'

const MainLayout = () => {
  return (
    <>
    <HeaderPage></HeaderPage>
    <Outlet></Outlet>
    </>
  )
}

export default MainLayout
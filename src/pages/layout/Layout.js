import React from "react";
import { Outlet } from "react-router-dom";
import Navigaton from "./Navigaton";
import Docs from "./Docs";


export default function Layout() {
  return (
    <>
<<<<<<< HEAD
      <div className="main h-screen">
        <Navigaton />
        <Outlet />
=======
    <div className="main h-screen">
      <Navigaton />
      
      <Outlet />
>>>>>>> 3b23d5c (added documentation part)
      </div>
    </>
  );
}

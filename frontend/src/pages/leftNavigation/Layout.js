import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navigaton from "./Navigaton";

export default function Layout() {
  return (
    <>
      <div className="main h-screen  ">

        <Navigaton />
        <div className="h-screen overflow-auto p-12  scroll-smooth relative">
          <Outlet />
            
       
        </div>
        <Link to="/input">
        <button className="absolute text-white font-semibold bottom-[5px] right-5  p-5 rounded-2xl bg-[#f5a942] uppercase">add</button>
        </Link>
      </div>
     
    </>
  );
}

import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navigaton from "./Navigaton";

export default function Layout() {
  return (
    <>
      <div className="main h-screen ">
        <Navigaton />
        <div className="h-screen overflow-auto p-12  relative">
          <Outlet />
            
       
        </div>
        <button className="absolute text-white bottom-[-41px] right-5  p-5 rounded-2xl bg-[blueviolet] uppercase"><Link to="/input">add</Link></button>
      </div>
    </>
  );
}

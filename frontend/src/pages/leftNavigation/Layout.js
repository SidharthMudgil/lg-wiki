import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Navigaton from "./Navigaton";

export default function Layout() {
  const [display, setDisplay] = useState('block');

  const handleClick = () => {

    setDisplay(display === 'block' ? 'none' : 'block');
    document.getElementById('leftn').style.display=display;
   

  };
  return (
    <>
      <div className="main h-screen  ">

        <Navigaton />
        <div className="h-screen overflow-auto p-12  scroll-smooth relative">
          <Outlet />
            
       
        </div>
        {/* button add  for user input  and hole css with tailwind use  */}
        <Link to="/input">
        <button className="absolute button-AddInput " >add</button>
        </Link>
        <button className="absolute button-nav-add button-AddInput   " onClick={handleClick}>NAV</button>
      </div>
     
    </>
  );
}

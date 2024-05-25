import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/wiki-logo.png";

import "./header.css";

export default function Header() {
  const [resolution, setResolution]=useState();


  // moblie function 
    function Resizewin(){
      
  
        const res = window.innerWidth;
        if (res >= 320 && res <= 768) {
          setResolution(true);
          
          
        } else if (res >= 768 && res <= 1930) {
        
          setResolution(false);
        }
      }
    
      useEffect(() => {
        Resizewin();
        window.addEventListener('resize', Resizewin);
    
      });
  
  return (
    <>
      <nav className="nav">
        <div className="nav-logo">
          <img src={logo} alt="logo" className="h-10" />
        </div>
        <i class="fa fa-bars toggle " aria-hidden="true"></i>
       {resolution?moblie():desktop()}
      </nav>
    </>
  );
}



const desktop=()=>{
  return(
  <div className="nav-ul">
  {/* navbar items to show */}
    
  <NavLink
    to=""
    className="nav-li"
    style={({ isActive }) => ({
      pointerEvents: isActive ? "none" : "",
      borderBottom: isActive ? "1.5px solid white" : "",
    })}
  >
    Home
  </NavLink>
  <NavLink
    to="/docs/arc"
    className="nav-li"
    style={({ isActive }) => ({
      pointerEvents: isActive ? "none" : "",
      borderBottom: isActive ? "1.5px solid white" : "",
    })}
  >
    documentation
  </NavLink>
</div>
  )
}

const moblie=()=>{
  return(
  <div className="nav-ul-m">
  {/* navbar items to show */}
  <i className="fa fa-bars icon-bar  " aria-hidden="true"/>
    <div className="moblie-ul">
  <NavLink
    to=""
    className="nav-li li-m"
    style={({ isActive }) => ({
      pointerEvents: isActive ? "none" : "",
      borderBottom: isActive ? "1.5px solid white" : "",
    })}
  >
    home
  </NavLink>
  <NavLink
    to="/docs/arc"
    className="nav-li li-m"
    style={({ isActive }) => ({
      pointerEvents: isActive ? "none" : "",
      borderBottom: isActive ? "1.5px solid white" : "",
    })}
  >
    documentation
  </NavLink>
  </div>
</div>
  )
}
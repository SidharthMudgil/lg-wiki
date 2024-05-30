import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/wiki-logo.png";

import "./header.css";

export default function Header() {
  const [resolution, setResolution] = useState();
  const [nav, setnav] = useState(false);

  // moblie function
  function Resizewin() {
    const res = window.innerWidth;
    if (res >= 320 && res <= 768) {
      setResolution(true);
    } else if (res >= 768 && res <= 1930) {
      setResolution(false);
    }
  }

  useEffect(() => {
    Resizewin();
    window.addEventListener("resize", Resizewin);
  });

  return (
    <>
      <nav className="nav">
        <div className="nav-logo">
          <a href="https://lg-wiki-coral.vercel.app/"        target="_blank"
                rel="noref̥errer">
            <img src={logo} alt="logo" className="h-10" />
          </a>
        </div>
        <i class="fa fa-bars toggle " aria-hidden="true"></i>
        {resolution ? moblie(nav,setnav) : desktop()}
      </nav>
    </>
  );
}

const desktop = () => {
  return (
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
  );
};
const moblie = (nav, setNav) => {
  const mobMenu = () => {
    if (nav) {
      document.getElementById("mobMenu").style.display = "block";
      setNav(false);
    } else {
      document.getElementById("mobMenu").style.display = "none";
      setNav(true);
    }
  };
  return (
    <div className="nav-ul-m">

      {/* navbar items to show */}
      <i className="fa fa-bars icon-bar  " aria-hidden="true"  id="icon-nav" onClick={()=>mobMenu()} ></i>
      <div className="moblie-ul" id="mobMenu">
        <NavLink
          to=""
          onClick={()=>mobMenu()}
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
          onClick={()=>mobMenu()}
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
  );
};

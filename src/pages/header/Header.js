import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/wiki-logo.png";

import "./header.css";

export default function Header() {
  return (
    <>
      <nav className="  nav    ">
        <div className=" nav-logo ">
          <img src={logo} alt="logo" className=" h-10  " />
        </div>
        <div className=" nav-ul  ">
          {/* navbar items to show */}

          <NavLink
            to=""
            className="nav-li"
            style={({ isActive }) => ({
              pointerEvents: isActive ? "none" : "",
              borderBottom: isActive ? "1px solid white" : "",
            })}
          >
            home
          </NavLink>
          <NavLink
            to="/docs"
            className="nav-li"
            style={({ isActive }) => ({
              pointerEvents: isActive ? "none" : "",
              borderBottom: isActive ? "1px solid white" : "",
            })}
          >
            documentation
          </NavLink>
        </div>
      </nav>
    </>
  );
}

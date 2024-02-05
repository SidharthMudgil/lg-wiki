import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/wiki-logo.png"

import "./header.css";

export default function Header() {
  return (
    <>
  
      <nav className="  nav    ">
      <div className=" nav-logo ">
          <img src= {logo} alt="logo" className=" h-10  " />
        </div><div className=" nav-ul  ">
  

          <NavLink
            to=""
            className="nav-li"
            style={({ isActive }) => ({
              borderBottom: isActive ? '1px solid white': ''
          
            })}
          >
            home
          </NavLink>
          <NavLink
            to="/docs"
            className="nav-li"
            style={({ isActive }) => ({
            
              borderBottom: isActive ? '1px solid white': ''
            })}
          >
            documentation
          </NavLink>
          <NavLink
            to="/arc"
            className="nav-li"
            style={({ isActive }) => ({
              borderBottom: isActive ? '1px solid white': ''

        
            })}
          >
           architecture
          </NavLink>
        </div>
      




     
      </nav>
    </>
  );
}

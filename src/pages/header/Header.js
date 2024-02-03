import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/wiki-logo.png"

import "./Header.css";

export default function Header() {
  return (
    <>
  
      <nav className="  nav  w-full font-semibold   ">
      <div className=" nav-logo ">
          <img src= {logo} alt="logo" className=" h-10  " />
        </div><div className=" nav-ul  ">
        <ul className="   justify-center items-center flex space-x-11 py-4 px-4 ">
       
          <li className="nav-li">
            <Link to="">Home</Link>
          </li>
          <li className="nav-li">
            <Link to="/docs">documentation </Link>
          </li>

          <li className="nav-li">
            <Link to="/arc">architecture</Link>
          </li>

        </ul></div>
      </nav>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/wiki-logo.png"

import "./header.css";

export default function Header() {
  return (
    <>
      <nav className="  nav font-semibold  b    text-lg ">
        <div className="float-left py-2  px-5">
          <img src= {logo} alt="logo" className=" h-10  " />
        </div>
        <ul className="flex justify-center space-x-11 items-center py-4 px-4 ">
          <li className="nav-li">
            <Link to="">Home</Link>
          </li>
          <li className="nav-li">
            <Link to="/docs">documentation </Link>
          </li>

          <li className="nav-li">
            <Link to="/arc">architecture</Link>
          </li>

        </ul>
      </nav>
    </>
  );
}

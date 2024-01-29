import React from "react";
import { Link } from "react-router-dom";
import LogoLg from "./lg_logo.png";
import "./header.css";

export default function Header() {
  return (
    <>
      <nav className="  nav font-semibold  b    text-lg ">
        <div className="float-left py-2  px-5">
          <img src= {LogoLg} alt="logo" className="w-10 h-10  " />
        </div>
        <ul className="flex justify-center space-x-11 items-center py-4 px-4 ">
          <li className="nav-li">
            <Link to="">Home</Link>
          </li>
          <li className="nav-li">
            <Link to="/docs">documentaion </Link>
          </li>

          <li className="nav-li">
            <Link to="/arc">architecture</Link>
          </li>

        </ul>
      </nav>
    </>
  );
}

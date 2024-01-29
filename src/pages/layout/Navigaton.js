import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigaton() {
  function menubar(x) {
    let id = document.getElementById(x);
    let dis = getComputedStyle(id);
    if (dis.display == "none") {
      document.getElementById(x).style.display = "block";
    } else {
      document.getElementById(x).style.display = "none";
    }
  }
  return (
    <div>

      <div className="left float-left h-screen ">
        {/* <p className="py-1"> Get Started </p> */}

        <ul className="menu ">
          <li >
            <input
              type="search"
              placeholder="Search..."
              className="rounded-xl  w-52 h-11 search  "
              accessKey="k"
            />
          </li>
          <li
            onClick={() => {
              let id = 1;
              menubar(id);
            }}
            className="py-1 menu-ul "  >
            installition
            <i className="fa fa-caret-down px-3" aria-hidden="true"></i>

            <ul id="1" className="menuex">
              <li className="menutab"> <Link to='nav' >demo text</Link></li>
              <li className="menutab"><Link to='/' >demo text</Link></li>
            </ul>
          </li>
          <li
            onClick={() => {
              let id = 2;
              menubar(id);
            }}
            className="py-1  menu-ul "
          >
            installition
            <i className="fa fa-caret-down px-3" aria-hidden="true"></i>

            <ul id="2" className="menuex">
              <li className="menutab"><Link to='' >demo text</Link></li>
              <li className="menutab" ><Link to='' >demo text</Link></li>
            </ul>
          </li>
          <li onClick={() => {
            let id = 3;
            menubar(id);
          }}
            className="py-1 menu-ul ">
            Quickstart
            <i className="fa fa-caret-down px-3" aria-hidden="true"></i>
            <ul id="3" className="menuex">
              <li className="menutab" ><Link to='' >demo text</Link> </li>

              <li className="menutab"> <Link to='' >demo text</Link> </li>
            </ul>
          </li>
        </ul>
      </div>

    </div>
  );
}

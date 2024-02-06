import React, { useRef, useEffect } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigaton() {

  
  // function for ctrl k feature

  const inputRef = useRef(null);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        inputRef.current.focus();
        document.getElementById("search").style.width = "15rem";
        document.getElementById("search").style.borderRadius = "25px";
        document.getElementById("icon").style.display = "none";
        document.getElementById("iconsub").style.display = "none";
        document.getElementById("iconsubk").style.display = "none";
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  //li closing open function

  function menubar(x) {
    let id = document.getElementById(x);
    let dis = getComputedStyle(id);
    if (dis.display === "none") {
      document.getElementById(x).style.display = "block";
    } else {
      document.getElementById(x).style.display = "none";
    }
  }
  return (
    <div>
      <div className="left float-left h-screen ">
        <ul className="menu ">
          <li>
            <div className=" menu-search-div">
              <span className="menu-search-icon" id="icon">
                {" "}
                <i className="fas fa-search"></i>{" "}
              </span>
              <input
                type="search "
                placeholder="Search..."
                className="  search menu-search focus:outline-none  "
                ref={inputRef}
                onFocus={() => {
                  document.getElementById("search").style.width = "15rem";
                  document.getElementById("search").style.borderRadius = "25px";
                  document.getElementById("icon").style.display = "none";
                  document.getElementById("iconsub").style.display = "none";
                  document.getElementById("iconsubk").style.display = "none";
                }}
                id="search"
              />
              <span className="search-img">
                <svg
                  width="25"
                  height="20"
                  className="search-img-icon"
                  id="iconsub"
                >
                  <path
                    d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953"
                    stroke-width="1.2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="square"
                  ></path>
                </svg>

                <span className="search-img-icon " id="iconsubk">
                  k
                </span>
              </span>
            </div>
          </li>


          {/* content title and subtitle to written here  */}

          <li
            onClick={() => {
              let id = 1;
              menubar(id);
            }}
            className="py-1 menu-ul "
          >
            installition
            <i className="fa fa-caret-down px-3" aria-hidden="true"></i>
            <ul id="1" className="menuex">
              <li className="menutab">
                {" "}
                <Link to="nav">demo text</Link>
              </li>
              <li className="menutab">
                <Link to="/">demo text</Link>
              </li>
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
              <li className="menutab">
                <Link to="">demo text</Link>
              </li>
              <li className="menutab">
                <Link to="">demo text</Link>
              </li>
            </ul>
          </li>
          <li
            onClick={() => {
              let id = 3;
              menubar(id);
            }}
            className="py-1 menu-ul "
          >
            Quickstart
            <i className="fa fa-caret-down px-3" aria-hidden="true"></i>
            <ul id="3" className="menuex">
              <li className="menutab">
                <Link to="">demo text</Link>{" "}
              </li>

              <li className="menutab">
                {" "}
                <Link to="">demo text</Link>{" "}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

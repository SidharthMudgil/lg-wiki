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
         
                  document.getElementById("iconsub").style.display = "none"; 
                  document.getElementById("iconsubk").style.display = "none";
                }}
                id="search"
              />
              <span className="search-img">
              <span className="search-img-icon  nav-search ctrl-key" id="iconsub">
                  ctrl
                </span>

                <span className="search-img-icon nav-search k-key" id="iconsubk">
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
                <Link to="/docs/title">demo text</Link>
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

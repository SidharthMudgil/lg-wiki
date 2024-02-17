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
        //   document.getElementById("iconsub").style.display = "none";
        // document.getElementById("iconsubk").style.display = "none";
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
    <>
      <div className="left float-left h-screen">
        <div className="menu-search-div mb-3">
          <span className="menu-search-icon" id="icon">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </span>
          <input
            type="search"
            placeholder="Search..."
            className="search menu-search focus:outline-none"
            ref={inputRef}
            onFocus={() => {
            }}
            id="search"
          />
        </div>

        <ul className="menu">
          <li className="py-1  menu-ul">
            <Link to="/docs/arc">architecture</Link>
          </li>

          <li className="py-1 menu-ul">
            <Link to="/input">rig installation</Link>
          </li>

          <li className="py-1  menu-ul">
            <Link to="/input">Control Commands</Link>
          </li>

        </ul>
      </div>
    </>
  );
}

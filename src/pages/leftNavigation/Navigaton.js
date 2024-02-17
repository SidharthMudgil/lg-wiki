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
        <div className="menu-search-div">
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

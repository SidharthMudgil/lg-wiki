import React, { useRef, useEffect, useState } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigaton() {

  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        inputRef.current.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    menubar();
  };

  function menubar() {
    const items = document.querySelectorAll(".menu-ul");
    items.forEach((item) => {
      const linkText = item.textContent.toLowerCase();
      if (linkText.includes(inputValue.toLowerCase())) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
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
            onChange={handleChange}
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

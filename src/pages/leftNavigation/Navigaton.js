import React, { useRef, useEffect, useState } from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { Query } from "appwrite";
import uploadService from "../../appWrite/services/uplaod";

export default function Navigaton() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const [fetchTitle, setfetchTitle] = useState([]);

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
  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const queries = [Query.equal("status", "active")];
      setfetchTitle([]);
      const response = await uploadService.getPosts(queries);
      const document = response.documents;
      setfetchTitle(document);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
            <NavLink
              to="/docs/arc"
              style={({ isActive }) => ({
                color: isActive ? "#f5a942" : "",
              })}
            >
              architecture
            </NavLink>
          </li>
          <li className="py-1  menu-ul">
            <NavLink
              to="/docs/rig"
              style={({ isActive }) => ({
                color: isActive ? "#f5a942" : "",
              })}
            >
              rig installation
            </NavLink>
          </li>
          <li className="py-1  menu-ul">
            <NavLink
              to="/docs/control"
              style={({ isActive }) => ({
                color: isActive ? "#f5a942" : "",
              })}
            >
              Control Commands
            </NavLink>

         
          </li>
          {fetchTitle && fetchTitle.map((title) => {
            return (
              <li className="py-1  menu-ul">
                <NavLink key={fetchTitle.id}
                  to="/docs/dynamic"
                  style={({ isActive }) => ({
                    color: isActive ? "#f5a942" : "",
                  })}
                >
                 {title.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

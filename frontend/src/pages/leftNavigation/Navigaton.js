import React, { useRef, useEffect, useState } from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

import { Query } from "appwrite";
import uploadService from "../../appWrite/services/uplaod";
import { NavHashLink } from "react-router-hash-link";

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
    console.log(inputValue);
    setInputValue(e.target.value.toLowerCase());
    menubar(inputValue);
  };

  function menubar(inputValue) {
    const items = document.querySelectorAll(".menu-ul");

    items.forEach((item) => {
      const linkText = item.textContent.toLowerCase();
      if (inputValue.trim() === "") {
        item.style.display = "block"; // Display all items when inputValue is empty
      } else {
        if (linkText.includes(inputValue.toLowerCase())) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    });
  }

  const [activeLink, setActiveLink] = useState(null);
  const [previousLink, setPreviousLink] = useState(null);

  const handleNavClick = (id) => {
    setPreviousLink(activeLink); // Store the previous active link
    setActiveLink(id); // Set the new active link
  };

  return (
    <>
      <div className="left float-left h-screen">
        <div className="menu-search-div">
          <input
            type="search"
            placeholder="Search..."
            className="search menu-search focus:outline-none"
            ref={inputRef}
            onChange={(event) => handleChange(event)}
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
          {fetchTitle &&
            fetchTitle.map((title) => {
              return (
                <li className="py-1  menu-ul" key={fetchTitle.id}>
                  {/* <Link
                    key={fetchTitle.id}
                    to={`/docs/dynamic#${title.title}`}
                    id={`nav${title.title}`}
                    onClick={() => handleNavClick(`nav${title.title}`)}
                    smooth
                    style={{
                      color:
                        activeLink === `nav${title.title}` ? '#f5a942' : // Apply red if it's active
                        previousLink === `nav${title.title}` ? '' : '' // Apply black if it was previously active, otherwise blue
                    }}

                  >
                    {title.title}
                  </Link> */}
                    <NavHashLink
                    key={title.id}
                    to={`/docs/dynamic#${title.title}`}
                    id={`nav${title.title}`}
                    onClick={() => console.log("Clicked:", title.title)}
                    style={{ color: inputValue ? (title.title.toLowerCase().includes(inputValue) ? "#f5a942" : "") : "" }}
                  >
                    {title.title}
                  </NavHashLink>
                </li>
              );
            }
            )}
        </ul>
      </div>
    </>
  );
}

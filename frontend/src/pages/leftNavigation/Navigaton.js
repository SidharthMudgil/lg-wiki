import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Query } from "appwrite";
import "./Navigation.css";
import uploadService from "../../appWrite/services/uplaod";
import { HashLink as Link } from "react-router-hash-link";

export default function Navigation() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const [fetchTitle, setFetchTitle] = useState([]);
  const location = useLocation();

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

  useEffect(() => {
    // Programmatic scroll on initial render and after redirection
    const targetHash = location.hash;
    if (targetHash) {
      const targetSection = document.getElementById(targetHash.substring(1));
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);

  const fetchContent = async () => {
    try {
      const queries = [Query.equal("status", "active")];
      const response = await uploadService.getPosts(queries);
      const documents = response.documents;
      setFetchTitle(documents);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const handleNavClick = (id) => {
    // Handle navigation click if needed
  };

  return (
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
        <li className="py-1 menu-ul">
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
          fetchTitle.map((title) => (
            <li className="py-1 menu-ul" key={title.$id}>
              <Link
                key={title.$id}
                to={`/docs/dynamic#${title.$id}`}
                id={`nav${title.$id}`}
                onClick={() => handleNavClick(`${title.$id}`)}
                activeClassName="active-link"
                activeStyle={{ color: "red" }}
              >
                {title.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

import React, { useRef, useEffect, useState } from "react";
import { NavLink, } from "react-router-dom";
import { Query } from "appwrite";
import "./Navigation.css";
import uploadService from "../../appWrite/services/uplaod";
import { HashLink as Link } from "react-router-hash-link";

export default function Navigation() {
  const inputRef = useRef(null);
  const [fetchTitle, setFetchTitle] = useState([]);

  const [clickedLinkId, setClickedLinkId] = useState(null); 
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
      const response = await uploadService.getPosts(queries);
      const documents = response.documents;
      setFetchTitle(documents);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleChange = (e) => {
    menubar(e.target.value);
};

function menubar(inputValue) {
    const items = document.querySelectorAll(".menu-ul");
    items.forEach((item) => {
        const linkText = item.textContent.toLowerCase();
        if (inputValue.trim() === "") {
            // If input value is empty or contains only whitespace characters, display all items
            item.style.display = "block";
        } else {
            if (linkText.includes(inputValue.toLowerCase())) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        }
    });
}



  const handleNavClick = (id) => {
    setClickedLinkId(id); 
  };

  return (
    <div className="left float-left h-screen ri "id="leftn">
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
            id="arc"
            onClick={() => handleNavClick(`arc`)}

            className={clickedLinkId === "arc" ? "active-link" : ""} 
        
          >
            architecture
          </NavLink>
        </li>
        <li className="py-1  menu-ul">
          <NavLink
            to="/docs/rig"
            id="rig"
            onClick={() => handleNavClick(`rig`)}
            className={clickedLinkId === "rig" ? "active-link" : ""} 
        
          >
            rig installation
          </NavLink>
        </li>
        <li className="py-1  menu-ul">
          <NavLink
            to="/docs/control"
            id="control"
            onClick={() => handleNavClick(`control`)}
            className={clickedLinkId === "control" ? "active-link" : ""} // Apply active class based on clicked link
        
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
                className={clickedLinkId === title.$id ? "active-link" : ""} 
            
              >
                {title.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

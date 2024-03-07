import React, { useRef, useEffect, useState } from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

import { Query } from "appwrite";
import uploadService from "../../appWrite/services/uplaod";
import { HashLink as Link, NavHashLink } from "react-router-hash-link";
import { colorBrewer } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Navigaton() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const [fetchTitle, setfetchTitle] = useState([]);
  const [active ,setactive]=useState(true);

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
    console.log(inputValue)
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
  // const  isactive =(id) =>{
  //   active ? (document.getElementById(id).style.color = "green",setactive(false))
  //   :(document.getElementById(id).style.color = "white")}
  

  return (
    <>
      <div className="left float-left h-screen">
        <div className="menu-search-div">
          <input
            type="search"
            placeholder="Search..."
            className="search menu-search focus:outline-none"
            ref={inputRef}
            onChange={event =>handleChange(event)}
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
              <li className="py-1  menu-ul"  key={fetchTitle.id}>
                <NavHashLink  key={fetchTitle.id}
                     to={`/docs/dynamic#${title.title}`}
                     id={`nav${title.title}`}
                    //  onClick={(title.title) => { isactive(`nav${title.title}`) }}

                smooth





                >
                 {title.title}
                </NavHashLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

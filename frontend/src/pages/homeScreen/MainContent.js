import lg from "../../assets/lg-logo.svg";

import Contributor from "./Contributor";
import "./MainContent.css";
import InfoOverview from "./InfoOverview";
import React, { useRef, useEffect, useState } from "react";
import uploadService from "../../appWrite/services/uplaod";
import { Query } from "appwrite";
import { HashLink as Link } from "react-router-hash-link";
export default function MainContent() {
  const [data, setData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  // ctrl k feature

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
  useEffect(() => {
    
    fetchData();
  }, []);

  //tempory data for search

  const fetchData = async () => {
    try {
      const queries = [Query.equal("status","active" )];
      // Assuming uploadService is defined elsewhere
      const response = await uploadService.getPosts(queries);
      const document = response.documents;
      setData(document);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
  
    // Check if data exists before filtering
    if (data) {
      const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm)
      );
  
      // Set suggestions based on filtered data
      if (searchTerm !== "") {
        setSuggestions(filteredData);
      } else {
        setSuggestions([]);
      }
    }
  };
  
  


  return (
    <>
   
      <div className="background  " >
      <div >
        <div className="home  ">
          {/* main logo */}
          <div className=" basis-[100%] ">
            <img src={lg} alt="liquild GALAXY" className="home-logo   " />
          </div>
        </div>
        <div className=" search-main w-full">
          <div className="search-box">
            <span className="search-icon  " id="icon">
              {" "}
              <i className="fas fa-search"></i>{" "}
            </span>
            <input
              type="search "
              placeholder="Search..."
              className="  search focus:outline-none "
              ref={inputRef}
              onChange={handleSearch}
            />

            <div className="suggestion">
              {suggestions.map((item, index) => { 
                return (<Link to={`/docs/dynamic#${item.$id}`} key={item.$id}><div className="suggestion-item"  > {item.title}</div></Link>);
              })}

            </div>

          </div>

        </div>

        <p className=" basic-info">
          Welcome to LG Wiki, your one-stop web app for all things Liquid
          Galaxy! Discover simplified information and documentation covering the
          ins and outs of Liquid Galaxy. Find easy-to-follow guides on
          implementing various functionalities and working seamlessly with
          Liquid Galaxy technology. LG Wiki provides clear instructions and
          insights into the architecture, making it your go-to resource for both
          beginners and enthusiasts.
        </p>

        {/* Informatio of liquidgalaxy   */}
        <InfoOverview />

        {/* contributer card info  */}
        <Contributor />
      </div>
      </div>
    </>
  );
}

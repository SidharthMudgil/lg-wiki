import lg from "../../assets/lg-logo.svg";

import Contributor from "./Contributor";
import "./MainContent.css";
import InfoOverview from "./InfoOverview";
import React, { useRef, useEffect, useState } from "react";

export default function MainContent() {
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

  //tempory data for search
  const data = [
    "Installation",
    "LG Commands",
    "Set Slave",
    "Clean KMLs and Logo",
    "Reboot Liquid Galaxy",
    "Relaunch Liquid Galaxy",
    "Send KMLs",
  ];

  //seach suggestion function
  const [Suggest, setSuggest] = useState([]);
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();

    // Filter the data based on the search term
    const filteredData = data.filter((item) =>
      item.toLowerCase().includes(searchTerm)
    );

    // Perform any action with filteredData (e.g., display it)
    if (searchTerm !== "") {
      setSuggest(filteredData);
    } else {
      setSuggest([]);
    }
  };

  return (
    <>
      <div className="background">
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
              {Suggest.map((item, index) => {
                return (<div className="suggestion-item">{item}</div>);
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
    </>
  );
}

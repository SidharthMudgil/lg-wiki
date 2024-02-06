import lg from "../../assets/lg-logo.svg";

import Contributor from "./Contributor";
import "./MainContent.css";
import InfoOverview from "./InfoOverview";
import React, { useRef, useEffect } from "react";

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

  return (
    <>
      <div className="background">
        <div className="home  ">
           {/* main logo */}
          <div className="py-20 basis-[100%] ">
            <img src={lg} alt="liquild GALAXY" className="home-logo   " />
          </div>
        </div>
        <div className=" search-main ">
          <span className="search-icon  " id="icon">
            {" "}
            <i className="fas fa-search"></i>{" "}
          </span>
          <input
            type="search "
            placeholder="Search..."
            className="  search focus:outline-none  "
            ref={inputRef}
          />
          <span className="search-img">

            {/* svg for ctrl and k keys  */}

            <svg width="25" height="20" className="search-img-icon">
              <path
                d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953"
                stroke-width="1.2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="square"
              ></path>
            </svg>

            <span className="search-img-icon ">k</span>
          </span>
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

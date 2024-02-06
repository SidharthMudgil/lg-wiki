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
          />
         {/* <span className="search-img">

             svg for ctrl and k keys  
            <span className="search-img-icon ctrl-key ">ctrl</span>
       

            <span className="search-img-icon k-key">k</span>
          </span>
*/}
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

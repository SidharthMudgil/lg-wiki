import lg from "../../assets/lg-logo.png";

import Contributor from "./Contributor";
import "./MainContent.css";
import InfoOverview from "./InfoOverview";
import React, { useRef, useEffect } from "react";

export default function MainContent() {
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
          <div className="py-20 basis-[100%] ">
            <img src={lg} alt="liquild GALAXY" className="home-logo   " />
          </div> 
          </div>
         <div className=" search-main ">
            <input
              type="search "
              placeholder="Search..."
              className="  search  border_start  focus:outline-none  "
              ref={inputRef}
            />
            <span className="search-icon search-icon-main border_end   " id="icon">
              {" "}
              <i className="fas fa-search"></i>{" "}
            </span>
            </div>

          <p className=" basic-info">
            Welcome to LG Wiki, your one-stop web app for all things Liquid
            Galaxy! Discover simplified information and documentation covering
            the ins and outs of Liquid Galaxy. Find easy-to-follow guides on
            implementing various functionalities and working seamlessly with
            Liquid Galaxy technology. LG Wiki provides clear instructions and
            insights into the architecture, making it your go-to resource for
            both beginners and enthusiasts.
          </p>
      

        {/* Informatio of liquidgalaxy   */}
        <InfoOverview />
       


        {/* <!-- contributer card info --> */}
          <Contributor />
        
      </div>
    </>
  );
}

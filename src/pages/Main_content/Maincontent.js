

import lg from "../../assets/lg-logo.png"

import Contribute from "./Contribute";
import "./Main_content.css";
import InfoOverview from "./InfoOverview";
import React, { useRef, useEffect } from "react";


export default function Maincontent() {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        inputRef.current.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>


      <div className="back">

        <div className="  grid justify-items-center py-16">
          <div className="py-4 back-logo">
            <img
              src={lg}
              alt="liquild GALAXY"
              className="back-logo w-100 h-100 py-3 my-2 "

            />
          </div>
    <div>
          <input
            type="search "
            placeholder="Search..."
            className=" search_main  search  border_start  focus:outline-none"
            ref={inputRef}

          />
            <span className="add_icon border_end   " id="icon"> <i className="fas fa-search"></i>  </span>
</div>
          <p className=" basic-info">
            Welcome to LG Wiki, your one-stop web app for all things Liquid Galaxy! Discover simplified information and documentation covering the ins and outs of Liquid Galaxy. Find easy-to-follow guides on implementing various functionalities and working seamlessly with Liquid Galaxy technology. LG Wiki provides clear instructions and insights into the architecture, making it your go-to resource for both beginners and enthusiasts.
          </p>
        </div>

        {/* <!-- contributer card info --> */}
        <InfoOverview />
        <div className="pic">


          <Contribute />
        </div>

      </div>
    </div>
  );
}

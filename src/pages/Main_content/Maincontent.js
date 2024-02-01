

import lg from "../../assets/lg-logo.png"

import Contribute from "./Contribute";
import "./Main_content.css";
import InfoOverview from "./InfoOverview";
import React ,{ useRef,useEffect } from "react";


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

          <input
            type="search "
            placeholder="Search..."
            className=" search_main  search px-2 focus:outline-none"
            ref={inputRef}
         
          />
          <p className=" basic-info py-3 my-2">
          Welcome to LG-Wiki, <br/>your go-to resource for all things Liquid Galaxy!<br/> LG-Wiki is your gateway to understanding, exploring, and maximizing the potential of Liquid Galaxy.
          </p>
        </div>

        {/* <!-- contributer card info --> */}
       <InfoOverview/> 
       <div className="pic">   
    

      <Contribute />
      </div>
  
      </div>
    </div>
  );
}

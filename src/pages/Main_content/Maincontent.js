

import lg from "../lg.png";
import Contribute from "./Contribute";
import "./Main_content.css";
import Overview from "./Overview";

export default function Maincontent() {
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
            type="search"
            placeholder="Search..."
            className="rounded-xl  w-96 h-11 search px-2 focus:outline-none"
            accessKey="k"
          />
          <p className=" basic-info py-3 my-2">
          Welcome to LG-Wiki, your go-to resource for all things Liquid Galaxy! LG-Wiki is your gateway to understanding, exploring, and maximizing the potential of Liquid Galaxy.
          </p>
        </div>

        {/* <!-- contributer card info --> */}
       <Overview/> 
       <div className="pic">   
    

      <Contribute />
      </div>
  
      </div>
    </div>
  );
}



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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book . It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. <br />
            Go read our unique post at Coding Internships
          </p>
        </div>

        {/* <!-- contributer card info --> */}
       <Overview/>  
      <Contribute />
      
      </div>
    </div>
  );
}

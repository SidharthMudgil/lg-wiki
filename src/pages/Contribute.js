import { useState } from "react";
import './Contributor.css'
import dash from "./dash.png";

export default function Contribute() {
  const [Contributer, setContributor] = useState([
    {
      name: "dev",
      des: "contributor gsoc",
      github: "http://liquidgalaxy.eu",
      gmail: "http://liquidgalaxy.eu",
      insta: "http://liquidgalaxy.eu",
    },
    {
      name: "dev",
      des: "contributor gsoc",
      github: "http://liquidgalaxy.eu",
      gmail: "http://liquidgalaxy.eu",
      insta: "http://liquidgalaxy.eu",
    },
    {
      name: "dev",
      des: "contributor gsoc",
      github: "http://liquidgalaxy.eu",
      gmail: "http://liquidgalaxy.eu",
      insta: "http://liquidgalaxy.eu",
    },
    {
      name: "dev",
      des: "contributor gsoc",
      github: "http://liquidgalaxy.eu",
      gmail: "http://liquidgalaxy.eu",
      insta: "http://liquidgalaxy.eu",
    },
    {
      name: "dev",
      des: "contributor gsoc",
      github: "http://liquidgalaxy.eu",
      gmail: "http://liquidgalaxy.eu",
      insta: "http://liquidgalaxy.eu",
    },
    {
      name: "dev",
      des: "contributor gsoc",
      github: "http://liquidgalaxy.eu",
      gmail: "http://liquidgalaxy.eu",
      insta: "http://liquidgalaxy.eu",
    },
    {
      name: "dev",
      des: "contributor gsoc",
      github: "http://liquidgalaxy.eu",
      gmail: "devgadani43@gmail.com",
      insta: "http://liquidgalaxy.eu",
    },
    {
      name: "dev",
      des: "contributor gsoc",
      github: "http://liquidgalaxy.eu",
      gmail: "http://liquidgalaxy.eu",
      insta: "http://liquidgalaxy.eu",
    },
    {
      name: "dev",
      des: "contributor gsoc",
      github: "http://liquidgalaxy.eu",
      gmail: "http://liquidgalaxy.eu",
      insta: "http://liquidgalaxy.eu",
    },
    {
      name: "dev",
      des: "contributor gsoc",
      github: "http://liquidgalaxy.eu",
      gmail: "http://liquidgalaxy.eu",
      insta: "http://liquidgalaxy.eu",
    },
  ]);

  return (
    <div className="  pic grid  grid-cols-5 ">
      {Contributer.map((item) => {
        return (
          <div className="contributor  m-5 shadow-2xl  rounded-xl py-5 ">
            <div className=" w-40 py-1 m-2 mx-auto">
              <img
                src={dash}
                alt="liquild GALAXY"
                className=" w-full rounded-full"
              />
            </div>

            <div className="name text-center p-1"> {item.name} </div>
            <div className="des text-center p-1"> {item.des} </div>
        
          </div>
        );
      })}
    </div>
  );
}

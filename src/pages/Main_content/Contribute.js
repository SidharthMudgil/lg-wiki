import { useState } from "react";
import "./Contributor.css";
import dash from "../dash.png";

export default function Contribute() {
  const Contributer = [
    {
      name: "dev2",
      des: "contributor gsoc",
      github: "http://liquidgalaxy.eu",
      gmail: "http://liquidgalaxy.eu",
      insta: "http://liquidgalaxy.eu",
    },
    {
      name: "dev3",
      des: "contributorknknknknklll gsoc",
      github: "http://liquidgalaxy.eu",
      gmail: "http://liquidgalaxy.eu",
      insta: "http://liquidgalaxy.eu",
    },
    {
      name: "dev4",
      des: "contributornkllbbn.mh gsoc",
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
    {
      name: "dev",
      des: "contributor knknk gsoc",
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
      des: "contributorknknknknklll gsoc",
      github: "http://liquidgalaxy.eu",
      gmail: "http://liquidgalaxy.eu",
      insta: "http://liquidgalaxy.eu",
    },
    {
      name: "dev",
      des: "contributornkllbbn.mh gsoc",
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
    {
      name: "dev",
      des: "contributor knknk gsoc",
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
      des: "contributorknknknknklll gsoc",
      github: "http://liquidgalaxy.eu",
      gmail: "http://liquidgalaxy.eu",
      insta: "http://liquidgalaxy.eu",
    },
    {
      name: "dev",
      des: "contributornkllbbn.mh gsoc",
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
    {
      name: "dev",
      des: "contributor knknk gsoc",
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
      des: "contributorknknknknklll gsoc",
      github: "http://liquidgalaxy.eu",
      gmail: "http://liquidgalaxy.eu",
      insta: "http://liquidgalaxy.eu",
    },
    {
      name: "dev",
      des: "contributornkllbbn.mh gsoc",
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
  ];
  const Nine = () => {
    const result = [];
    let Margin = "";
    let chunkSize = 12;
    let flag = 0;
    for (let startIndex = 0; startIndex < Contributer.length; ) {
      if (chunkSize === 12) {
        chunkSize++;
        Margin = "firstpart";
      } else {
        Margin = "secondpart";
        chunkSize--;
      }
      // const chunkSize = startIndex % 2 === 0 ? 8 : 9;

      console.log(chunkSize);
      const chunk = Contributer.slice(startIndex, startIndex + chunkSize);

      // Use a unique key for each chunk and each item in the chunk
      result.push(
        <div className={Margin} key={`${startIndex}`}>
          {chunk.map((item) => (
            <div className="container">
              {" "}
              <img src={dash} alt="liquild GALAXY" className="con " />
              <div className="label">
                <div className="text">dash</div>
              </div>
            </div>
          ))}
        </div>
      );
      console.log(startIndex);

      startIndex += chunkSize;
    }

    return result;
  };

  return <>{Nine()}</>;
}

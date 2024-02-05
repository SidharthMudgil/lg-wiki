import React from "react";
import "./InfoOverview.css";

import opensource from "../../assets/opensource.svg";
import rig from "../../assets/rig.png";
import technology from "../../assets/technologies.svg";
import usecases from "../../assets/usecases.svg";

export default function InfoOverview() {
  return (
    <>
      <div className=" overview">
        <div className="overview-flex">
          <div className="overview-text-box">
            <div className="overview-text ">
              Liquid Galaxy offers a captivating panoramic system powered by
              multiple computers, providing
            a seamless and engaging visual experience{" "}
            </div>
          </div>
          <div className="overview-image">
            <img src={rig}    alt="image1" />
          </div>
        </div>
        <div className="overview-flex">
          <div className="overview-image">
            <img src={opensource} className="" alt="image1" />
          </div>
          <div className="overview-text-box">
            <div className="overview-text ">
              {" "}
              Beyond Google Earth, Liquid Galaxy integrates 
              open source software to enhance administration 
              and support various applications, enriching the panoramic
              environment.
            </div>
          </div>
        </div>
        <div className="overview-flex">
          <div className="overview-text-box">
            <div className="overview-text ">
              {" "}
              Liquid Galaxy serves as a Geographic Information System (GIS) and
              finds applications in education, tourism,
                3D visualization, data handling, and gaming.
               Its versatility makes it a powerful 
              tool across diverse industries.{" "}
            </div>
          </div>
          <div className="overview-image">
            <img src={usecases}  alt="image1" />
          </div>
        </div>
        <div className="overview-flex">
          <div className="overview-image">
            <img src={technology}  alt="image1" />
          </div>{" "}
          <div className="overview-text-box">
            <div className="overview-text ">
              {" "}
              The technology behind Liquid Galaxy
              <br /> includes Linux (Ubuntu LTS), Python,
              <br /> Node.js, Android, TensorFlow,
              <br /> and Flutter.{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

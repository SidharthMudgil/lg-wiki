import React from "react";
import "./infooverview.css";

import logo from "../../assets/lg-logo.svg"
import opensource from "../../assets/opensource.svg"
import rig from "../../assets/rig.png"
import technology from "../../assets/technologies.svg"
import usecases from "../../assets/usecases.svg"

export default function InfoOverview() {
  return (
    <div className="overview">
      <div className="overview-text-box">
        <div className="overview-text ">
          Liquid Galaxy offers a captivating panoramic system powered by
          multiple computers, providing<br/> a seamless and engaging visual
          experience{" "}
        </div>
      </div>
      <div className="overview-image">
        <img src={rig} className="w-full h-full"  alt="image1" />
      </div>
      <div className="overview-image">
        <img src={opensource} className="w-full h-full"  alt="image1" />
      </div>
      <div className="overview-text-box">
        <div className="overview-text ">
          {" "}
          Beyond Google Earth, Liquid Galaxy integrates <br/>open source software to
          enhance administration <br/>and support various applications, enriching the
          panoramic environment.
        </div>
      </div>
      <div className="overview-text-box">
        <div className="overview-text ">
          {" "}
          Liquid Galaxy serves as a Geographic Information System (GIS) and
          finds applications in education, tourism,<br/> 3D visualization, data
          handling, and gaming.<br/> Its versatility makes it a powerful <br/>tool across
          diverse industries.{" "}
        </div>
      </div>
      <div className="overview-image">
        <img src={usecases} className="w-full h-full" alt="image1"  />
      </div>
      <div className="overview-image">
        <img src={technology} className="w-full h-full"  alt="image1" />
      </div>{" "}
      <div className="overview-text-box">
        <div className="overview-text ">
          {" "}
          The technology behind Liquid Galaxy<br/> includes  Linux (Ubuntu LTS),
          Python,<br/> Node.js, Android, TensorFlow,<br/> and Flutter.{" "}
        </div>
      </div>
    </div>
  );
}


import React from "react";
import "./overview.css";
import logo from "../lg.png";

function Overview() {
  return (
    <div className="overview">
      <div className="overview-text-box">
        <div className="overview-text ">
          Liquid Galaxy offers a captivating panoramic system powered by
          multiple computers, providing a seamless and engaging visual
          experience{" "}
        </div>
      </div>
      <div className="overview-image">
        <img src={logo} className="w-full h-full" />
      </div>
      <div className="overview-image">
        <img src={logo} className="w-full h-full" />
      </div>
      <div className="overview-text-box">
        <div className="overview-text ">
          {" "}
          Beyond Google Earth, Liquid Galaxy integrates open source software to
          enhance administration and support various applications, enriching the
          panoramic environment.
        </div>
      </div>
      <div className="overview-text-box">
        <div className="overview-text ">
          {" "}
          Liquid Galaxy serves as a Geographic Information System (GIS) and
          finds applications in education, tourism, 3D visualization, data
          handling, and gaming. Its versatility makes it a powerful tool across
          diverse industries.{" "}
        </div>
      </div>
      <div className="overview-image">
        <img src={logo} className="w-full h-full" />
      </div>
      <div className="overview-image">
        <img src={logo} className="w-full h-full" />
      </div>{" "}
      <div className="overview-text-box">
        <div className="overview-text ">
          {" "}
          The technology behind Liquid Galaxy includes Linux (Ubuntu LTS),
          Python, Node.js, Android, TensorFlow, and Flutter.{" "}
        </div>
      </div>
    </div>
  );
}

export default Overview;

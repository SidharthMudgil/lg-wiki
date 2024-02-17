import React from "react";
import { Outlet } from "react-router-dom";
import Navigaton from "./Navigaton";

import Doc from "../documentation/Doc";


export default function Layout() {
  return (
    <>
      <div className="main h-screen ">
        <Navigaton />
        <div className="h-screen overflow-auto p-12">
        <Outlet />
        </div>
      </div>
    </>
  );
}

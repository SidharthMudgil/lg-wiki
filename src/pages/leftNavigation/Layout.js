import React from "react";
import { Outlet } from "react-router-dom";
import Navigaton from "./Navigaton";

import Doc from "../documentation/Doc";


export default function Layout() {
  return (
    <>
      <div className="main h-screen">
        <Navigaton />
        <Doc />
        <Outlet />
      </div>
    </>
  );
}

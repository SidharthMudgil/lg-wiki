import React from "react";
import { Outlet } from "react-router-dom";
import Navigaton from "./Navigaton";

export default function Layout() {
  return (
    <>
    <div className="main h-screen">
      <Navigaton />
      <Outlet />
      </div>
    </>
  );
}

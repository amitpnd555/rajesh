import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const MainContainerOutlet = () => {
  return (
    <div className="flex gap-2 flex-col ">
      <Header />
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainContainerOutlet;

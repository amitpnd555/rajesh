import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const MainContainerOutlet = () => {
  return (
    <div className=" py-2 px-1 md:py-1 flex gap-2 flex-col md:px-10">
      <Header />
      <Outlet/>
    </div>
  );
};

export default MainContainerOutlet;

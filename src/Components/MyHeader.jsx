import React from "react";
import { Outlet } from "react-router-dom";

const MyHeader = () => {
  return (
    <div className="w-full mt-8 px-8 ">
      <Outlet />
    </div>
  );
};

export default MyHeader;

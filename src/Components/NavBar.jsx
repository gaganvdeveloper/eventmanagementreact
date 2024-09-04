import { House, Image, LayoutGrid, SquarePlus } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="fixed  w-60 h-screen transition-all bg-violet-700 text-white pt-8 px-2 py-4 flex flex-col gap-6 shadow-lg shadow-black">
      <h1 className="text-2xl py-1 bg-orange-400 border font-bold shadow-lg shadow-violet-950 rounded-lg text-center">
        Event Manager
      </h1>

      <div className=" w-full flex gap-4 *:transition-all  flex-col *:px-2 *:border *:rounded-md *:border-violet-700 *:flex *:items-center *:gap-4 px-4 py-6 rounded-lg h-full border shadow-lg shadow-black">
        <NavLink
          className="hover:border-white  hover:bg-violet-800 hover:shadow-lg hover:shadow-gray-700 "
          to="/dashboard"
        >
          <House size={17} />
          Dashboard
        </NavLink>
        <NavLink
          className="hover:border-white hover:bg-violet-800 hover:shadow-lg hover:shadow-gray-700 "
          to="/all"
        >
          <LayoutGrid size={17} /> All Event
        </NavLink>
        <NavLink
          className="hover:border-white hover:bg-violet-800 hover:shadow-lg hover:shadow-gray-700 "
          to="/create"
        >
          <SquarePlus size={17} />
          Create Event
        </NavLink>
        <NavLink
          className="hover:border-white hover:bg-violet-800 hover:shadow-lg hover:shadow-gray-700 "
          to="/img"
        >
          <Image size={17} />
          Images
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;

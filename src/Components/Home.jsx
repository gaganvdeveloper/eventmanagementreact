import React from "react";
import NavBar from "./NavBar";
import MyHeader from "./MyHeader";

const Home = () => {
  return (
    <div>
      <div className="flex gap-10 bg-slate-800 text-white">
        <div className="w-60 h-screen"></div>
        <NavBar />
        <MyHeader />
      </div>
    </div>
  );
};

export default Home;

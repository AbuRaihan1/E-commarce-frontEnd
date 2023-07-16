import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h2 className="text-5xl">Header</h2>
      <Outlet></Outlet>
      <h2 className="text-5xl">Footer</h2>
    </div>
  );
};

export default Main;

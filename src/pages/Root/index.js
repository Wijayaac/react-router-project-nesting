import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar";

import { Sidebar } from "../../components/Sidebar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="page-wrapper">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Root;

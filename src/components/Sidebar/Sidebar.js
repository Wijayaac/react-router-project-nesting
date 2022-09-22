import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <h3>Dashboard</h3>

        <NavLink to="/members/add">
          <span>Add</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;

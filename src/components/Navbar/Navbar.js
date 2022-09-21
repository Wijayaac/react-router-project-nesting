import React from "react";
import { NavLink } from "react-router-dom";

import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.active : "")}
            to="/"
            end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.active : "")}
            to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.active : "")}
            to="/members">
            Members
          </NavLink>
        </li>
      </nav>
    </header>
  );
};

export default Navbar;

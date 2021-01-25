import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";


function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Vending Machine
      </NavLink>
      <NavLink exact to="/chips">
        Chips
      </NavLink>
      <NavLink exact to="/cheetos">
        Cheetos
      </NavLink>
      <NavLink exact to="/soda">
        Soda
      </NavLink>

    </nav>
  );
}

export default NavBar;
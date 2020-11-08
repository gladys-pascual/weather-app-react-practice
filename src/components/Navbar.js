import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="selected">
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

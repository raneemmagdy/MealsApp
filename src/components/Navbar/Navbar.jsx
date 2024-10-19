import React from "react";
import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="text-white">Yummy App</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink className="nav-link" to="/categories">
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/area">
              Area
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/ingredients">
              Ingredients
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

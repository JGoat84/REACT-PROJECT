import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <nav className="sidenav">
        <ul>

          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/Over18form">
              Over 18 Form
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/Under18Form">
              Under 18 Form
            </NavLink>
          </li>

        </ul>
      </nav>
    );
  }
}

export default NavBar;

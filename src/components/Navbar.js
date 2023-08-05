import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCoffee, faMicrophone, faCog } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <nav>
    <li>
      <NavLink to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
      </NavLink>
      <NavLink to="/id" />
    </li>
    <li><h1 className="text-3xl font-bold underline">Covid-19 Stats</h1></li>
    <li className="icon">
      <FontAwesomeIcon icon={faCoffee} />
      <FontAwesomeIcon icon={faMicrophone} />
      <FontAwesomeIcon icon={faCog} />
    </li>
  </nav>
);

export default Navbar;

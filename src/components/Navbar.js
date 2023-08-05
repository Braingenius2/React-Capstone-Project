import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const Navbar = () => {
  return (
    <nav>
      <li>
        <NavLink to="/">
          <FontAwesomeIcon icon={solid("arrow-left")} />
        </NavLink>
        <NavLink to="/id" />
      </li>
      <li><h1 className="title">Covid-19 Stats</h1></li>
      <li className="icon">
        <FontAwesomeIcon icon={icon({ name: 'coffee', family: 'sharp', style: 'solid' })} />
        <FontAwesomeIcon icon="fa-solid fa-microphone" />
        <FontAwesomeIcon icon="fa-solid fa-gear" />
      </li>

    </nav>
  );
};

export default Navbar;

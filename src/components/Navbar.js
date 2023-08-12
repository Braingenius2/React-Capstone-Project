import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faCog } from '@fortawesome/free-solid-svg-icons';
import { FiChevronLeft } from 'react-icons/fi';

const Navbar = ({ nav }) => (
  <nav className="flex items-center justify-between py-4 bg-pink-700">
    <li>
      <NavLink to={nav.path} text-white text-center text-lg>
        <FiChevronLeft className="inline-block mr-1" />
        { nav.logo }
      </NavLink>
      <NavLink to="/id" />
    </li>
    <li><h1 className="text-2xl font-bold">{ nav.pageTitle }</h1></li>
    <li className="flex gap-2">
      <FontAwesomeIcon icon={faMicrophone} className="text-white mr-2" />
      <FontAwesomeIcon icon={faCog} className="text-white mr-2" />
    </li>
  </nav>
);

Navbar.propTypes = {
  nav: PropTypes.shape({
    logo: PropTypes.node,
    path: PropTypes.string,
    pageTitle: PropTypes.string,
  }),
};

Navbar.defaultProps = {
  nav: {
    logo: null,
    path: '/',
    pageTitle: '',
  },
};

export default Navbar;

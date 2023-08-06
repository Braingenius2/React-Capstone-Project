import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faCog } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ nav }) => (
  <nav>
    <li>
      <NavLink to={nav.path}>
        { nav.logo }
      </NavLink>
      <NavLink to="/id" />
    </li>
    <li><h1 className="text-3xl font-bold underline">{ nav.pageTitle }</h1></li>
    <li>
      <FontAwesomeIcon icon={faMicrophone} />
      <FontAwesomeIcon icon={faCog} />
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

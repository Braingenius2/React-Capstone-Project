import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Continent = ({
  map, name, covidCases, index, columnIndex,
}) => {
  const isEvenRow = Math.floor(index / 2) % 2 === 0;
  const isLightPink = (isEvenRow && columnIndex === 0) || (!isEvenRow && columnIndex === 1);
  const backgroundColor = isLightPink ? 'bg-pink-600' : 'bg-pink-500';

  const continentName = name.replace(/\s/g, '-');

  return (
    <NavLink to={`${continentName}`} className={`p-4 ${backgroundColor}`}>
      <div>
        <div>arrow right img here</div>
      </div>
      <div>
        <img src={map} alt={name} />
      </div>
      <div>
        <h3>{ name }</h3>
        <p>
          { covidCases }
          {' '}
          Covid cases
        </p>
      </div>
    </NavLink>
  );
};

Continent.propTypes = {
  map: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  covidCases: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  columnIndex: PropTypes.number.isRequired,
};

export default Continent;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi';

jsx;

const Continent = ({
  map, name, covidCases, index, columnIndex,
}) => {
  const isEvenRow = Math.floor(index / 2) % 2 === 0;
  const isLightPink = (isEvenRow && columnIndex === 0) || (!isEvenRow && columnIndex === 1);
  const backgroundColor = isLightPink ? 'bg-pink-600' : 'bg-pink-500';

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const continentName = name.replace(/\s/g, '-');

  return (
    <NavLink
      to={`${continentName}`}
      className={`p-4 ${backgroundColor}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <div style={{ marginRight: '10px' }}>
        <FiArrowRightCircle />
      </div>
      <div>
        <img
          src={map}
          alt={name}
          style={{
            filter: isHovered ? 'opacity(1)' : 'opacity(0.7)',
          }}
        />
      </div>
      <div>
        <h3 className="text-3xl font-bold">{name}</h3>
        <p>
          {covidCases}
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

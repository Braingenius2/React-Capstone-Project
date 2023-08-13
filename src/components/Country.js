import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi';

const Country = ({
  flag, name, covidCases, index, columnIndex,
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
  const countryName = name.replace(/\s/g, '-');

  return (
    <NavLink
      to={`${countryName}`}
      className={`p-4 ${backgroundColor}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <img
          src={flag}
          alt={`flag of ${countryName}`}
          style={{
            filter: isHovered ? 'opacity(1)' : 'opacity(0.7)',
          }}
        />
      </div>
      <div>
        <h3>{name}</h3>
        <p>
          {covidCases}
          {' '}
          Covid Cases
        </p>
      </div>
      <div>
        <FiArrowRightCircle />
      </div>
    </NavLink>
  );
};

Country.propTypes = {
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  covidCases: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  columnIndex: PropTypes.number.isRequired,
};

export default Country;

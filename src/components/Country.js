import React from 'react';
import PropTypes from 'prop-types';

const Country = ({
  flag, name, covidCases,
}) => {
  const countryName = name.replace(/\s/g, '-');

  return (
    <a href={`${countryName}`}>
      <div>
        <img src={flag} alt={`flag of ${countryName}`} />
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
        <div>right arrow in circle here</div>
      </div>
    </a>
  );
};

Country.propTypes = {
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  covidCases: PropTypes.string.isRequired,
};

export default Country;

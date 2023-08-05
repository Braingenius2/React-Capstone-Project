import React from 'react';
import PropTypes from 'prop-types';

const Continent = ({ map, name, covidCases }) => {
  const continentName = name.replace(/\s/g, '-');

  return (
    <a href={`${continentName}/countries`}>
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
    </a>  
  );
};

Continent.propTypes = {
  map: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  covidCases: PropTypes.string.isRequired,
};

export default Continent;

import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ imageSrc, name, details }) => (
  <div className="hero">
    <div>
      <img src={imageSrc} alt={name} />
    </div>
    <div>
      <h1>{ name }</h1>
      {
        details.map(
          ({ stats, text }) => (
            <p key={text}>
              { stats }
              {' '}
              { text }
            </p>
          ),
        )
      }
    </div>
  </div>
);

Hero.defaultProps = {
  imageSrc: '',
  name: '',
  details: [],
};

Hero.propTypes = {
  imageSrc: PropTypes.string,
  name: PropTypes.string,
  details: PropTypes.arrayOf(PropTypes.shape({
    stats: PropTypes.string,
    text: PropTypes.string,
  })),
};

export default Hero;

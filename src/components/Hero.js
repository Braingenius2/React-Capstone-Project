import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ image, name, details }) => (
  <div className="hero">
    <div>
      <img src={image} alt={name} />
    </div>
    <div>
      <h1>{ name }</h1>
      {
        details.map(
          ({ stats, title }) => (
            <p key={title}>
              { stats }
              {' '}
              { title }
            </p>
          ),
        )
      }
    </div>
  </div>
);

Hero.defaultProps = {
  image: '',
  name: '',
  details: [],
};

Hero.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  details: PropTypes.arrayOf(PropTypes.shape({
    stats: PropTypes.string,
    text: PropTypes.string,
  })),
};

export default Hero;

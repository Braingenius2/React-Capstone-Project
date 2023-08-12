import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ image, name, details }) => (
  <div className="hero flex items-center justify-center bg-pink-500">
    <div className="w-1/2">
      <img src={image} alt={name} className="w-full max-h-200" />
    </div>
    <div className="ml-4 w-1/3">
      <h2 className="text-3xl font-bold ">{ name }</h2>
      {
        details.map(
          ({ stats, title }) => (
            <p key={title} className="text-lg">
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

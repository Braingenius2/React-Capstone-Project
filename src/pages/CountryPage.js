import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CountryDetail from '../components/CountryDetail';

const CountryPage = ({ match }) => {
  const { continentName, countryName } = match.params;

  const country = countryName.replace(/-/g, ' ');

  const { countries } = useSelector((state) => state.countries);

  const selectedCountry = countries.find((country) => country.name === country);

  const filteredStats = Object.keys(selectedCountry)
    .filter((item) => (
      item !== 'id'
      && item !== 'name'
      && item !== 'continent'
      && item !== 'population'
      && item !== 'flag'));

  return (
    <div>
      <Navbar
        nav={{ logo: <FontAwesomeIcon icon={faArrowLeft} />, path: `/${continentName}`, pageTitle: 'Country stats' }}
      />
      <main>
        <Hero
          image={selectedCountry?.flag}
          name={country}
          details={[
            { stats: selectedCountry?.population, title: 'inhabitants' },
          ]}
        />
        <section>
          <h2>Country data</h2>
          <ul>
            {
            filteredStats
              .map((title) => (
                <CountryDetail key={title} title={title} amount={selectedCountry[title]} />
              ))
        }
          </ul>
        </section>
      </main>
    </div>
  );
};

CountryPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      continentName: PropTypes.string.isRequired,
      countryName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CountryPage;

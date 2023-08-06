import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import continentMaps from '../components/continentsMaps';
import Country from '../components/Country';

const CountriesPage = ({ match }) => {
  const { continentName } = match.params;
  const { continents } = useSelector((state) => state.continents);
  const { countries, isLoading, error } = useSelector((state) => state.countries);

  const continent = continentName === 'Australia-Oceania'
    ? continentName
    : continentName.replaceAll('-', ' ');

  const selectedContinent = continents.find((continent) => continent.name === continent);
  const [filteredCountries, setFilteredCountries] = useState({
    countries: [],
    searchedCountries: [],
  });

  const searchHandler = (e) => {
    const country = e.target.value;
    if (country === '') {
      setFilteredCountries((filteredCountries) => ({
        ...filteredCountries,
        searchedCountries: filteredCountries.countries,
      }));
    } else {
      const newFilteredCountries = filteredCountries.countries.filter(
        (item) => item.name.toUpperCase().includes(country.toUpperCase()),
      );
      setFilteredCountries((filteredCountries) => ({
        ...filteredCountries,
        searchedCountries: newFilteredCountries,
      }));
    }
  };

  useEffect(() => {
    const initialCountries = countries.filter((country) => country.continent === continent);
    setFilteredCountries((filteredCountries) => ({
      ...filteredCountries,
      countries: initialCountries,
      searchedCountries: initialCountries,
    }));
  }, [countries, continent]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Navbar
        nav={{ logo: <FontAwesomeIcon icon={faArrowLeft} />, path: '/', pageTitle: 'Continent Statistics' }}
      />
      <main>
        <Hero
          image={continentMaps[continent]}
          name={continent}
          details={[
            { stats: selectedContinent?.population, text: 'population' },
            { stats: selectedContinent?.cases, text: 'total cases' },
            { stats: selectedContinent?.recovered, text: 'recovered' },
          ]}
        />
        <div>
          <input
            type="text"
            placeholder="Search country"
            id="search-country"
            onChange={searchHandler}
          />
        </div>
        <section>
          <h2>Stats by countries</h2>
          <div>
            {filteredCountries.searchedCountries.map(({
              id, flag, name, cases,
            }) => (
              <Country key={id} flag={flag} name={name} covidCases={cases} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

CountriesPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      continentName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CountriesPage;

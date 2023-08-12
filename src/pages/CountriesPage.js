import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import continentMaps from '../components/continentsMaps';
import Country from '../components/Country';

const CountriesPage = () => {
  const { continentName } = useParams();
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
        nav={{ logo: '', path: '/', pageTitle: 'Continent Statistics' }}
      />
      <div>
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
            style={{
              color: 'black',
              outline: 'none',
              width: '100%',
            }}
          />
        </div>
        <section>
          <h2>Stats by countries</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-none">
            {filteredCountries.searchedCountries.map(({
              id, flag, name, cases,
            }, index) => (
              <Country
                key={id}
                flag={flag}
                name={name}
                covidCases={cases}
                index={index}
                columnIndex={index % 2 === 0 ? 0 : 1}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CountriesPage;

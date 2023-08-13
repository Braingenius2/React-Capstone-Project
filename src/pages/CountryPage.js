import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CountryDetail from '../components/CountryDetail';

const CountryPage = () => {
  const { continentName, countryName } = useParams();

  const country = countryName.replace(/-/g, ' ');

  const { countries } = useSelector((state) => state.countries);

  const selectedCountry = countries.find((countryItem) => countryItem.name === country);

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
        nav={{ logo: '', path: `/${continentName}`, pageTitle: 'Country stats' }}
      />
      <main>
        <Hero
          image={selectedCountry?.flag}
          name={country}
          details={[
            { stats: selectedCountry?.population, text: 'population' },
          ]}
        />
        <section className="country-stats">
          <h2 className="bg-pink-700">Country data</h2>
          <ul className="country-details">
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

export default CountryPage;

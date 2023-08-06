import React from 'react';
import { useSelector } from 'react-redux';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import worldMap from '../images/world_map.png';
import Continent from '../components/Continent';

const HomePage = () => {
  const {
    continents, totalCases, isLoading, error,
  } = useSelector((state) => state.continents);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Navbar nav={{ logo: <p>Covid-19</p>, path: '/', pageTitle: 'World Covid data' }} />
      <main>
        <Hero
          image={worldMap}
          name="All Continents"
          details={[{ stats: totalCases, title: 'cases' }]}
        />
        <section>
          <h2>Stats by continents</h2>
          <div>
            { continents.map((continent) => (
              <Continent
                key={continent.id}
                map={Continent[continent.name]}
                name={continent.name}
                covidCases={continent.cases}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;

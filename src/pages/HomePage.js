import React from 'react';
import { useSelector } from 'react-redux';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import worldMap from '../images/world_map.png';
import Continent from '../components/Continent';
import continentMaps from '../components/continentsMaps';

const HomePage = () => {
  const {
    continents, totalCases, isLoading, error,
  } = useSelector((state) => state.continents);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <Navbar nav={{ logo: <p>Covid-19</p>, path: '/', pageTitle: 'World Covid data' }} />
      <main>
        <Hero
          image={worldMap}
          name="All Continents"
          details={[{ stats: totalCases, title: 'cases' }]}
        />
        <section>
          <h2 className="text-2xl font-bold bg-pink-700 text-white">Stats by continents</h2>
          <div className="grid grid-cols-2 gap-0 border-none">
            {continents.map((continent, index) => (
              <Continent
                key={continent.id}
                map={continentMaps[continent.name]}
                name={continent.name}
                covidCases={continent.cases}
                index={index}
                columnIndex={index % 2 === 0 ? 0 : 1}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;

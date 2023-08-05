import { useSelector } from 'react-redux';
import Continent from './Continent';
import continentMaps from './continentsMaps';

const ContinentsList = () => {
  const { continents } = useSelector((state) => state.continents);

  return (
    <div className="continents">
      <h2>Section Title</h2>
      <div className="continents-list">
        { continents.map((continent) => (
          <Continent
            key={continent.id}
            image={continentMaps[continent.name]}
            name={continent.name}
            active={continent.active}
            covidCases={continent.cases}
          />
        ))}
      </div>
    </div>
  );
};

export default ContinentsList;

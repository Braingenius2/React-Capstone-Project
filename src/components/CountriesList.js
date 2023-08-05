import { useSelector } from 'react-redux';
import Country from './Country';

const CountriesList = () => {
  const { countries } = useSelector((state) => state.countries);

  return (
    <section className="countries">
      <h2>Covid Stats by Country</h2>
      <div className="countries-list">
        { countries.map(({
          id, flag, name, cases,
        }) => (
          <Country
            key={id}
            flag={flag}
            name={name}
            covidCases={cases}
          />
        ))}
      </div>
    </section>
  );
};

export default CountriesList;

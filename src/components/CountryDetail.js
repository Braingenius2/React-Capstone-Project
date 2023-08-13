import PropTypes from 'prop-types';

const CountryDetail = ({ title, amount }) => (
  <li className="bg-pink-500 country-stat-item">
    <div className="stat-show-title">
      <h3 className="title">{ title }</h3>
    </div>
    <div className="stat-show-amount">
      <p>{ amount }</p>
    </div>
  </li>
);

CountryDetail.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};

export default CountryDetail;

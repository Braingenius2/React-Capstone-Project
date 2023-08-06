import PropTypes from 'prop-types';

const CountryDetail = ({ title, amount }) => (
  <li>
    <div>
      <h3>{ title }</h3>
    </div>
    <div>
      <p>{ amount }</p>
    </div>
  </li>
);

CountryDetail.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};

export default CountryDetail;

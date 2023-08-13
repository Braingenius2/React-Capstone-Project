import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import CountryDetail from '../components/CountryDetail';

describe('The CountryDetail component', () => {
  test('should render correctly into the DOM', () => {
    const { CountryDetailComponent } = render(
      <CountryDetail title="cases" amount="9,106" />,
    );
    expect(CountryDetailComponent).toMatchSnapshot();
  });

  test('should render the text: recovered and the number of recovered people: 36,366', () => {
    render(
      <CountryDetail title="recovered" amount="36,366" />,
    );
    const CountryDetailTitle = screen.getByText(/recovered/i);
    const CountryDetailCases = screen.getByText(/36,366/i);

    expect(CountryDetailTitle).toBeInTheDocument();
    expect(CountryDetailCases).toBeInTheDocument();
  });
});

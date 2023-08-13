import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Country from '../components/Country';

describe('The Country component', () => {
  test('should render correctly into the DOM', () => {
    const { container } = render(
      <BrowserRouter>
        <Country image="https://disease.sh/assets/img/flags/af.png" name="Afghanistan" cases="224,317" />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  test('should render the text: Algeria and the number of cases', () => {
    render(
      <BrowserRouter>
        <Country image="https://disease.sh/assets/img/flags/dz.png" name="Algeria" cases="271,852" />
      </BrowserRouter>,
    );
    const countryTitle = screen.getByText(/Algeria/i);
    const countryCases = screen.getByText(/271,852 cases/i);

    expect(countryTitle).toBeInTheDocument();
    expect(countryCases).toBeInTheDocument();
  });
});

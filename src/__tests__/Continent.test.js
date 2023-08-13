import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import continentMaps from '../components/continentsMaps';
import Continent from '../components/Continent';

describe('The continent component', () => {
  test('should render correctly into the DOM', () => {
    const { container } = render(
      <MemoryRouter>
        <Continent image={continentMaps.Africa} name="Africa" cases="1000" />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  test('should navigate to the second page when user clicked on Australia-Oceania continent item', () => {
    render(
      <BrowserRouter>
        <Continent image={continentMaps['Australia-Oceania']} name="Australia-Oceania" cases="1,345,890" />
      </BrowserRouter>,
    );
    const continentLink = document.querySelector('.continent-item');
    fireEvent.click(continentLink);
    expect(window.location.pathname).toBe('/Australia-Oceania');
  });

  test('should render the text: Europe and the number of cases', () => {
    render(
      <MemoryRouter>
        <Continent image={continentMaps.Europe} name="Europe" cases="20,105,600" />
      </MemoryRouter>,
    );
    const continentTitle = screen.queryByText(/Europe/i);
    const continentCases = screen.queryByText(/20,105,600 cases/i);

    expect(continentTitle).toBeInTheDocument();
    expect(continentCases).toBeInTheDocument();
  });
});

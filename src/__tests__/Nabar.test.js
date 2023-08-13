import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('The Navbar component', () => {
  test('should render correctly into the DOM', () => {
    const nav = {
      path: '/',
      logo: <p>Covid-19</p>,
      pageTitle: 'World Covid data',
    };
    const { container } = render(
      <MemoryRouter>
        <Navbar nav={nav} />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  test('should render the navigation bar with the text: Continent Statistics', () => {
    const nav = {
      path: '/',
      logo: '',
      pageTitle: 'Continent Statistics',
    };
    render(
      <MemoryRouter>
        <Navbar nav={nav} />
      </MemoryRouter>,
    );
    const navbarTitle = screen.getByText(/Continent Statistics/i);
    expect(navbarTitle).toBeInTheDocument();
  });
});

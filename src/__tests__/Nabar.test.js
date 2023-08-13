import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import Navbar from '../components/Navbar';

describe('The Navbar component', () => {
  test('should render correctly into the DOM', () => {
    const nav = {
      url: '/',
      name: <span>Covid19</span>,
      page: 'World Covid data',
    };
    const { container } = render(
      <BrowserRouter>
        <Navbar nav={nav} />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  test('should render the navigation bar with the text: Continent stats', () => {
    const nav = {
      url: '/',
      name: <FiChevronLeft className="inline-block mr-1" />,
      page: 'Continent stats',
    };
    render(
      <BrowserRouter>
        <Navbar nav={nav} />
      </BrowserRouter>,
    );
    const navbarTitle = screen.getByText(/Continent stats/i);
    expect(navbarTitle).toBeInTheDocument();
  });
});

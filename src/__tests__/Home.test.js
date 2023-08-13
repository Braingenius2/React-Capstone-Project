import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import continentsReducer, { fetchContinents } from '../redux/continents/continentsSlice';
import { fakeContinentData } from '../mock/apiData';
import HomePage from '../pages/HomePage';

describe('The Home page component', () => {
  let store;

  beforeEach(async () => {
    const continentState = continentsReducer(undefined, {
      type: fetchContinents.fulfilled,
      payload: fakeContinentData,
    });
    const thunkMiddleware = [thunk];
    const mockStore = configureStore(thunkMiddleware);
    const initialState = continentState;
    store = mockStore({
      continents: initialState,
    });
    store.dispatch(fetchContinents());
  });

  test('should render correctly into the DOM', async () => {
    const { homeComponent } = render(
      <MemoryRouter>
        <Provider store={store}>
          <HomePage />
        </Provider>
      </MemoryRouter>,
    );
    expect(homeComponent).toMatchSnapshot();
  });

  test('should render seven continents items with the names: Africa, Asia, North America, South America, Australia-Oceania, Europe and New Fake Continent', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <HomePage />
        </Provider>
      </MemoryRouter>,
    );

    const continentNameAfrica = screen.getByText('Africa');
    const continentNameAsia = screen.getByText('Asia');
    const continentNameNorthAmerica = screen.getByText('North America');
    const continentNameSouthAmerica = screen.getByText('South America');
    const continentNameAustraliaOceania = screen.getByText('Australia-Oceania');
    const continentNameEurope = screen.getByText('Europe');

    expect(continentNameAfrica).toBeInTheDocument();
    expect(continentNameAsia).toBeInTheDocument();
    expect(continentNameNorthAmerica).toBeInTheDocument();
    expect(continentNameSouthAmerica).toBeInTheDocument();
    expect(continentNameAustraliaOceania).toBeInTheDocument();
    expect(continentNameEurope).toBeInTheDocument();
  });
});

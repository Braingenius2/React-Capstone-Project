import { Routes, Route, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, screen } from '@testing-library/react';
import continentsReducer, { fetchContinents } from '../redux/continents/continentsSlice';
import countriesReducer, { fetchCountries } from '../redux/countries/countriesSlice';
import CountriesPage from '../pages/CountriesPage';
import { fakeContinentData, fakeCountriesData } from '../mock/apiData';

describe('The CountriesPage component', () => {
  let store;

  beforeEach(async () => {
    const continentState = continentsReducer(undefined, {
      type: fetchContinents.fulfilled,
      payload: fakeContinentData,
    });
    const countriesState = countriesReducer(undefined, {
      type: fetchCountries.fulfilled,
      payload: fakeCountriesData,
    });
    const thunkMiddleware = [thunk];
    const mockStore = configureStore(thunkMiddleware);
    const initialStateContinents = continentState;
    const initialState = countriesState;
    store = mockStore({
      continents: initialStateContinents,
      countries: initialState,
    });
    store.dispatch(fetchContinents());
    store.dispatch(fetchCountries());
  });

  test('should render correctly into the DOM', async () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/Africa']}>
          <Routes>
            <Route path=":continentName" element={<CountriesPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });

  test('should render the second page of the app with the fake data of countries of Asia continent: Afghanistan', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/Asia']}>
          <Routes>
            <Route path=":continentName" element={<CountriesPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    const countriesItems = document.querySelectorAll('.country-item');
    const continentNameAsia = screen.getByText('Asia');
    const countryName = screen.getByText('Afghanistan');

    expect(countriesItems).toHaveLength(2);
    expect(continentNameAsia).toBeInTheDocument();
    expect(countryName).toBeInTheDocument();
  });
});

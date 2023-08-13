import { Routes, Route, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, screen } from '@testing-library/react';
import continentsReducer, { fetchContinents } from '../redux/continents/continentsSlice';
import { fakeContinentData, fakeCountriesData } from '../mock/apiData';
import countriesReducer, { fetchCountries } from '../redux/countries/countriesSlice';
import CountryPage from '../pages/CountryPage';

describe('The CountryPage component', () => {
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
    const { CountryPageComponent } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/Europe/Albania']}>
          <Routes>
            <Route path=":continentName/:countryName" element={<CountryPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );
    expect(CountryPageComponent).toMatchSnapshot();
  });

  test('should render the third page of the app with the fake data of Albania country: Name, Cases and deaths', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/Europe/Albania']}>
          <Routes>
            <Route path=":continentName/:countryName" element={<CountryPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    const countryNameAlbania = screen.getByText('Albania');
    const countryCases = screen.getByText('334,726');
    const countryDeaths = screen.getByText('3,602');

    expect(countryNameAlbania).toBeInTheDocument();
    expect(countryCases).toBeInTheDocument();
    expect(countryDeaths).toBeInTheDocument();
  });
});

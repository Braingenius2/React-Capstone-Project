import countriesReducer, { fetchCountries } from '../redux/countries/countriesSlice';
import { fakeCountriesData, expectedCountriesData } from '../mock/apiData';
describe('The countriesSlice', () => {
  test('should return the initial state of countries on first run', () => {
    const nextState = countriesReducer(undefined, {});
    expect(nextState).toEqual({
      countries: [],
      isLoading: false,
      error: null,
    });
  });

  test('should set isLoading to true when the action is fetchCountries.pending', async () => {
    const nextState = countriesReducer(undefined, {
      type: fetchCountries.pending,
    });
    expect(nextState.isLoading).toBe(true);
  });

  test('should set isLoading to false and countries to the payload when the action is getAllCountries.fulfilled', async () => {
    const nextState = countriesReducer(undefined, {
      type: fetchCountries.fulfilled,
      payload: fakeCountriesData,
    });
    expect(nextState.isLoading).toBe(false);
    expect(nextState.countries).toEqual(expectedCountriesData);
  });
});

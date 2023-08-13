import continentsReducer, { fetchContinents } from '../redux/continents/continentsSlice';
import { fakeContinentData, expectedContinentData } from '../data/testsData';
import { fakeContinentData, expectedContinentData } from '../mock/apiData';

describe('The continentsSlice', () => {
  test('should return the initial state of continents on first run', () => {
    const nextState = continentsReducer(undefined, {});
    expect(nextState).toEqual({
      continents: [],
      totalCases: '',
      isLoading: false,
      error: null,
    });
  });

  test('should set isLoading to true when the action is fetchcontinents.pending', async () => {
    const nextState = continentsReducer(undefined, {
      type: fetchContinents.pending,
    });
    expect(nextState.isLoading).toBe(true);
  });

  test('should set isLoading to false and continents to the payload when the action is fetchContinents.fulfilled', async () => {
    const nextState = continentsReducer(undefined, {
      type: fetchContinents.fulfilled,
      payload: fakeContinentData,
    });
    expect(nextState.isLoading).toBe(false);
    expect(nextState.continents).toEqual(expectedContinentData);
    expect(nextState.totalCases).toBe('1,391,219,996');
  });
});

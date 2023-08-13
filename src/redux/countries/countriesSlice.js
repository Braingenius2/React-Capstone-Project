import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const initialState = {
  countries: [],
  isloading: false,
  error: null,
};

const fetchCountries = createAsyncThunk('countries/fetch', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('https://disease.sh/v3/covid-19/countries');
    return response.data;
  } catch (error) {
    return rejectWithValue('There was an error fetching countries', error);
  }
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        const countries = action.payload;
        state.countries = countries.map((country) => ({
          id: uuidv4(),
          name: country.country,
          population: country.population.toLocaleString('en-US'),
          continent: country.continent,
          cases: country.cases.toLocaleString('en-US'),
          recovered: country.recovered.toLocaleString('en-US'),
          flag: country.countryInfo.flag,
          todayCases: country.todayCases.toLocaleString('en-US'),
          deaths: country.deaths.toLocaleString('en-US'),
          todayDeaths: country.todayDeaths.toLocaleString('en-US'),
          todayRecovered: country.todayRecovered.toLocaleString('en-US'),
          active: country.active.toLocaleString('en-US'),
          critical: country.critical.toLocaleString('en-US'),
          tests: country.tests.toLocaleString('en-US'),
        }));
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.error.message;
      });
  },
});

export { fetchCountries };
export default countriesSlice.reducer;

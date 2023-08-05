import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  countries: [],
  selectedCountry: null,
  loading: false,
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
  reducers: {
    selectCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { selectCountry } = countriesSlice.actions;
export default countriesSlice.reducer;

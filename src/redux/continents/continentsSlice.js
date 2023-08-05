import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const fetchContinents = createAsyncThunk('fetchContinents', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('https://disease.sh/v3/covid-19/continents');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('There was an error fetching all continents', error);
  }
});

const fetchAContinent = createAsyncThunk('fetchAContinent', async (continent, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${apiEndpoint}/${continent}`);
    return response.data;
  } catch (error) {
    return rejectWithValue('There was an error fetching the continent', error);
  }
});

const initialState = {
  continents: [],
  selectedContinent: null,
  totalCases: '',
  isLoading: false,
  error: null,
};

const continentsSlice = createSlice({
  name: 'continents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContinents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContinents.fulfilled, (state, action) => {
        state.isLoading = false;
        const continents = action.payload;
        state.continents = continents.map((continent) => (
          {
            id: uuidv4(),
            name: continent.continent,
            cases: continent.cases.toLocaleString('en-US'),
            recovered: continent.recovered.toLocaleString('en-US'),
          }
        ));
        state.totalCases = continents.reduce((x, continent) => x + continent.cases, 0).toLocaleString('en-US');
      })
      .addCase(fetchContinents.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchAContinent.fulfilled, (state, action) => {
        const continent = action.payload;
        state.selectedContinent = {
          population: continent.population.toLocaleString('en-US'),
          cases: continent.cases.toLocaleString('en-US'),
          recovered: continent.recovered.toLocaleString('en-US'),
        };
      });
  },
});

export { fetchContinents, fetchAContinent }; 
export default continentsSlice.reducer;

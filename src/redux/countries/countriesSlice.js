import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countries: [],
  isLoading: false,
  error: null,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: [],
});

export default countriesSlice.reducer;

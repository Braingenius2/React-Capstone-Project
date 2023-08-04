import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
};

const continentsSlice = createSlice({
  name: 'continents',
  initialState,
  reducers: {
  },
});

export default continentsSlice.reducer;

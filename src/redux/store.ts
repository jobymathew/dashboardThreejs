// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import lineChartReducer from './lineChartSlice';
import teamStandingReducer from './teamStandingSlice';
// Import other reducers here

const store = configureStore({
  reducer: {
    lineChart: lineChartReducer,
    teamStanding: teamStandingReducer,
    // Add other reducers here
  },
});

export default store;

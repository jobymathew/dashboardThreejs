import { configureStore } from '@reduxjs/toolkit';
import lineChartReducer from './lineChartSlice';
import teamStandingReducer from './teamStandingSlice';

const store = configureStore({
  reducer: {
    lineChart: lineChartReducer,
    teamStanding: teamStandingReducer,
  },
});

export default store;

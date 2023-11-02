
import { configureStore } from '@reduxjs/toolkit';
import f1Reducer from './slice';

const store = configureStore({
  reducer: {
    f1: f1Reducer,
    // Add other reducers if needed
  },
});

export default store;

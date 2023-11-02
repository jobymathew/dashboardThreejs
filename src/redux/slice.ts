
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wins: 0,
  constructors: 0,
};

const f1Slice = createSlice({
  name: 'f1',
  initialState,
  reducers: {
    setData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setData } = f1Slice.actions;

export default f1Slice.reducer;

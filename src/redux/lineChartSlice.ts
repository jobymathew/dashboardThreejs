import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LineChartData {
    race: String,
    bottas: number,
    zhou: number
}

const initialState: Array<LineChartData> = [
    { race: 'Race 1', bottas: 15, zhou: 18 },
    { race: 'Race 2', bottas: 14, zhou: 17 },
    { race: 'Race 3', bottas: 12, zhou: 19 },
    { race: 'Race 4', bottas: 16, zhou: 20 },
    { race: 'Race 5', bottas: 13, zhou: 16 },
    { race: 'Race 6', bottas: 7, zhou: 9 },  
    { race: 'Race 7', bottas: 14, zhou: 17 },
    { race: 'Race 8', bottas: 11, zhou: 18 },
    { race: 'Race 9', bottas: 19, zhou: 15 },
    { race: 'Race 10', bottas: 20, zhou: 14 },
    { race: 'Race 11', bottas: 15, zhou: 16 },
    { race: 'Race 12', bottas: 12, zhou: 13 },
    { race: 'Race 13', bottas: 18, zhou: 14 },
    { race: 'Race 14', bottas: 16, zhou: 17 },
    { race: 'Race 15', bottas: 13, zhou: 20 },
    { race: 'Race 16', bottas: 14, zhou: 18 },
    { race: 'Race 17', bottas: 17, zhou: 19 },
    { race: 'Race 18', bottas: 18, zhou: 15 },
    { race: 'Race 19', bottas: 19, zhou: 16 },
    { race: 'Race 20', bottas: 20, zhou: 17 },
    { race: 'Race 21', bottas: 15, zhou: 14 },
    { race: 'Race 22', bottas: 12, zhou: 13 },
    { race: 'Race 23', bottas: 11, zhou: 12 },
    { race: 'Race 24', bottas: 9, zhou: 11 },  
    { race: 'Race 25', bottas: 8, zhou: 10 },  
    { race: 'Race 26', bottas: 10, zhou: 8 },  
  ];

const lineChartSlice = createSlice({
  name: 'lineChart',
  initialState,
  reducers: {
    setLineChartData: (state, action: PayloadAction<Array<LineChartData>>) => {
      return action.payload;
    },
  },
});

export const { setLineChartData } = lineChartSlice.actions;
export default lineChartSlice.reducer;

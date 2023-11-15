import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TeamStandingData {
    race: String,
    bottas: number,
    zhou: number
}


const initialState: Array<TeamStandingData> = [];

const teamStandingSlice = createSlice({
  name: 'teamStanding',
  initialState,
  reducers: {
    setTeamStandingData: (state, action: PayloadAction<Array<TeamStandingData>>) => {
      return action.payload;
    },
    addTeamStandingData: (state, action: PayloadAction<TeamStandingData>) => {
        state.push(action.payload);
    },
  },
});

export const { setTeamStandingData, addTeamStandingData } = teamStandingSlice.actions;
export default teamStandingSlice.reducer;

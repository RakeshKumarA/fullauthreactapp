import { createSlice } from '@reduxjs/toolkit';

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState: {},
  reducers: {
    addSchedule: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addSchedule } = scheduleSlice.actions;

export default scheduleSlice.reducer;

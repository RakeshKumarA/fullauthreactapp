import { createSlice } from '@reduxjs/toolkit';

export const stepperSlice = createSlice({
  name: 'stepper',
  initialState: {
    step: 0,
  },
  reducers: {
    updateStep: (state, action) => {
      state.step = action.payload;
      return state;
    },
  },
});

export const { updateStep } = stepperSlice.actions;

export default stepperSlice.reducer;

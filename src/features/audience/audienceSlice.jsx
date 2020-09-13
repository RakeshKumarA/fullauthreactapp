import { createSlice } from '@reduxjs/toolkit';

export const audienceSlice = createSlice({
  name: 'audience',
  initialState: {},
  reducers: {
    addAudience: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addAudience } = audienceSlice.actions;

export default audienceSlice.reducer;

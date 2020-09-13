import { createSlice } from '@reduxjs/toolkit';

export const basicDetailSlice = createSlice({
  name: 'basicDetails',
  initialState: {},
  reducers: {
    addBasicDetail: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addBasicDetail } = basicDetailSlice.actions;

export default basicDetailSlice.reducer;

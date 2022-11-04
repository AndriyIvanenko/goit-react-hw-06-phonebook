import { createSlice } from '@reduxjs/toolkit';

const initialFilterValue = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterValue,
  reducers: {
    setFilterValue(state, action) {
      return action.payload;
    },
  },
});

export const { setFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

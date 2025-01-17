import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBlotterOpen: false,
  blotterData: [],
  selectedRow: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleBlotter(state) {
      state.isBlotterOpen = !state.isBlotterOpen;
    },
    addToBlotter(state, action) {
      state.blotterData.push(action.payload);
    },
    selectRow(state, action) {
      state.selectedRow = action.payload;
    },
  },
});

export const { toggleBlotter, addToBlotter, selectRow } = appSlice.actions;

export const store = configureStore({
  reducer: appSlice.reducer,
});

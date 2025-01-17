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
    removeFromBlotter(state, action) {
      state.blotterData = state.blotterData.filter(
        (_, index) => index !== action.payload
      );
    },
  },
});

export const { toggleBlotter, addToBlotter, selectRow, removeFromBlotter } =
  appSlice.actions;

export const store = configureStore({
  reducer: appSlice.reducer,
});

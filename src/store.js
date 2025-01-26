import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBlotterOpen: false,
  blotterData: [],
  selectedRow: null,
  breadcrumbs: [],
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
    addBreadcrumb(state, action) {
      state.push(action.payload);
    },
    removeBreadcrumb(state) {
      state.pop();
    },
    resetBreadcrumbs() {
      [];
    },
  },
});

export const {
  toggleBlotter,
  addToBlotter,
  selectRow,
  removeFromBlotter,
  setBreadcrumbs,
  addBreadcrumb,
  removeBreadcrumb,
  resetBreadcrumbs,
} = appSlice.actions;

export const store = configureStore({
  reducer: appSlice.reducer,
});

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dashboardExpandSidebar: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setDashboardExpandSidebar(state) {
      state.dashboardExpandSidebar = !state.dashboardExpandSidebar;
    },
  },
});

export const { setDashboardExpandSidebar } = appSlice.actions;

export default appSlice.reducer;

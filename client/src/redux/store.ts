import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/authSlice";
import appReducer from "./feature/appSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;

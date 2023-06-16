import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/authSlice";
import appReducer from "./feature/appSlice";
import storeReducer from "./feature/storeSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
    store: storeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;

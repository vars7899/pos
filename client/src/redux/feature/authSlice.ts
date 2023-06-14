import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as authFeature from "../service/authenticationService";
import * as Types from "../../global/types";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: null,
  user: null,
  isAuthenticated: false,
};

export const REGISTER_USER = createAsyncThunk("AUTH/REGISTER_USER", async (data: any, thunkAPI) => {
  try {
    return await authFeature.registerNewUser(data);
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(REGISTER_USER.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(REGISTER_USER.rejected, (state, action: any) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.isAuthenticated = false;
    });
    builder.addCase(REGISTER_USER.fulfilled, (state, action: any) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload.message;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;

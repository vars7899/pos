import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
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

export const LOGIN_USER = createAsyncThunk("AUTH/LOGIN_USER", async (data: Types.UserLoginData, thunkAPI) => {
  try {
    return await authFeature.loginUser(data);
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    RESET_AUTH_FLAGS(state) {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = null;
    },
    CLEAR_AUTH_ERROR(state) {
      state.isError = false;
      state.message = null;
    },
    SET_LOGIN_STATUS(state, action) {
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(REGISTER_USER.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(REGISTER_USER.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.isAuthenticated = false;
    });
    builder.addCase(REGISTER_USER.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload.message;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    });
    // LOGIN_USER case
    builder.addCase(LOGIN_USER.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LOGIN_USER.rejected, (state, action: any) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.isAuthenticated = false;
    });
    builder.addCase(LOGIN_USER.fulfilled, (state, action: any) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload.message;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    });
  },
});

export const { RESET_AUTH_FLAGS, CLEAR_AUTH_ERROR, SET_LOGIN_STATUS } = authSlice.actions;

export default authSlice.reducer;

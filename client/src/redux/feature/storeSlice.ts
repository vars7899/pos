import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as storeService from "../service/store";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: null,
  currentStore: null,
  storeList: [],
};

export const CREATE_NEW_STORE = createAsyncThunk("store/createNewStore", async (data: any, thunkAPI) => {
  try {
    return await storeService.createNewStore(data);
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.response.data.error ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const GET_USER_STORE_LIST = createAsyncThunk("store/getUserStoreList", async (_, thunkAPI) => {
  try {
    return await storeService.getUserStores();
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.response.data.error ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    SET_CURRENT_STORE(state, action) {
      state.currentStore = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CREATE_NEW_STORE.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(CREATE_NEW_STORE.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    builder.addCase(CREATE_NEW_STORE.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.currentStore = action.payload.store;
    });
    // GET_USER_STORE_LIST
    builder.addCase(GET_USER_STORE_LIST.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(GET_USER_STORE_LIST.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    builder.addCase(GET_USER_STORE_LIST.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.currentStore = action.payload.storeList[0];
      state.storeList = action.payload.storeList;
    });
  },
});

export const { SET_CURRENT_STORE } = storeSlice.actions;

export default storeSlice.reducer;

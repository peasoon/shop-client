import instance from "@/api/api_instance";
import { IProduct } from "@/types/product.interface";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface searchsState {
  searchString: string;
}

const initialState: searchsState = {
  searchString: "",
};

export const searchSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setSearchString: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const searchActions = searchSlice.actions;

export const searchReducer = searchSlice.reducer;

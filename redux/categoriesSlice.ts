import instance from "@/api/api_instance";
import { IProduct } from "@/types/product.interface";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CategoriesState {
  categories: string[];
  currentCategory: string;
}

const initialState: CategoriesState = {
  categories: [],
  currentCategory: "",
};

export const fetchCategories = createAsyncThunk('categories/fetchAllCategories', async () => {
  const response = await instance.get<IProduct[]>('/products')
  return response.data
})

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCurrentCategory:(state,action:PayloadAction<string>)=>{
      state.currentCategory = action.payload
    }
  },
  extraReducers: (builder)=> {
    builder.addCase(fetchCategories.fulfilled,(state,action:PayloadAction<IProduct[]>)=>{
      const products = action.payload
      const categories = new Set(products.map((product) => product.category));
      const categoriesArray = Array.from(categories);
      state.categories = categoriesArray
    })
  }
});

// Action creators are generated for each case reducer function
export const categoriesActions = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;

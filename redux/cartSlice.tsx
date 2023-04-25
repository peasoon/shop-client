import instance from "@/api/api_instance";
import { IProduct } from "@/types/product.interface";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CategoriesState {
  categories: string[];
  currentCategory: string;
}

interface ICartItem extends IProduct {
  quantity: number;
}

interface CartState {
  cartItems: ICartItem[];
}

const initialState: CartState = {
  cartItems: [] as ICartItem[],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const isExist = state.cartItems.some((item) => item.product_id === action.payload.product_id);
      if (!isExist) state.cartItems.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const cartActions = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

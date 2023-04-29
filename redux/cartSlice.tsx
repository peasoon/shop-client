import instance from "@/api/api_instance";
import { IProduct } from "@/types/product.interface";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { round } from "lodash";

export interface CategoriesState {
  categories: string[];
  currentCategory: string;
}

export interface ICartItem extends IProduct {
  quantity: number;
}

interface CartState {
  cartItems: ICartItem[];
  total: number;
}

const initialState: CartState = {
  cartItems: [] as ICartItem[],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const isExist = state.cartItems.some(
        (item) => item.product_id === action.payload.product_id
      );
      if (!isExist) {
        state.cartItems.push(action.payload);
        state.total += Number(action.payload.price);
        state.total = round(Number(state.total.toFixed(2)), 2);
      }
    },
    changeQuantity: (
      state,
      action: PayloadAction<{ quantity: number; id: number }>
    ) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.product_id === action.payload.id
      );
      if (itemIndex >= 0) {
        if (state.cartItems[itemIndex].quantity > action.payload.quantity) {
          console.log("decrease");
          state.total = round(
            state.total -
              Number(
                (
                  (state.cartItems[itemIndex].quantity -
                    action.payload.quantity) *
                  state.cartItems[itemIndex].price
                ).toFixed(2)
              ),
            2
          );
          state.cartItems[itemIndex].quantity = action.payload.quantity;
        }
        if (state.cartItems[itemIndex].quantity < action.payload.quantity) {
          console.log("increase");
          state.total = round(
            state.total +
              parseFloat(
                (
                  (action.payload.quantity -
                    state.cartItems[itemIndex].quantity) *
                  state.cartItems[itemIndex].price
                ).toFixed(2)
              ),
            2
          );
          state.cartItems[itemIndex].quantity = action.payload.quantity;
        }
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.product_id === action.payload
      );
      state.total = round(
        state.total -
          state.cartItems[itemIndex].quantity *
            state.cartItems[itemIndex].price,
        2
      );
      state.cartItems = state.cartItems.filter(
        (item) => item.product_id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const cartActions = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

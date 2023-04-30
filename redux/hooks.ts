import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { categoriesActions, categoriesSlice } from "./categoriesSlice";
import { cartActions } from "./cartSlice";
import { searchActions } from "./searchSlice";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const rootAction = {
  ...categoriesSlice.actions,
  ...cartActions,
  ...searchActions
};

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch]);
};

"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {  useDispatch, useSelector } from "react-redux";
const rootReducer = combineReducers({});
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector:any = useSelector;

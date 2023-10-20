import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "./map/mapSlice";

export const store = configureStore({
  reducer: {
    mapReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

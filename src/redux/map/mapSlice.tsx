import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IMap } from "./types";

const initialState: IMap = {
  districts: null,
};

export const mapSlice = createSlice({
  name: "maps",
  initialState,
  reducers: {
    fetchDistrict: (state, action: PayloadAction<IMap>) => {
      state = { ...state, ...action.payload };
    },
  },
});

export const { fetchDistrict } = mapSlice.actions;
export const mapSelector = (state: RootState) => state.mapReducer;
export default mapSlice.reducer;

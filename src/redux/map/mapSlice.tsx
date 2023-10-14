import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IDistrict, IMap } from "./types";

const initialState: IMap = {
  districts: [[]],
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    fetchDistrict: (state, action: PayloadAction<IDistrict[][]>) => {
      state.districts.push(...action.payload);
    },
  },
});

export const { fetchDistrict } = mapSlice.actions;
export const mapSelector = (state: RootState) => state.mapReducer;
export default mapSlice.reducer;

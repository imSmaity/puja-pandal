import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
export interface Map {
  id: string;
}
const initialState: Array<Map> = [
  {
    id: "1",
  },
];
export const mapSlice = createSlice({
  name: "maps",
  initialState,
  reducers: {
    fetchMap: (state, action: PayloadAction<Map>) => {
      state.push(action.payload);
    },
  },
});
export const { fetchMap } = mapSlice.actions;
export const mapSelector = (state: RootState) => state.mapReducer;
export default mapSlice.reducer;

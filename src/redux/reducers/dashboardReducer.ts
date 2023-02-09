import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import myData from "../../data.json";

export interface SalesStats {
  [key: string]: number;
  income: number;
  cost: number;
}

type InitialState = {
  salesStats: SalesStats[];
};

const initialState: InitialState = {
  salesStats: [],
};

const dashboardReducer = createSlice({
  name: "dashboardReducer",
  initialState,
  reducers: {
    setSalesStats: (state: InitialState, action: PayloadAction<string>) => {
      for (const data of myData) {
        if (parseInt(action.payload) === data.week) {
          state.salesStats = data.salesStats;
        }
      }
    },
  },
});

export const { setSalesStats } = dashboardReducer.actions;

export default dashboardReducer.reducer;

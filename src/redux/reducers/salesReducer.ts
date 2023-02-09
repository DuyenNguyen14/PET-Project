import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import myData from "../../data.json";

type InitialState = {
  income: number[];
  cost: number[];
};

const initialState: InitialState = {
  income: [],
  cost: [],
};

const dashboardReducer = createSlice({
  name: "dashboardReducer",
  initialState,
  reducers: {
    setIncome: (state: InitialState, action: PayloadAction<string>) => {
      for (const data of myData) {
        if (parseInt(action.payload) === data.week) {
          state.income = data.income;
        }
      }
    },
    setCost: (state: InitialState, action: PayloadAction<string>) => {
      for (const data of myData) {
        if (parseInt(action.payload) === data.week) {
          state.cost = data.cost;
        }
      }
    },
  },
});

export const { setIncome, setCost } = dashboardReducer.actions;

export default dashboardReducer.reducer;

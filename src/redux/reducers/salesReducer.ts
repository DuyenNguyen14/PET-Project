import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import myData from "../../data.json";

type InitialState = {
  prevIncome: number[];
  income: number[];
  prevCost: number[];
  cost: number[];
};

const initialState: InitialState = {
  prevIncome: [],
  income: [],
  prevCost: [],
  cost: [],
};

const dashboardReducer = createSlice({
  name: "dashboardReducer",
  initialState,
  reducers: {
    setPrevIncome: (state: InitialState, action: PayloadAction<string>) => {
      for (const data of myData) {
        if (parseInt(action.payload) === data.week) {
          state.prevIncome = data.income;
        }
      }
    },
    setIncome: (state: InitialState, action: PayloadAction<string>) => {
      for (const data of myData) {
        if (parseInt(action.payload) === data.week) {
          state.income = data.income;
        }
      }
    },
    setPrevCost: (state: InitialState, action: PayloadAction<string>) => {
      for (const data of myData) {
        if (parseInt(action.payload) === data.week) {
          state.prevCost = data.cost;
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

export const { setPrevIncome, setIncome, setPrevCost, setCost } = dashboardReducer.actions;

export default dashboardReducer.reducer;

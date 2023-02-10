import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import myData from "../../data.json";

type InitialState = {
  income: {
    current: number[];
    previous: number[];
  };
  cost: {
    current: number[];
    previous: number[];
  };
  targetRevenue: number;
};

const initialState: InitialState = {
  income: {
    current: [],
    previous: [],
  },
  cost: {
    current: [],
    previous: [],
  },
  targetRevenue: 0,
};

const dashboardReducer = createSlice({
  name: "dashboardReducer",
  initialState,
  reducers: {
    setIncome: (state: InitialState, action: PayloadAction<string>) => {
      let currWeek = parseInt(action.payload);
      let prevWeek = currWeek + 1;
      for (const data of myData) {
        if (currWeek === data.week) {
          state.income.current = data.income;
        }
        if (prevWeek === data.week) {
          state.income.previous = data.income;
        }
      }
    },
    setCost: (state: InitialState, action: PayloadAction<string>) => {
      let currWeek = parseInt(action.payload);
      let prevWeek = currWeek + 1;
      for (const data of myData) {
        if (currWeek === data.week) {
          state.cost.current = data.cost;
        }
        if (prevWeek === data.week) {
          state.cost.previous = data.cost;
        }
      }
    },
    setTargetRevenue: (state: InitialState, action: PayloadAction<string>) => {
      let currWeek = parseInt(action.payload);
      for (const data of myData) {
        if (currWeek === data.week) {
          state.targetRevenue = data.targetRevenue;
        }
      }
    },
  },
});

export const { setIncome, setCost, setTargetRevenue } =
  dashboardReducer.actions;

export default dashboardReducer.reducer;

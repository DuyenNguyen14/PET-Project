import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import myData from "../../data.json";

type InitialState = {
  income: {
    current: number[];
    previous: number[];
    currentTotal: number;
  };
  cost: {
    current: number[];
    previous: number[];
    currentTotal: number;
  };
  revenue: {
    values: number[];
    total: number;
    targetRevenue: number;
  };
  targetRevenue: number;
  rosValues: number[];
};

const initialState: InitialState = {
  income: {
    current: [],
    previous: [],
    currentTotal: 0,
  },
  cost: {
    current: [],
    previous: [],
    currentTotal: 0,
  },
  revenue: {
    values: [],
    total: 0,
    targetRevenue: 0,
  },
  targetRevenue: 0,
  rosValues: [],
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
          state.income.currentTotal = state.income.current.reduce(
            (a, b) => a + b,
            0
          );
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
          state.cost.currentTotal = state.cost.current.reduce(
            (a, b) => a + b,
            0
          );
        }
        if (prevWeek === data.week) {
          state.cost.previous = data.cost;
        }
      }
    },
    setRosValues: (state: InitialState, action: PayloadAction<string>) => {
      let currWeek = parseInt(action.payload);
      for (const data of myData) {
        if (currWeek === data.week) {
          state.rosValues = data.income.map(
            (value, index) => ((value - data.cost[index]) * 100) / value
          );
        }
      }
    },
    setRevenue: (
      state: InitialState,
      action: PayloadAction<string>
    ) => {
      let currWeek = parseInt(action.payload);
      for (const data of myData) {
        if (currWeek === data.week) {
          state.revenue.values = data.income.map(
            (value, index) => value - data.cost[index]
          );
          state.revenue.targetRevenue = data.targetRevenue;
        }
      }
    },
  },
});

export const { setIncome, setCost, setRevenue, setRosValues } =
  dashboardReducer.actions;

export default dashboardReducer.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import myData from "../../data.json";

export interface Rating {
  excellent: number;
  good: number;
  notBad: number;
  bad: number;
}

type InitialState = {
  ratings: {
    excellent: number;
    good: number;
    notBad: number;
    bad: number;
  };
};

const initialState: InitialState = {
  ratings: {
    excellent: 0,
    good: 0,
    notBad: 0,
    bad: 0,
  },
};

const ratingsReducer = createSlice({
  name: "ratingsReducer",
  initialState,
  reducers: {
    setRatings: (state: InitialState, action: PayloadAction<string>) => {
      let weekNum = parseInt(action.payload);
      for (const data of myData) {
        if (weekNum === data.week) {
          state.ratings = data.ratings;
        }
      }
    },
  },
});

export const {setRatings} = ratingsReducer.actions;

export default ratingsReducer.reducer;

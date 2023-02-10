import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import myData from "../../data.json";

export interface TopProduct {
  id: number;
  name: string;
  img: string;
  quantity: number;
  earned: number;
}

type InitialState = {
  topProducts: TopProduct[];
};

const initialState: InitialState = {
  topProducts: [],
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    setTopProducts: (state: InitialState, action: PayloadAction<string>) => {
      let weekNum = parseInt(action.payload);
      for (const data of myData) {
        if (weekNum === data.week) {
          state.topProducts = data.topProducts;
        }
      }
    },
  },
});

export const { setTopProducts } = productReducer.actions;

export default productReducer.reducer;

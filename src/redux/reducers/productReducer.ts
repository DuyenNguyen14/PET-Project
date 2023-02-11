import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import myData from "../../data.json";

export interface TopProduct {
  id: number;
  name: string;
  img: string;
  quantity: number;
  earned: number;
}

export interface SoonToExpireProduct {
  id: number;
  name: string;
  quantity: number;
  date: string;
}

export interface SoonToExpireProducts {
  category: string;
  products: SoonToExpireProduct[];
}

type InitialState = {
  topProducts: TopProduct[];
  soonToExpireProducts: SoonToExpireProducts[];
};

const initialState: InitialState = {
  topProducts: [],
  soonToExpireProducts: [],
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
    setSoonToExpireProducts: (
      state: InitialState,
      action: PayloadAction<string>
    ) => {
      let weekNum = parseInt(action.payload);
      for (const data of myData) {
        if (weekNum === data.week) {
          state.soonToExpireProducts = data.soonToExpireProducts;
        }
      }
    },
  },
});

export const { setTopProducts, setSoonToExpireProducts } =
  productReducer.actions;

export default productReducer.reducer;

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
  expiringProductsArray: SoonToExpireProducts[];
  expiringProductsByCategory: SoonToExpireProducts;
};

const initialState: InitialState = {
  topProducts: [],
  expiringProductsArray: [],
  expiringProductsByCategory: {
    category: "",
    products: [],
  },
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    setTopProducts: (state: InitialState, action: PayloadAction<string>) => {
      let weekNum = parseInt(action.payload);
      for (const data of myData) {
        if (weekNum === data.week) {
          state.topProducts = [...data.topProducts].sort(
            (a, b) => b.earned - a.earned
          );
        }
      }
    },
    setExpiringProductsArray: (
      state: InitialState,
      action: PayloadAction<string>
    ) => {
      let weekNum = parseInt(action.payload);
      for (const data of myData) {
        if (weekNum === data.week) {
          state.expiringProductsArray = data.soonToExpireProducts;
        }
      }
    },
  },
});

export const { setTopProducts, setExpiringProductsArray } =
  productReducer.actions;

export default productReducer.reducer;

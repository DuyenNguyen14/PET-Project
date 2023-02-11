import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import ratingsReducer from "./reducers/ratingsReducer";
import salesReducer from "./reducers/salesReducer";

export const store = configureStore({
  reducer: {
    sales: salesReducer,
    products: productReducer,
    ratings: ratingsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

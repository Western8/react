import { configureStore } from "@reduxjs/toolkit";
import swReducer from './swSlice'
import { swApi } from "./swApi";

const store = configureStore({
  reducer: {
    sw: swReducer,
    [swApi.reducerPath]: swApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(swApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
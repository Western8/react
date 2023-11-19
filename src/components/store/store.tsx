import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import swReducer from './swSlice';
import { swApi } from './swApi';

// import { combineReducers, PreloadedState } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    sw: swReducer,
    [swApi.reducerPath]: swApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(swApi.middleware),
});

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  sw: swReducer,
  swApi: swApi.reducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

setupListeners(setupStore().dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
//export type AppDispatch = typeof store.dispatch;

export default store;

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { languageReducer } from "@/redux/features/languageSlice";
import { formApi } from "@/redux/services/formAPI";
import { tablesApi } from "@/redux/services/tablesApi";

export const store = configureStore({
  reducer: {
    languageReducer,
    [formApi.reducerPath]: formApi.reducer,
    [tablesApi.reducerPath]: tablesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(formApi.middleware)
      .concat(tablesApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createSlice } from "@reduxjs/toolkit";

type Language = {
  language: "es" | "en";
};

const initialState: Partial<Language> = {
  language: "es",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export const languageReducer = languageSlice.reducer;

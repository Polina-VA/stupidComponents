import { createSlice } from "@reduxjs/toolkit";
import { ThemeList } from ".";
import { getAllQuestions } from "./questionThunks";

type QuestionState = {
  themes: ThemeList;
  error: string | null;
  loading: boolean;
};

const initalState: QuestionState = {
  themes: [],
  error: null,
  loading: false,
};

const questionSlice = createSlice({
  name: "question",
  initialState: initalState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllQuestions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.themes = action.payload;
        state.error = null;
      })
      .addCase(getAllQuestions.rejected, (state) => {
        state.loading = false
      })
  },
});

export default questionSlice.reducer
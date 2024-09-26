import { createSlice } from "@reduxjs/toolkit";
import { Question } from ".";
import { getQuestion } from "./questionThunks";

type QuestionState = {
  question: Question |null;
  error: string | null;
  loading: boolean;
};

const initalState: QuestionState = {
  question: null,
  error: null,
  loading: false,
};

const questionSlice = createSlice({
  name: "question",
  initialState: initalState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestion.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQuestion.fulfilled, (state, action) => {
        state.loading = false;
        state.question = action.payload;
        state.error = null;
      })
      .addCase(getQuestion.rejected, (state) => {
        state.loading = false
      })
  },
});

export default questionSlice.reducer
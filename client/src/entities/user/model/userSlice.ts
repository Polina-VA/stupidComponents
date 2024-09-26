import { createSlice } from "@reduxjs/toolkit";
import { User } from ".";
import { refreshAccessToken, signIn, signUp, logout } from "./userThunks";
import { message } from "antd";

type UserState = {
  user: User | null;
  error: string | null;
  loading: boolean;
};

const initialState: UserState = {
  user: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      //!-------------------------------refreshAccessToken-------------------------------
      .addCase(refreshAccessToken.pending, (state) => {
        state.loading = true;
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(refreshAccessToken.rejected, (state) => {
        state.loading = false;
      })
      //!-------------------------------signIn-------------------------------------------
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to sign in";
        message.warning(action.payload?.message || "Failed to sign in");
      })

      //!-------------------------------signUp-------------------------------------------
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to sign up";
        message.error(action.payload?.message || "Failed to sign up");
      })

      //!-------------------------------logout-------------------------------------------
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to logout";
        message.error(action.payload?.message || "Failed to logout");
      });
  },
});

export default userSlice.reducer;

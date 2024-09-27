import { createSlice } from "@reduxjs/toolkit";
import { Point } from ".";
import { createPointsThunk, getPointsThunk, updatePointsThunk } from "./pointThunk";

type PointState = {
  points: Point | null;
  loading: boolean;
  error: string | null;
};

const initialState: PointState = {
  points: null,
  loading: false,
  error: null,
};

const pointSlicer = createSlice({
    name: "points",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPointsThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(getPointsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.points = action.payload;
                state.error = null;
            })
            .addCase(getPointsThunk.rejected, (state) => {
                state.loading = false;
            })
            //!-------------------------------createPoint-------------------------------
            .addCase(createPointsThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(createPointsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.points = action.payload;
                state.error = null;
            })
            .addCase(createPointsThunk.rejected, (state) => {
                state.loading = false;
            })
            //!-------------------------------updatePoint-------------------------------
            .addCase(updatePointsThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(updatePointsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.points = action.payload;
                state.error = null;
            })
            .addCase(updatePointsThunk.rejected, (state) => {
                state.loading = false;
            })
    },
})

export default pointSlicer.reducer
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Point } from ".";
import { PointService } from "../api";
import { AxiosError } from "axios";

type RejectValue = {
    message: string;
  };

  export const getPointsThunk = createAsyncThunk<
    Point,
    void,
    { rejectValue: RejectValue }
  >("points/getPoints", async (_, { rejectWithValue }) => {
    try {
      return await PointService.getPoints();
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      return rejectWithValue({
        message: err.response?.data.message || err.message,
      });
    }
  });
  export const createPointsThunk = createAsyncThunk<
    Point,
    void,
    { rejectValue: RejectValue }
  >("points/createPoints", async (_, { rejectWithValue }) => {
    try {
      return await PointService.createPoint();
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      return rejectWithValue({
        message: err.response?.data.message || err.message,
      });
    }
  });
  export const updatePointsThunk = createAsyncThunk<
    Point,
    {points: number},
    { rejectValue: RejectValue }
  >("points/updatePoints", async ({points}, { rejectWithValue }) => {
    try {
      return await PointService.updatePoint(points);
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      return rejectWithValue({
        message: err.response?.data.message || err.message,
      });
    }
  });
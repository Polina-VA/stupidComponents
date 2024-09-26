import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { ThemeList } from ".";
import { ThemeService } from "../api";



type RejectValue = {
    message: string;
}

export const getAllThemesandQuestions = createAsyncThunk<ThemeList, void, { rejectValue: RejectValue }>('themes/getAllThemesandQuestions', async (_, { rejectWithValue }) => {
    try {
        return await ThemeService.getAllThemesAndQuestions()
    } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        return rejectWithValue({
          message: err.response?.data.message || err.message,
        });
    }
})
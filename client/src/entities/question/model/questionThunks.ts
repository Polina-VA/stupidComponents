import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { QuestionService } from "../api";
import { ThemeList } from "@/entities/theme/model";

type RejectValue = {
    message: string
}

export const getAllQuestions = createAsyncThunk<
    ThemeList,
    void,
    { rejectValue: RejectValue }
>('questions/getAllThemes', async (_, { rejectWithValue }) => {
    try {
        return await QuestionService.getThemes()
    } catch (error) {
        const err = error as AxiosError<{message: string}>
        return rejectWithValue({
            message: err.response?.data.message || err.message
        })
    }
})
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { QuestionService } from "../api";
import { Question } from ".";

type RejectValue = {
    message: string
}

export const getQuestion = createAsyncThunk<
    Question,
    {questionId: number},
    { rejectValue: RejectValue }
>('questions/getQuestion', async ({questionId}, { rejectWithValue }) => {
    try {
        return await QuestionService.getQuestion(questionId)
    } catch (error) {
        const err = error as AxiosError<{message: string}>
        return rejectWithValue({
            message: err.response?.data.message || err.message
        })
    }
})
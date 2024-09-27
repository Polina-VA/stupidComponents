import { createSlice } from "@reduxjs/toolkit";
import { ThemeList } from "."
import { getAllThemesandQuestions } from "./themeThunks";
import { message } from "antd";


type ThemeListState = {
    themeList : ThemeList ;
    error: string| null;
    loading: boolean;
}

const initialState: ThemeListState = {
    themeList: [], 
    error: null,
    loading: false,
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {}, 
    extraReducers : (builder) => {
        builder
            .addCase(getAllThemesandQuestions.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllThemesandQuestions.fulfilled, (state, action) => {
                state.loading = false;
                state.themeList = action.payload;
                state.error = null;
            })
            .addCase(getAllThemesandQuestions.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message || 'Failed to sign in';
                message.warning(action.payload?.message || 'Failed to sign in');
            })
    }
})

export default themeSlice.reducer
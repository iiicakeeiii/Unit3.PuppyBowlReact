import {createSlice} from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: 'showNav',
    initialState: true,
    reducers: {
        show: (state) => state = true,
        hide: (state) => state = false,
    }
});
export const { show, hide } = navSlice.actions;

export default navSlice.reducer;
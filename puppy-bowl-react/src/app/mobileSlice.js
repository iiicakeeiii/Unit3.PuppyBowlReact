import {createSlice} from "@reduxjs/toolkit";


const mobileSlice = createSlice({
    name: 'isMobile',
    initialState: false,
    reducers: {
        setTrue: (state) => state = true,
        setFalse: (state) => state = false,
    }
})

export const { setTrue, setFalse } = mobileSlice.actions;

export default mobileSlice.reducer;
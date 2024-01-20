import {createSlice} from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: 'showNav',
    initialState: true,
    reducers: {
        show: (state) => state = true,
        hide: (state) => state = false,
        setNav: (state) => state = !state
    }
});
export const { show, hide, setNav } = navSlice.actions;

export default navSlice.reducer;
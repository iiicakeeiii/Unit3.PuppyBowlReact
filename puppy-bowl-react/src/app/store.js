import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import navReducer from './navSlice.js'
import mobileReducer from './mobileSlice.js'
const store = configureStore({
    reducer: {
        // stuff goes in here
        // reducerName: importedReducerName
        counter: counterReducer,
        showNav: navReducer,
        isMobile: mobileReducer
    }
});

export default store;
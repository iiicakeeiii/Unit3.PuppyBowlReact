import { createSlice } from '@reduxjs/toolkit';

// useState => const [counter, setCounter] = useState(0)
// helper functions function increment(count) { return count += 1};

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
        reset: (state) => state - state
    }
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
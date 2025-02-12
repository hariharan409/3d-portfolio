import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Define the async thunk to fetch npm user packages
export const fetchReputationCount = createAsyncThunk(
    'stack-overflow/fetchReputationCount',
    async(userId) => {
        const response = await fetch(`https://api.stackexchange.com/2.3/users/${userId}?site=stackoverflow`);
        const data = await response.json();
        console.log(data)
        // Return the count of packages
        return data?.items[0]?.reputation;
    }
)

const stackOverflowSlice = createSlice({
    name: "stack-overflow",
    initialState: {
        reputationCount: 0,  // For storing the package count
        status: 'idle',  // For tracking the request status
        error: null,  // For tracking errors
    },
    reducers: {}.createSlice,
    extraReducers: (builder) => {
        builder
        .addCase(fetchReputationCount.pending,(state) => {
            state.status = "loading";
        })
        .addCase(fetchReputationCount.fulfilled,(state,action) => {
            state.status = "succeeded";
            state.reputationCount = action.payload; // Set the package count
        })
        .addCase(fetchReputationCount.rejected,(state,action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

export default stackOverflowSlice.reducer;
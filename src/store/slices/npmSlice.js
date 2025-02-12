import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Define the async thunk to fetch npm user packages
export const fetchMyNPMPackagesCount = createAsyncThunk(
    'npm/fetchMyNPMPackagesCount',
    async(userName) => {
        const response = await fetch(`https://registry.npmjs.org/-/v1/search?text=maintainer:${userName}`);
        const data = await response.json();
        // Return the count of packages
        return data.total;
    }
)

const npmSlice = createSlice({
    name: "npm",
    initialState: {
        packageCount: 0,  // For storing the package count
        status: 'idle',  // For tracking the request status
        error: null,  // For tracking errors
    },
    reducers: {}.createSlice,
    extraReducers: (builder) => {
        builder
        .addCase(fetchMyNPMPackagesCount.pending,(state) => {
            state.status = "loading";
        })
        .addCase(fetchMyNPMPackagesCount.fulfilled,(state,action) => {
            state.status = "succeeded";
            state.packageCount = action.payload; // Set the package count
        })
        .addCase(fetchMyNPMPackagesCount.rejected,(state,action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

export default npmSlice.reducer;
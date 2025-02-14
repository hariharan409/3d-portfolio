import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Define the async thunk to fetch GitHub user repositories
export const fetchMyGithubReposCount = createAsyncThunk(
    'github/fetchMyGithubReposCount',
    async(userName) => {
        const response = await fetch(`https://api.github.com/users/${userName}/repos`);
        const data = await response.json();
        // Return the count of repositories
        return data.length;
    }
)

const githubSlice = createSlice({
    name: "github",
    initialState: {
        repoCount: 0,  // For storing the repository count
        isLiked: false,
        likeCount: 25,
        status: {
            repoCount: 'idle',  // For tracking the request status
        },
        error: null,  // For tracking errors
    },
    reducers: {
        updateLikes: (state) => {
            state.isLiked = !state.isLiked;
            state.isLiked ? state.likeCount += 1 : state.likeCount -= 1;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchMyGithubReposCount.pending,(state) => {
            state.status.repoCount = "loading";
        })
        .addCase(fetchMyGithubReposCount.fulfilled,(state,action) => {
            state.status.repoCount = "succeeded";
            state.repoCount = action.payload; // Set the repository count
        })
        .addCase(fetchMyGithubReposCount.rejected,(state,action) => {
            state.status.repoCount = 'failed';
            state.error = action.error.message;
        })
    }
});

export const {updateLikes} = githubSlice.actions;
export default githubSlice.reducer;
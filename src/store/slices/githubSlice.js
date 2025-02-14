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
);

// Define the async thunk to fetch the current like count from GitHub
export const fetchMyAppLikeCount = createAsyncThunk(
    'github/fetchMyAppLikeCount',
    async () => {
      try {
        const response = await fetch(import.meta.env.VITE_GITHUB_USER_INTERACTIONS_JSON_URL);
        const data = await response.json();
        const decodedContent = atob(data.content);
        return JSON.parse(decodedContent).count; // Return the like count
      } catch (error) {
        console.error('Error fetching like count:', error);
        return 0; // Default to 0 if an error occurs
      }
    }
  );

  // Define the async thunk to update the current like count from GitHub
export const updateMyAppLikeCount  = createAsyncThunk(
    'github/updateMyAppLikeCount',
    async(count) => {
        try {
            // Prepare the new content for the file
            const newContent = {count: count};
        
            // Encode the content in base64
            const encodedContent = btoa(JSON.stringify(newContent));
        
            // Fetch the current SHA of the file to make the update
            const response = await fetch(import.meta.env.VITE_GITHUB_USER_INTERACTIONS_JSON_URL);

            const data = await response.json();
            const sha = data.sha;

            // Now update the file with the new like count
            await fetch(
                import.meta.env.VITE_GITHUB_USER_INTERACTIONS_JSON_URL,
                {
                    method: 'PUT',
                    headers: {
                    'Authorization': `token ${import.meta.env.VITE_GITHUB_TOKEN}`,  // Add your GitHub token here (for authentication)
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        message: 'Updated like status for the text-to-video voice-over.',
                        content: encodedContent,
                        sha: sha,
                        branch: import.meta.env.VITE_GITHUB_BRANCH,
                    }),
                }
            );
            fetchMyAppLikeCount();
        } catch (error) {
            console.error('Error updating like count:', error);
        }
    }
)

const githubSlice = createSlice({
    name: "github",
    initialState: {
        repoCount: 0,  // For storing the repository count
        isLiked: false,
        likeCount: 1,
        status: {
            repoCount: 'idle',  // For tracking the request status
            getLikeCount: 'idle',
            updateLikeCount: 'idle'
        },
        error: null,  // For tracking errors
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        // get repo count from github
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
        // get app like count from github specific branch
        .addCase(fetchMyAppLikeCount.pending,(state) => {
            state.status.getLikeCount = "loading";
        })
        .addCase(fetchMyAppLikeCount.fulfilled,(state,action) => {
            state.status.getLikeCount = "succeeded";
            state.likeCount = action.payload; // Set the repository count
        })
        .addCase(fetchMyAppLikeCount.rejected,(state,action) => {
            state.status.getLikeCount = 'failed';
            state.error = action.error.message;
        })
        // update like count to github specific branch
        .addCase(updateMyAppLikeCount.pending,(state) => {
            state.status.updateLikeCount = "loading";
        })
        .addCase(updateMyAppLikeCount.fulfilled,(state,action) => {
            state.isLiked = !state.isLiked;
            state.status.updateLikeCount = "succeeded";
            state.likeCount = action.payload; // Set the repository count
        })
        .addCase(updateMyAppLikeCount.rejected,(state,action) => {
            state.status.updateLikeCount = 'failed';
            state.error = action.error.message;
        })
    }
});

export const {updateLikes} = githubSlice.actions;
export default githubSlice.reducer;
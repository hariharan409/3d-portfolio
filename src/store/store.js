import { configureStore } from "@reduxjs/toolkit";
import careerReducer from "./slices/careerSlice";
import githubReducer from "./slices/githubSlice";
import npmReducer from "./slices/npmSlice";

const store = configureStore({
    reducer: {
        career: careerReducer,
        github: githubReducer,
        npm   : npmReducer
    }
});

export default store;
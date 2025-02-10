import { configureStore } from "@reduxjs/toolkit";
import careerReducer from "./slices/careerSlice";

const store = configureStore({
    reducer: {
        career: careerReducer,
    }
});

export default store;
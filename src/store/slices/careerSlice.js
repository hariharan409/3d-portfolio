import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const calculateCareerDuration = () => {
    try {
        const careerStartedDate = moment(import.meta.env.VITE_CAREER_STARTED_DATE,"DD-MM-YYYY");
        const currentDate = moment(new Date());
        const monthsDiff = currentDate.diff(careerStartedDate,"months");
        // Convert months to years with one decimal place
        const yearsDiff = (monthsDiff / 12).toFixed(1);
        return yearsDiff;
    } catch (error) {
        console.error("Error calculating career duration:", error.message || error);
        return "N/A"; // Return a safe fallback
    }
}

const careerSlice = createSlice({
    name: "career",
    initialState: {
        careerDuration: calculateCareerDuration()
    }
});

export default careerSlice.reducer;
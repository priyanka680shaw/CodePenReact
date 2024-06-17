import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projects  : {}
}

const projectSlice = createSlice({
    name : "Projects",
    initialState,
    reducers : {
        set_Project  : (state , action)=>{
            state.projects = action.payload; 
        },
        set_null_Project : (state , action)=>{
            state.projects = action.payload
        }
    }
})

export const {set_Project} = projectSlice.actions;
export const projectsReducer = projectSlice.reducer;
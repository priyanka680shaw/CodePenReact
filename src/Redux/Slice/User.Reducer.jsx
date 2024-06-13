import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : ""
}

const userSlice = createSlice({
    name  : "usres",
    initialState,
    reducers : {
        setUser : (state , action)=>{
            state.user = action.payload;
        }
    }
})

//actions export
export const {setUser} = userSlice.actions;
//reducer export
export const userReducer = userSlice.reducer;
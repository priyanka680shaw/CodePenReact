import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    searchTerms : ""
}

const searchItemsSlice = createSlice({
    name : "filteredSearchItemsData",
    initialState,
    reducers:{
        setSearchTerms  : (state , action)=>{
            state.searchTerms = action.payload
        }
    }
})

//export

export const {setSearchTerms} = searchItemsSlice.actions;
export const searchReducer = searchItemsSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Slice/User.Reducer";
import { projectsReducer } from "./Slice/Project.Reducer";
import { searchReducer } from "./Slice/Search.Reducer";
export const store = configureStore(
    {
        reducer : {userReducer , projectsReducer , searchReducer}
    }
)














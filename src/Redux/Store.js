import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Slice/User.Reducer";
export const store = configureStore(
    {
        reducer : {userReducer}
    }
)
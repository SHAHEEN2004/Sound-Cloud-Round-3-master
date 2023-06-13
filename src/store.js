import { configureStore } from "@reduxjs/toolkit";
import list from "./reducer"
export const store= configureStore({
    reducer:{
        playlist:list
    }
})
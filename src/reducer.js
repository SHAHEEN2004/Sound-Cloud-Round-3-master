import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState={
    isLoading:false,
    allLists:[],
    isError:false
}
//async function to get all the data from json file when app loads initially
export const allData=createAsyncThunk(
 "search/searchMovies",async()=>{
    try {
        const {data} = await axios.get("playlist.json")
        return data
        // this is managed by extrareducers
    } catch (error) {
        // an alert will be shown when there is some error in fetching data
        alert(error)
    }
 }   
)

const showSlice=createSlice({
    name:"playlist",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(allData.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(allData.fulfilled,(state,{payload})=>{
            state.isLoading=false
            state.allLists=payload
            return state
        })
    }
})
export default showSlice.reducer
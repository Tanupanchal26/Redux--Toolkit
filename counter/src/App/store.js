import { configureStore } from "@reduxjs/toolkit";
import countReducer from'../feature/countSlice.js'
 const store = configureStore({
    reducer:{
        count: countReducer
    }
 }) 
 export default store
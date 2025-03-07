import { configureStore } from "@reduxjs/toolkit";
import countReducer from'../feature/countSlice.js'
import todoReducer from'../feature/TodoSlice.js'

 const store = configureStore({
    reducer:{
        count: countReducer,
        todoList:todoReducer
    }
 }) 
 export default store
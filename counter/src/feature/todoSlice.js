import { createSlice } from "@reduxjs/toolkit";

 
const todoSlice =createSlice({
 name:"todoList",
 initialState:0,
 reducers:{
 
    add:(state)=>state+1,
 
    update:(state)=>state-1,
    delete:()=>0,

 } 
})

// export const {add,update, delete} =todoSlice.actions

// export default todoSlice.reducer;
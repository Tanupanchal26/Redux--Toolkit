import { createSlice ,nanoid} from "@reduxjs/toolkit";

 
const todoSlice =createSlice({
 name:"todoList",
 initialState:[{id:1, text:"Tanya"}],
 reducers:{
 
    addtodo:(state,action)=>{
        state.push({id:nanoid(),text:action.payload});

    },
    // updatetodo:(state,action)=>{
    //     const {id,text}=action.payload;
    //     const todo=state.find((todo)=>todo.id===id);
    //     if(todo){
    //         todo.text=text;
    //     }
    // }
    
    removetodo:(state,action)=>{
        state.filter((todo)=>todo.id!==action.payload);
    }

 } 
})

export const {addtodo, removetodo} =todoSlice.actions

export default todoSlice.reducer;
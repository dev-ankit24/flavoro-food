import { createSlice } from "@reduxjs/toolkit";

const CategorySlice=createSlice({
    name:"category",
    initialState:{
        category:"All"
    },
    reducers:{
        setCategory:(state,action)=>{
            state.category=action.payload
        }
    }
})

export let {setCategory}=CategorySlice.actions
export default CategorySlice.reducer
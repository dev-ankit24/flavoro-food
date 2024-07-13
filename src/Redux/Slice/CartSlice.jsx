import { createSlice } from "@reduxjs/toolkit";

const CartSlice= createSlice({
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:{
       addToCart:(state,action)=>{
        state.cart.push(action.payload)
     },
     removeToCart:(state,action)=>{
       state.cart = state.cart.filter((item)=>item.id!==action.payload.id)
     }
    }
})

export const {addToCart,removeToCart}=CartSlice.actions;
export default CartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const CartSlice= createSlice({
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:{
       addToCart:(state,action)=>{
        let extingItem= state.cart.find((item)=>item.id===action.payload.id)
        if(extingItem){
            state.cart=state.cart.map((item)=>item.id=== action.payload.id? {...item, qty:item.id +1}: item.id)
        }
        else{
            state.cart.push(action.payload)
        }
     },
     removeToCart:(state,action)=>{
       state.cart = state.cart.filter((item)=>item.id!==action.payload.id)
     }
    }
})

export const {addToCart,removeToCart}=CartSlice.actions;
export default CartSlice.reducer;
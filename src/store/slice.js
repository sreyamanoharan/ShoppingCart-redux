import { createSlice } from "@reduxjs/toolkit";

const productList=createSlice({
    name:'productInfo',
    initialState:{
        item:[],
        cartItems:[]
    },
    reducers:{
        addItem:(state,action)=>{
            console.log('jjjjjjj',action.payload);
            state.item.push(action.payload)
        },
        addToCart:(state,action)=>{
            const item = action.payload;
            console.log('cart is here',action.payload);
            state.cartItems.push({ ...item, quantity: 1 });
            
        }
    }
})

export const {addItem,addToCart}=productList.actions
export default productList.reducer

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
            const existingItem=state.cartItems.find(cartItem=>cartItem.idCategory===item.idCategory)
            if(existingItem){
                existingItem.quantity+=1
            }else{
                console.log('cart is here',action.payload);
                state.cartItems.push({ ...item, quantity: 1 });
            }
          
            
        },
        removeItem:(state,action)=>{
            
            state.cartItems=state.cartItems.filter((cartItem)=>cartItem.idCategory!==action.payload)

        }
    }
})

export const {addItem,addToCart,removeItem}=productList.actions
export default productList.reducer

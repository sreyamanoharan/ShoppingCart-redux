import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const CartDetails = () => {


    const cartDetail=useSelector((state)=>state.productDetails.cartItems)
    console.log(cartDetail);
    
  

  return (
    <div>
  {cartDetail.map((cart,i)=>(
    <li>
        <name>{cart.strCategory}</name>
        <img src={cart.strCategoryThumb} alt="" /></li>
  ))}

    </div>
  )
}

export default CartDetails
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeItem} from '../store/slice'

const CartDetails = () => {

  const dispatch = useDispatch()

  const cartDetail = useSelector((state) => state.productDetails.cartItems)
  console.log(cartDetail);

  const [localQuantities, setLocalQuantities] = useState(
    cartDetail.map((item) => item.quantity)
  );

  const inc = (index) => {
    const newQuantities = [...localQuantities];
    newQuantities[index] += 1;
    setLocalQuantities(newQuantities);
  }

  const dec = (index) => {
    const newQuantities = [...localQuantities];
    newQuantities[index] -= 1;
    setLocalQuantities(newQuantities);
  }

  const removeCartItem = (i) => {
    dispatch(removeItem(i))
  }



  return (
    <div>
      {cartDetail.map((cart, i) => (
        <li>
          <name>{cart.strCategory}</name>
          <img src={cart.strCategoryThumb} alt="" /><br />
          <button onClick={() => dec(i)}>-</button><p>count: {localQuantities[i]}</p><button onClick={() => inc(i)}>+</button>
          <button onClick={() => removeCartItem(cart.idCategory)}>Remove</button>
        </li>
      ))}
    </div>
  )
}

export default CartDetails
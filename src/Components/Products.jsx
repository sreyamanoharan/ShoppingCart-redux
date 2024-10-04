import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addItem, addToCart } from '../store/slice'

const Products = () => {


const dispatch=useDispatch()   
const[category,setCategory]=useState([])

    useEffect(()=>{
        
      axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((res)=>{
            setCategory(res.data.categories.slice(0,12))
            dispatch(addItem(res.data))
        })
     },[dispatch])   


     const Tocart=(item)=>{
      dispatch(addToCart(item))
     }

  return (
    <div>
   <h1>Products</h1>
   {
    category.map((item,i)=>(
        <li>
        <img key={i} src={item.strCategoryThumb} alt="" />
        <button onClick={()=>Tocart(item)}>AddToCart</button>
        <button>Buy Now</button>
        </li>

        
    ))
   }
  
    </div>
  )
}

export default Products
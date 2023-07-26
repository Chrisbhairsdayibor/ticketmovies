import React from 'react'
import { useSelector } from 'react-redux'
export default function Cart() {


    
    const cart = useSelector((state) => state.cart.value)

  return (
    <div>
      <h1>Cart</h1>
      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </div>
  )
}
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/counterSlice'

export default function Counter() {


  
    
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
      <h1>Counter</h1>
      {count}
      <button onClick={()=>{dispatch(increment())}}>+</button>
      <button onClick={()=>{dispatch(decrement())}}>-</button>
      
    </div>
  )
}
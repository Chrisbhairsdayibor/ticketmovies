import React from 'react'
import { useDeleteMoviesMutation, useGetMoviesQuery } from '../features/APISlice'
import { Link } from 'react-router-dom'
import { useDispatch, } from 'react-redux'
import { addToCart } from '../features/cartSlice'

export default function Home() {

    const {data, isLoading, error}=useGetMoviesQuery()
    const {DeleteMovies}=useDeleteMoviesMutation


    
    // const cart = useSelector((state) => state.cart.value)
    const dispatch = useDispatch()
  return (
    <div>
      <h1>Home</h1>
      
     <Link to="/cart">Cart</Link>
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
      {isLoading && <h1>Loading...</h1>}
      {data && <div>
        
        {data?.map((item) => (
          <div key={item.id}>
            <p>{item.id}</p>
            <h1>{item.title}</h1>
            <h1>{item.genre}</h1>
            <h1>{item.director}</h1>
            <h1>{item.stars}</h1>
            <p>{item.plot}</p>
            <img src={item.image} alt="" />

<Link to={`/${item.id}`}>
<button>Show Details</button>
</Link>
            <button onClick={()=>{dispatch(addToCart(item))}}>Cart</button>
            {/* <button onClick={() => alert(item.id)}>❤️</button> */}
            <button onClick={()=>{DeleteMovies(item.id)}}>Delete</button>
           <hr />
          </div>
        ))}
        </div>}
    </div>
  )
}
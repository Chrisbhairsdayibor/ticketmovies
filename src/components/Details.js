import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetMoviesByIDQuery } from '../features/APISlice'


export default function Details() {


    const { id } = useParams()

    const {data }=useGetMoviesByIDQuery(id)
    
  return (
    <div>
      <h1>Details</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
{id}
      
    </div>
  )
}
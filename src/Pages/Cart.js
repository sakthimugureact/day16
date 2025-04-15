import React from 'react'
import { useParams } from 'react-router-dom'

function Cart() {
    let {id} = useParams();
  return (
    <div>
        <h1>{id? `Product : ${id}` : "No Product"}</h1>
    </div>
  )
}

export default Cart
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Product() {
    const users = ["apple","mango","orange"]
  return (
    <>
    <nav>
        <Link to={`cart/${users[1]}`} style={{textDecoration:"none",padding:"15px"}}>Cart</Link>
        <Link to={`cart2/Name`} style={{textDecoration:'none',padding:"15px"}}>Cart-name</Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default Product
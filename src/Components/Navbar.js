import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{background:"black",padding:"15px"}}>
        <Link to="/" style={{textDecoration:"none",color:"white",padding:"15px"}}>Home</Link>
        <Link to="/about" style={{textDecoration:"none",color:"white",padding:"15px"}}>About</Link>
        <Link to="/product" style={{textDecoration:"none",color:"white",padding:"15px"}}>Product</Link>
        <Link to="/blog" style={{textDecoration:"none",color:"white",padding:"15px"}}>Blog</Link>
        <Link to="/movie" style={{textDecoration:"none",color:"white",padding:"15px"}}>Movie</Link>
    </div>
  )
}

export default Navbar
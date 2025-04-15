import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function About() {
  const navi = useNavigate()
  return (
    <div>
      <button onClick={()=>navi("/product")}>Go to Product Page</button>
      <Link to="/">Return to Home Page</Link>
    </div>
  )
}

export default About
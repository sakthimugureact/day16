import React from 'react'
import { useParams } from 'react-router-dom'

function Output() {
    let {id} = useParams()
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Product : {id}</h1>
    </div>
  )
}

export default Output
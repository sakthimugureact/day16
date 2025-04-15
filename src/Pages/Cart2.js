import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Cart2() {
    let {name} = useParams()
    const[opt,setOpt] = useState([])
    const [user,setUser] = useState(false);

    function run(){
        fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(data=>setOpt(data))
    }

    useEffect(()=>{
        if(name=="Name"){
            run()
        }
    },[name])
  
    
  return (
    <div>
        <h1 style={{textAlign:"center"}}>{isNaN(name)?`${name}`:"Invalid"}</h1>
        {opt.map((val)=>(
            <li key={val.id}>{val.name}</li>
        ))}
    </div>
  )
}

export default Cart2
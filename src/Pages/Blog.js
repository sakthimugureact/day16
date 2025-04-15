import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Blog() {
    const [blog,setBlog] = useState([]);
        useEffect(()=>{
            fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(data=>setBlog(data))
        },[])
      
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Blog page</h1>
        {blog.map((val)=>(
            <Link to={`/blogcontent/${val.id}`}>
                 <button key={val.id}>{val.name}</button>
            </Link>
           
))}
    </div>
  )
}

export default Blog
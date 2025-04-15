import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function BlogContent() {
    let {id} = useParams();

    const [content,setContent] = useState("");
    console.log(content);

    
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>{

            
            const show = data.find(p=>p.id===parseInt(id));
        
            setContent(show)
        })
    },[id])
  return (
    <div>
        <h1 style={{textAlign:"center"}}>BLog Content</h1>
        <p>{content.email}</p>
    </div>
  )
}

export default BlogContent
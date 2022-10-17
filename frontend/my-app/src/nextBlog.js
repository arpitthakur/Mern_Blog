import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function NextBlog() {
 const {id} = useParams()
const [post,setPost]=useState({
  desc:"",
  title:""
})
 
 useEffect(()=>{
getPostById()
 },[])

 const getPostById =async () =>{
  const data = await axios.get("http://localhost:7000/getBlog/"+id);
  console.log(data)
  if(data){
    setPost((post)=>{
      return{
        ...post,
        desc:data.data.data.Description,
        title:data.data.data.Title
      }
    })
  }
 }
  return (
    <div>
    
    <p>{post.title}</p>
    <p>{post.desc}</p>
    </div>
  )
}

export default NextBlog
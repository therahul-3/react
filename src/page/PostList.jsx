import React, { useEffect, useState } from 'react'
import PostCard from '../componet/PostCard'
import axios from 'axios'

function PostList() {
const [list,setList]=useState([])
const [loading,setLoading]=useState(false)
const getPostList=async()=>{
    setLoading(true)
//     await fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json()).then((res)=>{    
//     setList(res)
// })
await axios('https://jsonplaceholder.typicode.com/posts').then(res=>setList(res.data))

setLoading(false)
}
console.log(list,'list')


useEffect(()=>{
getPostList()
},[])

if(loading)
    return <p>loading...</p>

  return (
    <div>
        {loading && <p>Loading...</p>}
        <p className='card'></p>
      
        {list.map((item)=><PostCard title={item?.title} body={item?.body} id={item?.id} userId={item?.userId} />)}
      
    </div>
  )
}

export default PostList

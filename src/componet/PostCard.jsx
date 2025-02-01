import React from 'react'
import css from '../css/post.module.css'

function PostCard({title,userId,id,body}) {
    console.log(css)
  return (
    <div className={css.card}>
      <p>uId: <b>{userId}</b></p>
      <p>Id: <b>{id}</b></p>
      <p>title: <b>{title}</b></p>
      <p>body: <b>{body}</b></p>
    </div>
  )
}

export default PostCard

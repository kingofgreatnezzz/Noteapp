import React, { useEffect, useState } from 'react'
import axios from 'axios'




function NotePage({postId}) {
  const [post, setPost] = useState(null)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res =>{
      res.setPost.json()
    })
    .then(data => setPost.data())
    .catch(err => {
      console.log('errro fetchng data', err)
    })
  },[postId])

  return (
    <div>
      <h2>{post.title}</h2>
      <h2>{post.body}</h2>
      <p></p>
    </div>
  )
}

export default NotePage

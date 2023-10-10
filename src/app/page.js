
'use client'

import Card from "@/components/hedear/Card";
import React, { useEffect, useState } from "react"

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  console.log(posts)
  return (
    <>
      {
        posts?.map(post =>
          <Card
            key={post?.id}
            post={post}
          />)
      }
    </>

  )
}

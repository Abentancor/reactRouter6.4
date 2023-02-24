import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Post = () => {

    const {post} = useLoaderData()


  return (
    <div className='h-screen w-2/3 m-auto text-white'>
        <h2 className='text-center text-2xl font-semibold mt-8'>{post.id} - {post.title}</h2>
        <p className='my-8 font-semibold text-justify'>
            {post.body}
        </p>
        <Link className='border-2 p-1 shadow-md shadow-black rounded-lg hover:bg-emerald-800 hover:shadow' to='/blog'>Volver a Blogs</Link>
    </div>
  )
}

export default Post


export const loaderPost = async({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    if(!res.ok)throw({
      status:res.status,
      statusText:"Post not found"
    })

    const post = await res.json();
    return{post}
}
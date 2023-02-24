import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export const loaderBlog = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if(!res.ok)throw({
    status:res.status,
    statusText:"Post not found"
  })

  const posts = await res.json()
  return {posts}
}



const Blog = () => {

  const {posts} = useLoaderData()
  console.log(posts)

  return (
    <>
    <h2 className='text-center text-2xl font-semibold text-white my-8'>Blogs</h2>
      <ul className='grid grid-cols-2  text-white font-medium gap-2 w-2/3 m-auto mb-8'>
        {posts.length > 0 ? (
          posts.map((blog)=>(
            <li key={blog.id}>
              <Link to={`/blog/${blog.id}`}>{blog.id} - {blog.title}</Link>
            </li>
          ))
        ):(
          <li>
            No blogs found
          </li>
        )}
      </ul>
    </>
  )
}

export default Blog
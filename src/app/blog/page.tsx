import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: "Blog"
  }
}

const Blog = async () => {

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay to simulate loading UI!")
    }, 2000);
  })
  
  return (
    <div className='main flex h-100 justify-center align-center'>
      <h2 className='text-[2rem]'>blog route</h2>
    </div>
  )
}

export default Blog

import React, { Suspense } from 'react'
import Author from './author'

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

const PostSequential = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts: Post[] = await response.json()

    const filteredPost = posts.filter(post => post.id % 10 == 1)

    return (
        <div className='blog-container'>
            <h1>Blog Posts</h1>
            <div className='blog-box'>
                {
                    filteredPost.map(post => (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <Suspense fallback={<div>Loading Author...</div>}>
                                <Author userId={post.userId} />
                            </Suspense>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default PostSequential

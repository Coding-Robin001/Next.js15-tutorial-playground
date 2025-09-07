import { Suspense } from 'react'
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
        <div className='blog-container p-4 text-[#fff] bg-black'>
            <h1 className='text-[2rem] mt-4 mb-4'>Blog Posts</h1>
            <div className='blog-box'>
                {
                    filteredPost.map(post => (
                        <div key={post.id} className='blog'>
                            <h2 className='text-[1.4rem] font-bold mb-4'>{post.title}</h2>
                            <p className='text-[1rem] mb-4'>{post.body}</p>
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

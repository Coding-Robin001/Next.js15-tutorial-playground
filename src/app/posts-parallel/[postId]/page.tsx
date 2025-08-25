import React from 'react'

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

type Album = {
    userId: number,
    id: number,
    title: string,
}

async function getUserPosts(userId: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    return response.json()
}

async function getUserAlbums(userId: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
    return response.json()
}

const PostsParallel = async ({ params }: { params: { postId: string } }) => {
    const { postId } = params

    const postsData = getUserPosts(postId)
    const albumsData = getUserAlbums(postId)

    const [posts, albums] = await Promise.all([postsData, albumsData])

    return (
        <div>
            <h2>posts</h2>
            <div>
                {
                    posts.map((post: Post) => (
                        <div key={post.id}>
                            <p>{post.title}</p>
                            <span>{post.body}</span>
                        </div>
                    ))
                }
            </div>
            <h2>albums</h2>
            <div>
                {
                    albums.map((album: Album) => (
                        <div key={album.id}>
                            <p>{album.title}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default PostsParallel

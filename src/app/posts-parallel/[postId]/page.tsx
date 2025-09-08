import UserPosts from '../usersPost';
import UserAlbums from '../userAlbum';

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

async function getUserPosts(userId: string): Promise<Post[]> {

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    if (!response.ok) throw new Error("Failed to fetch posts");
    return response.json();
}

async function getUserAlbums(userId: string): Promise<Album[]> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    if (!response.ok) throw new Error("Failed to fetch albums");
    return response.json();
}


const PostsParallel = async ({ params }: { params: { postId: string } }) => {
    const { postId } = await params

    const postsData = getUserPosts(postId)
    const albumsData = getUserAlbums(postId)

    const [posts, albums] = await Promise.all([postsData, albumsData])

    return (
        <div className='parallel-wrapper bg-black p-4 min-h-[100vh] text-[#fff]'>
            <h2 className='text-[2rem] ml-4'>User Profile</h2>

            <div className='parallel-box'>
                    <UserPosts posts={posts} />
                    <UserAlbums albums={albums} />
            </div>

        </div >
    )
}

export default PostsParallel

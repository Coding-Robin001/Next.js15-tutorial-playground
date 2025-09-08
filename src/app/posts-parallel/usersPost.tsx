// UserPosts.tsx
type Post = { id: number; title: string; body: string };

export default function UserPosts({ posts }: { posts: Post[] }) {
  return (
    <div>
      <h2 className="text-xl">Posts</h2>
      {posts.map(post => (
        <div key={post.id} className="bg-white text-black my-4 p-4 rounded-lg">
          <p className="font-bold">{post.title}</p>
          <span className="text-gray-600">{post.body}</span>
        </div>
      ))}
    </div>
  );
}

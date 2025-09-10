// import ErrorMessage from "./ErrorMessage";

// type Post = {
//   userId: number,
//   id: number,
//   title: string,
//   body: string
// };

// async function getUserPosts(userId: string): Promise<Post[]> {

//   await new Promise((resolve) => setTimeout(resolve, 3000)); // slow fetch
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
//   if (!response.ok) throw new Error("Failed to fetch posts");
//   return response.json();
// }


// const UserPosts = async ({ userId }: { userId: string }) => {

//   try {
//     const posts = await getUserPosts(userId)

//     return (
//       <div className="w-[550px] mt-4">
//         <h3 className="text-[#fff] text-[1.2rem] mb-4">Posts</h3>
//         <ul>
//           {posts.map((p) => (
//             <li key={p.id} className="bg-[#fff] my-4 p-4 rounded-lg text-black">
//               <p className="font-bold mb-2 text-[1.1rem]">{p.title}</p>
//               <span className="text-[#313131ff]">{p.body}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   } catch (err: any) {
//     return <ErrorMessage message={err.message} color="red"/>;
//   }
// };

// export default UserPosts;
// components/UserPosts.tsx (Server Component)
import { fetchUserPosts } from "@/utils/data";
import PostsList from "./postsList";
import ClientPosts from "./clientPosts";

const UserPosts = async ({ userId }: { userId: string }) => {
  try {
    const posts = await fetchUserPosts(userId); // SSR; suspends during load
    return <PostsList posts={posts} />;
  } catch (err: any) {
    // Don’t bubble to error.tsx; render client retry instead
    return <ClientPosts userId={userId} initialError={err.message} />;
  }
};

export default UserPosts;

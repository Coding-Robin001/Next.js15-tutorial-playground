
import { fetchUserPosts } from "@/utils/data";
import { PostsList } from "./lists";
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

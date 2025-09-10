import { Suspense } from "react";
import UserPosts from "./usersPost";
import UserAlbums from "./userAlbum";

type Props = {
  params: Promise<{ postId: string }>;
};

export default async function PostsParallel({ params }: Props) {
  const { postId } = await params

  return (
    <div className="parallel-wrapper bg-black p-4 min-h-[100vh] text-[#fff]">
      <h2 className="text-[2rem] ml-4">User Profile</h2>

      <div className="parallel-box">
        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center gap-3 h-100 w-[500px]">
              <p className="text-lg text-red-400 font-semibold">
                Loading posts...
              </p>
              <div className="w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          }
        >
          <UserPosts userId={postId} />
        </Suspense>

        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center gap-3 h-100 w-[500px]">
              <p className="text-lg text-blue-400 font-semibold">
                Loading albums...
              </p>
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          }
        >
          <UserAlbums userId={postId} />
        </Suspense>
      </div>
    </div>
  );
}

// components/Lists.tsx
"use client";

import type { Post, Album } from "@/utils/data";

// ----------------- Posts -----------------
export function PostsList({ posts }: { posts: Post[] }) {
    return (
        <div className="w-[550px] mt-4">
            <h3 className="text-[#fff] text-[1.2rem] mb-4">Posts</h3>
            <ul>
                {posts.map((p) => (
                    <li
                        key={p.id}
                        className="bg-[#fff] my-4 p-4 rounded-lg text-black"
                    >
                        <p className="font-bold mb-2 text-[1.1rem]">{p.title}</p>
                        <span className="text-[#313131ff]">{p.body}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// ----------------- Albums -----------------
export function AlbumsList({ albums }: { albums: Album[] }) {
    return (
        <div className="w-[550px] mt-4">
            <h3 className="text-[#fff] text-[1.2rem] mb-4">Albums</h3>
            <ul>
                {albums.map((a) => (
                    <li
                        key={a.id}
                        className="bg-[#fff] my-4 p-4 rounded-lg text-black"
                    >
                        {a.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

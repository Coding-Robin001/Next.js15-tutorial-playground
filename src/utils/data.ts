// data.ts
import { cache } from "react";

export const getUserPosts = cache(async (userId: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
});

export const getUserAlbums = cache(async (userId: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  if (!res.ok) throw new Error("Failed to fetch albums");
  return res.json();
});

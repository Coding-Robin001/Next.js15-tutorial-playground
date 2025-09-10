
export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Album = {
  userId: number;
  id: number;
  title: string;
};

export async function fetchUserPosts(userId: string): Promise<Post[]> {

  // simulate slow network
  await new Promise((r) => setTimeout(r, 3000));

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export async function fetchUserAlbums(userId: string): Promise<Album[]> {

  // simulate slow network
  await new Promise((r) => setTimeout(r, 5000));

  const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch albums");
  }

  return res.json();
}

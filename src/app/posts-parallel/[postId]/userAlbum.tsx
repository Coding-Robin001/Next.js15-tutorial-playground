type Album = {
  userId: number;
  id: number;
  title: string;
};

async function getUserAlbums(userId: string): Promise<Album[]> {
    await new Promise((resolve) => setTimeout(resolve, 10000)); // slow fetch
  const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  if (!response.ok) throw new Error("Failed to fetch albums");
  return response.json();
}

const UserAlbums = async ({ userId }: { userId: string }) => {

  const albums = await getUserAlbums(userId);

  return (
    <div className="w-[550px] mt-4">
      <h3 className="text-[#fff] text-[1.2rem] mb-4">Albums</h3>
      <ul>
        {albums.map((a) => (
          <li className="bg-[#fff] my-4 p-4 rounded-lg text-[black]"
          key={a.id}>{a.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserAlbums;

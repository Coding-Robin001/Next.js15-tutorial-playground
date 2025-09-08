// UserAlbums.tsx
type Album = { id: number; title: string };

export default function UserAlbums({ albums }: { albums: Album[] }) {
  return (
    <div>
      <h2 className="text-xl">Albums</h2>
      {albums.map(album => (
        <div key={album.id} className="bg-white text-black my-4 p-4 rounded-lg">
          <p>{album.title}</p>
        </div>
      ))}
    </div>
  );
}

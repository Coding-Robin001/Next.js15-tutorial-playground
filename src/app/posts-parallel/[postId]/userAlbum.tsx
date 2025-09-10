
import { fetchUserAlbums } from "@/utils/data";
import { AlbumsList } from "./lists";
import ClientAlbums from "./clientAlbums";

const UserAlbums = async ({ userId }: { userId: string }) => {
  try {
    const albums = await fetchUserAlbums(userId); // SSR; suspends during load
    return <AlbumsList albums={albums} />;
  } catch (err: any) {
    // Don’t bubble to error.tsx; render client retry instead
    return <ClientAlbums userId={userId} initialError={err.message} />;
  }
};

export default UserAlbums;

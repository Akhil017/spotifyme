import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import { getUserPlaylist } from "../_actions/spotify-apis";

export default async function Playlist() {
  const session = await auth();
  const userPlaylist = await getUserPlaylist(session?.accessToken!);

  if (!userPlaylist) return <p>no data</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      {userPlaylist?.items?.map((playlist) => (
        <div
          key={playlist.id}
          className="p-4 border rounded-lg flex gap-2 hover:border-primary duration-300"
        >
          <Link href={`/tracks/${playlist.id}`}>
            <div className="size-20  md:size-28 relative rounded-full border-[3px] border-primary duration-300 shrink-0">
              <Image
                src={playlist?.images?.[0]?.url}
                className="rounded-full"
                alt="Picture of the author"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </Link>
          <div className="space-y-2">
            <h4 className="font-medium">{playlist?.name}</h4>
            <p className="text-sm text-muted-foreground">
              Owner: {playlist?.owner?.display_name}
            </p>
            <p className="text-xs text-muted-foreground">
              {playlist?.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

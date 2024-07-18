import { auth } from "@/auth";
import { getTopArtist } from "../_actions/spotify-apis";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default async function Artists() {
  const session = await auth();
  const artistList = await getTopArtist(session?.accessToken!, 50);

  if (!artistList) return <p>no data</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      {artistList?.items?.map((artist) => (
        <div
          key={artist.id}
          className="p-4 border rounded-lg flex gap-2 hover:border-primary duration-300"
        >
          <Link href={`/artists/${artist.id}`}>
            <div className="size-20  md:size-28 relative rounded-full border-[3px] border-primary duration-300 shrink-0">
              <Image
                src={artist.images[0].url}
                className="rounded-full"
                alt="Picture of the author"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </Link>
          <div className="space-y-2">
            <h4 className="font-medium">{artist?.name}</h4>
            <div className="flex gap-2 flex-wrap">
              {artist?.genres?.map((genre) => (
                <Badge
                  key={genre}
                  variant="secondary"
                  className="text-xs font-normal"
                >
                  {genre}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

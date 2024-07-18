import { auth } from "@/auth";
import { getTopTracks } from "../_actions/spotify-apis";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Tracks() {
  const session = await auth();
  const trackList = await getTopTracks(session?.accessToken!, 50);

  if (!trackList) return <p>no data</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      {trackList?.items?.map((track) => (
        <div
          key={track.id}
          className="p-4 border rounded-lg flex gap-2 hover:border-primary duration-300"
        >
          <Link key={track.id} href={`/tracks/${track.id}`}>
            <div className="size-20  md:size-28 relative rounded-full border-[3px] border-primary duration-300 shrink-0">
              <Image
                src={track?.album?.images[0]?.url}
                className="rounded-full"
                alt="Picture of the author"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </Link>
          <div className="space-y-2">
            <h4 className="font-medium">{track?.name}</h4>
            <div className="flex gap-2 flex-wrap">
              {track?.artists?.slice(0, 4).map((artist) => (
                <Badge
                  key={artist.id}
                  variant="secondary"
                  className="text-xs font-normal"
                >
                  {artist.name}
                </Badge>
              ))}
              {track?.artists?.length > 4 && (
                <Collapsible>
                  <CollapsibleContent>
                    <div className="flex gap-2 flex-wrap">
                      {track?.artists?.slice(4).map((artist) => (
                        <Badge
                          key={artist.id}
                          variant="secondary"
                          className="text-xs font-normal"
                        >
                          {artist.name}
                        </Badge>
                      ))}
                    </div>
                  </CollapsibleContent>
                  <CollapsibleTrigger asChild>
                    <Button variant="link" size="sm">
                      View more
                    </Button>
                  </CollapsibleTrigger>
                </Collapsible>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

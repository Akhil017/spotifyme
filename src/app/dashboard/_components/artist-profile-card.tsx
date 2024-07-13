import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function ArtistProfileCard({
  artistInfo,
}: {
  artistInfo: ArtistInfo;
}) {
  if (!artistInfo) return <p>No data</p>;

  return (
    <div>
      <Card>
        <CardContent className="p-6 flex gap-4">
          <div className="w-24 h-24 md:w-28 md:h-28 relative rounded-full border-4 border-primary duration-300">
            <Image
              src={artistInfo.images[1].url}
              className="rounded-full"
              alt="Picture of the author"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <div>
              <h3 className="text-xl font-semibold">{artistInfo.name}</h3>
              <p className="text-muted-foreground text-sm">
                {artistInfo.followers.total} Followers
              </p>
            </div>
            <div className="flex gap-2 ">
              {artistInfo.genres.map((genre) => (
                <Badge key={genre} variant="secondary">
                  {genre}
                </Badge>
              ))}
            </div>
            <Link
              target="_blank"
              href={artistInfo.external_urls.spotify}
              className="text-sm text-primary underline"
            >
              See in spotify
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

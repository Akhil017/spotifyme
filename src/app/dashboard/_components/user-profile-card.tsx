import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { auth } from "@/auth";
import { getUserInfo } from "../_actions/spotify-apis";
import { Separator } from "@/components/ui/separator";

export default async function UserProfileCard() {
  const session = await auth();
  const userInfo = await getUserInfo(session?.accessToken!);

  if (!userInfo) return <p>No data</p>;

  return (
    <div>
      <Card>
        <CardContent className="p-6 flex gap-4">
          <div className="w-24 h-24 md:w-28 md:h-28 relative rounded-full border-4 border-primary duration-300">
            <Image
              src={userInfo.images[1].url}
              className="rounded-full"
              alt="Picture of the author"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <div>
              <h3 className="text-xl font-semibold">{userInfo.display_name}</h3>
              <div className="flex h-4 items-center space-x-2 text-sm">
                <p className="text-muted-foreground text-sm">
                  {userInfo.followers.total} Followers
                </p>
                <Separator orientation="vertical" />
                <p className="text-muted-foreground text-sm">
                  {userInfo.followers.total} Following
                </p>
                <Separator orientation="vertical" />
                <p className="text-muted-foreground text-sm">{15} Playlist</p>
              </div>
            </div>
            {/* <div className="flex gap-2 ">
              {userInfo.genres.map((genre) => (
                <Badge key={genre} variant="secondary">
                  {genre}
                </Badge>
              ))}
            </div> */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

import { auth } from "@/auth";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  getUserFollowing,
  getUserInfo,
  getUserPlaylist,
} from "../../_actions/spotify-apis";

export default async function UserProfileCard() {
  const session = await auth();

  const [userInfo, userFollowing, userPlaylist] = await Promise.all([
    getUserInfo(session?.accessToken!),
    getUserFollowing(session?.accessToken!),
    getUserPlaylist(session?.accessToken!),
  ]);

  if (!userInfo) return <p>No data</p>;

  return (
    <div>
      <Card>
        <CardContent className="p-4 md:p-6 flex flex-col gap-4 items-center justify-center">
          <div className="size-24  md:size-28 relative rounded-full border-4 border-primary duration-300 shrink-0">
            <Image
              src={userInfo.images[1].url}
              className="rounded-full"
              alt="Picture of the author"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-2 justify-center">
              <h3 className="text-lg sm:text-xl font-bold">
                {userInfo.display_name}
              </h3>
              {userInfo?.product === "premium" && <Crown className="size-5" />}
            </div>
            <div className="flex flex-wrap text-muted-foreground font-semibold text-sm sm:text-base items-center justify-center">
              <p>{userInfo.followers.total} Followers</p>
              <div className="w-0 border-r-2 mx-2" />
              <p>{userFollowing?.artists.total} Following</p>
              <div className="w-0 border-r-2 mx-2" />
              <p>{userPlaylist?.total} Playlist</p>
            </div>

            <Link
              target="_blank"
              href={userInfo.external_urls.spotify}
              className="flex gap-1 items-center text-sm text-primary underline mt-2"
            >
              <ExternalLink className="size-4" /> See in spotify
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

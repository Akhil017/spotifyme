import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { auth } from "@/auth";
import {
  getUserCurrentlyPlaying,
  getUserFollowing,
  getUserInfo,
  getUserPlaylist,
} from "../_actions/spotify-apis";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Crown } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { millisToMinutesAndSeconds } from "../_utils/helpers";

export default async function UserProfileCard() {
  const session = await auth();

  const [userInfo, userFollowing, userPlaylist, currentlyPlaying] =
    await Promise.all([
      getUserInfo(session?.accessToken!),
      getUserFollowing(session?.accessToken!),
      getUserPlaylist(session?.accessToken!),
      getUserCurrentlyPlaying(session?.accessToken!),
    ]);

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
              <h3 className="text-xl font-bold">{userInfo.display_name}</h3>
              <div className="flex h-4 items-center space-x-2 font-semibold">
                <p className="text-muted-foreground">
                  {userInfo.followers.total} Followers
                </p>
                <Separator orientation="vertical" />
                <p className="text-muted-foreground">
                  {userFollowing?.artists.total} Following
                </p>
                <Separator orientation="vertical" />
                <p className="text-muted-foreground">
                  {userPlaylist?.total} Playlist
                </p>
              </div>
            </div>
            {userInfo.product === "premium" && (
              <p>
                <Badge className="text-background">
                  Premium <Crown className="size-4 ml-2" />
                </Badge>
              </p>
            )}
            <Link
              target="_blank"
              href={userInfo.external_urls.spotify}
              className="text-sm text-primary underline"
            >
              See in spotify
            </Link>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="flex flex-col gap-4">
              {/* <h3>Recently played</h3> */}
              <div className="flex gap-2">
                <div className="size-16 relative rounded-full border-2 duration-300">
                  <Image
                    src={currentlyPlaying?.item?.album?.images[0]?.url!}
                    alt="Picture of the author"
                    className="rounded-full"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <p className="text-sm">{currentlyPlaying?.item?.name}</p>
                  <p className="text-xs text-muted-foreground space-x-1.5">
                    {currentlyPlaying?.item?.artists?.map((artist) => (
                      <span key={artist.id}>{artist.name}</span>
                    ))}
                  </p>
                  <div className="w-44 mt-2">
                    <Progress
                      value={
                        currentlyPlaying?.item.duration_ms! /
                        currentlyPlaying?.progress_ms!
                      }
                      className="w-full h-1.5"
                    />
                    <p className="text-xs text-muted-foreground flex items-center justify-between">
                      <span>
                        {millisToMinutesAndSeconds(
                          currentlyPlaying?.progress_ms!
                        )}
                      </span>
                      <span>
                        {millisToMinutesAndSeconds(
                          currentlyPlaying?.item.duration_ms!
                        )}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

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
        <CardContent className="p-4 md:p-6 grid grid-cols-5 gap-4">
          <div className="col-span-5 md:col-span-3 flex items-start justify-start gap-4 min-h-max">
            <div className="size-20 sm:size-24 md:size-28 relative rounded-full border-4 border-primary duration-300 shrink-0">
              <Image
                src={userInfo.images[1].url}
                className="rounded-full"
                alt="Picture of the author"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-lg sm:text-xl font-bold">
                {userInfo.display_name}
              </h3>
              <div className="text-xs sm:text-base flex h-4 items-center space-x-1 sm:space-x-2 font-semibold flex-wrap">
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
              <div className="flex md:flex-col gap-2 mt-4">
                {userInfo.product === "premium" && (
                  <Badge className="text-background w-fit">
                    Premium <Crown className="size-4 ml-2" />
                  </Badge>
                )}
                <Link
                  target="_blank"
                  href={userInfo.external_urls.spotify}
                  className="text-sm text-primary underline"
                >
                  See in spotify
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-5 md:col-span-2  flex-1 flex flex-col items-start md:items-center justify-center">
            <div className="flex flex-col gap-2">
              <h3 className="md:hidden">Recently played</h3>
              <div className="flex gap-2">
                <div className="size-16 relative rounded-full border-2 duration-300 shrink-0">
                  <Image
                    src={currentlyPlaying?.item?.album?.images[0]?.url!}
                    alt="Picture of the author"
                    className="rounded-full"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <p className="text-sm truncate max-w-52">
                    {currentlyPlaying?.item?.name}
                  </p>
                  <p className="text-xs text-muted-foreground flex gap-1.5 flex-wrap line-clamp-1">
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
                    <p className="text-xs text-muted-foreground flex items-center justify-between ">
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

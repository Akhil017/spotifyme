import { auth } from "@/auth";
import { getTopArtist } from "./_actions/spotify-apis";
import Image from "next/image";
import FollowersRadialChart from "./_components/charts/followers-radial-chart";
import { FollowersBarChart } from "./_components/charts/followers-bar-chart";
import Link from "next/link";
import UserProfileCard from "./_components/user-profile-card";

export default async function Page() {
  const session = await auth();
  const data = await getTopArtist(session?.accessToken!);

  const followersData =
    data?.items?.slice(0, 5)?.map((item) => ({
      artist: item.name,
      image: item.images[0].url,
      followers: item.followers.total,
    })) || [];

  const populairtyData =
    data?.items?.slice(0, 5)?.map((item, index) => ({
      artist: item.name,
      popularity: item.popularity,
      fill: `hsl(var(--chart-${index + 1}))`,
    })) || [];

  if (!data) return <p>No data</p>;

  return (
    <div className="space-y-8">
      <UserProfileCard />
      <h1 className="text-2xl font-semibold">Your top 5 artists</h1>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
        {data?.items?.slice(0, 5)?.map((item) => (
          <div
            key={item.id}
            className="flex items-center flex-col gap-2 justify-center cursor-pointer"
          >
            <div className="col-span-1 w-24 h-24 md:w-32 md:h-32 relative rounded-full border-4 hover:border-primary duration-300">
              <Link href={`/dashboard/${item.id}`}>
                <Image
                  src={item.images[0].url}
                  className="rounded-full"
                  alt="Picture of the author"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Link>
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2">
          <FollowersBarChart data={followersData} />
        </div>
        <div className="col-span-1 w-full">
          <FollowersRadialChart data={populairtyData} />
        </div>
      </div>
      <h1 className="text-2xl font-semibold">Your top 5 tracks</h1>
    </div>
  );
}

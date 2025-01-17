import Image from "next/image";
import FollowersBarChart from "./followers-bar-chart";
import Link from "next/link";
import { Session } from "next-auth";
import PopularityRadialChart from "./followers-radial-chart";
import { getTopArtist } from "@/app/(app)/_actions/spotify-apis";

type TopArtistProps = {
  session: Session | null;
};

export default async function TopArtist({ session }: TopArtistProps) {
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
    <>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
        {data?.items?.slice(0, 5)?.map((item) => (
          <div
            key={item.id}
            className="flex items-center flex-col gap-2 justify-center cursor-pointer"
          >
            <div className="col-span-1 w-24 h-24 md:w-32 md:h-32 relative rounded-full border-4 hover:border-primary duration-300">
              <Link href={`/artists/${item.id}`}>
                <Image
                  src={item.images[0].url}
                  className="rounded-full"
                  alt="Picture of the author"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Link>
            </div>
            <p className="line-clamp-1">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-8">
        <div className="col-span-1 md:col-span-2 ">
          <FollowersBarChart data={followersData} />
        </div>
        <div className="col-span-1 w-full ">
          <PopularityRadialChart data={populairtyData} />
        </div>
      </div>
    </>
  );
}

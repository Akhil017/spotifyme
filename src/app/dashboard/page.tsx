import { auth } from "@/auth";
import { getTopArtist } from "./_actions/spotify-apis";
import Image from "next/image";
import FollowersRadialChart from "./_components/charts/followers-radial-chart";
import PopularityPieChart from "./_components/charts/popularity-pie-chart";

export default async function Page() {
  const session = await auth();
  const data = await getTopArtist(session?.accessToken!);

  if (!data) return <p>No data</p>;

  return (
    <main className="max-w-6xl mx-auto pt-8 w-full space-y-16 px-4">
      <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
        {data?.items?.slice(0, 5)?.map((item) => (
          <div
            key={item.id}
            className="flex items-center flex-col gap-2 justify-center cursor-pointer"
          >
            <div className="col-span-1 w-24 h-24 md:w-32 md:h-32 relative rounded-full border-4 border-primary">
              <Image
                src={item.images[0].url}
                className="rounded-full"
                alt="Picture of the author"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <FollowersRadialChart />
        <PopularityPieChart />
        <FollowersRadialChart />
      </div>
    </main>
  );
}

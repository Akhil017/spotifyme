import { getTopTracks } from "@/app/(app)/_actions/spotify-apis";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";

type TopArtistProps = {
  session: Session | null;
};

export default async function TopTracks({ session }: TopArtistProps) {
  const data = await getTopTracks(session?.accessToken!);

  if (!data) return <p>No data</p>;

  console.log({ data });

  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
        {data?.items?.map((item) => (
          <div
            key={item.id}
            className="flex items-center flex-col gap-2 justify-center cursor-pointer"
          >
            <div className="col-span-1 w-24 h-24 md:w-32 md:h-32 relative rounded-full border-4 hover:border-primary duration-300">
              <Link href={`/dashboard/${item.id}`}>
                <Image
                  src={item.album.images[0].url}
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
    </>
  );
}

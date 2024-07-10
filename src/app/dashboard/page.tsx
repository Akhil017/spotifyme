import { auth } from "@/auth";
import { getTopArtist } from "./_actions/spotify-apis";
import Image from "next/image";

export default async function Page() {
  const session = await auth();
  const data = await getTopArtist(session?.accessToken!);

  if (!data) return <p>No data</p>;

  return (
    <div className="grid grid-cols-8 gap-8 container pt-8">
      {data?.items?.map((item) => (
        <div
          key={item.id}
          className="col-span-1 w-32 h-32 relative rounded-full"
        >
          <Image
            src={item.images[0].url}
            className="rounded-full"
            alt="Picture of the author"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
}

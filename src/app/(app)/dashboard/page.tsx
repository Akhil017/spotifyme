import { auth } from "@/auth";
import TopArtist from "./_components/top-artist";
import UserProfileCard from "./_components/user-profile-card";
import TopTracks from "./_components/top-tracks";

export default async function Page() {
  const session = await auth();

  return (
    <div className="space-y-8">
      <UserProfileCard />
      <div className="space-y-8">
        <h1 className="text-2xl font-semibold">Your top 5 artists</h1>
        <TopArtist session={session} />
      </div>
      <div className="space-y-8 pb-8">
        <h1 className="text-2xl font-semibold">Your top 5 tracks</h1>
        <TopTracks session={session} />
      </div>
    </div>
  );
}

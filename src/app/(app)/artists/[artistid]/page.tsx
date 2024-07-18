// import { auth } from "@/auth";
import React from "react";
import ArtistProfileCard from "../_components/artist-profile-card";

export default async function ArtistPage({
  params,
}: {
  params: { artistid: string };
}) {
  // const session = await auth();

  // const artistTopTracks = await getArtistTopTracks(
  //   params.artistid,
  //   session?.accessToken!
  // );

  return (
    <>
      <ArtistProfileCard artistId={params.artistid} />
    </>
  );
}

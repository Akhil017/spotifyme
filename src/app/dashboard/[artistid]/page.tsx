import { auth } from "@/auth";
import React from "react";
import { getArtistInfo, getArtistTopTracks } from "../_actions/spotify-apis";
import ArtistProfileCard from "../_components/artist-profile-card";

export default async function ArtistPage({
  params,
}: {
  params: { artistid: string };
}) {
  const session = await auth();
  const artistInfo = await getArtistInfo(
    params.artistid,
    session?.accessToken!
  );
  const artistTopTracks = await getArtistTopTracks(
    params.artistid,
    session?.accessToken!
  );

  return (
    <>
      <ArtistProfileCard artistInfo={artistInfo!} />
    </>
  );
}

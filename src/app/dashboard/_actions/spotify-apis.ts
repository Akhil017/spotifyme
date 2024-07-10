"use server";

const SPOTIFY_API_BASE_URL = "https://api.spotify.com/v1";

export async function getTopArtist(token: string) {
  console.log({ getTopArtist: token });
  try {
    const res = await fetch(`${SPOTIFY_API_BASE_URL}/me/top/artists`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(JSON.stringify(res));
    }
    const data = (await res.json()) as { items: TopArtists[] };
    return data;
  } catch (error) {
    console.log("error", JSON.stringify(error));
  }
}

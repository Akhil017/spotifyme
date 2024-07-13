"use server";

const SPOTIFY_API_BASE_URL = "https://api.spotify.com/v1";

export async function getUserInfo(token: string) {
  console.log({ getTopArtist: token });
  try {
    const res = await fetch(`${SPOTIFY_API_BASE_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(JSON.stringify(res));
    }
    const data = (await res.json()) as UserInfo;
    return data;
  } catch (error) {
    console.log("error", JSON.stringify(error));
  }
}

export async function getTopArtist(token: string) {
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

export async function getArtistInfo(id: string, token: string) {
  try {
    const res = await fetch(`${SPOTIFY_API_BASE_URL}/artists/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      console.log("error", res);
      throw new Error(JSON.stringify(res));
    }
    const data = (await res.json()) as ArtistInfo;
    return data;
  } catch (error) {
    console.log("error", JSON.stringify(error));
  }
}

export async function getArtistTopTracks(id: string, token: string) {
  try {
    const res = await fetch(
      `${SPOTIFY_API_BASE_URL}/artists/${id}/top-tracks`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "*/*",
          "Content-Type": "application/json",
        },
      }
    );
    if (!res.ok) {
      throw new Error(JSON.stringify(res));
    }
    const data = (await res.json()) as { tracks: ArtistTopTracks[] };
    return data;
  } catch (error) {
    console.log("error", JSON.stringify(error));
  }
}

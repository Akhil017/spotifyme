import Cta from "@/components/cta";
import MainHeader from "@/components/main-header";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen px-6">
      <MainHeader />
      <section className="pt-20 lg:pt-32 flex flex-col items-start gap-6 lg:gap-10 min-h-[calc(100vh_-_theme(spacing.16))] max-w-6xl w-full mx-auto">
        <h1 className="text-6xl lg:text-7xl font-medium">
          A glimpse of your
          <p>
            <span className="text-primary">Spotify</span> account.
          </p>
        </h1>
        <p className="text-muted-foreground max-w-xl">
          Explore your Spotify profile, top artists, tracks, and playlists with
          ease. Gain insights into your listening habits with our sleek
          dashboard app
        </p>
        <Cta />
      </section>
    </main>
  );
}

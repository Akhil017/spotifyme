import Cta from "@/components/cta";
import Navbar from "@/components/nav-bar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen px-4">
      <Navbar />
      <section className="pt-20 lg:pt-32 flex flex-col items-start gap-6 lg:gap-10 min-h-[calc(100vh_-_theme(spacing.16))] max-w-6xl w-full mx-auto">
        <h1 className="text-6xl lg:text-7xl font-medium">
          An overview of your
          <p>
            <span className="text-primary">Spotify</span> account.
          </p>
        </h1>
        <p className="text-muted-foreground max-w-xl">
          Providing instant access to your folders anytime, anywhere. With a
          user-friendly interface and seamless functionality, managing your
          digital files has never been easier.
        </p>
        <Cta />
      </section>
    </main>
  );
}

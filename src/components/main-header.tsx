import { Icons } from "@/components/icons";
import { ThemeToggle } from "./theme-toggle";
import { siteConfig } from "@/config/site-config";

export default function MainHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl w-full mx-auto h-14 flex items-center justify-between">
        <a
          rel="noreferrer noopener"
          href="/"
          className="font-bold text-xl flex"
        >
          <Icons.logo />
        </a>
        <div className="flex items-center justify-center gap-4">
          <a href={siteConfig.links.github} target="_blank">
            <Icons.gitHub className="w-5 h-5" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

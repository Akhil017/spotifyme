import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";

import { auth } from "@/auth";
import Link from "next/link";

export default async function AppHeader() {
  const session = await auth();

  if (!session) return <div>Not authenticated</div>;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <nav>
          <Icons.logo />
        </nav>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none"></div>
          <nav className="flex items-center gap-2">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.gitHub className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>

            <ThemeToggle />

            <Avatar>
              <AvatarFallback>
                {session?.user?.name?.slice(0, 2)?.toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </nav>
        </div>
      </div>
    </header>
  );
}

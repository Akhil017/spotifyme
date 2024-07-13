import { ReactNode } from "react";
import AppHeader from "./_components/app-header";
// import { useSession } from "next-auth/react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  // const { data, status } = useSession();
  // console.log({ Session: data, status });
  return (
    <div>
      <AppHeader />
      <main className="max-w-6xl mx-auto pt-8 w-full space-y-8 px-4">
        {children}
      </main>
    </div>
  );
}

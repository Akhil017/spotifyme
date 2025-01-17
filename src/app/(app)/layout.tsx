import { ReactNode } from "react";
import AppHeader from "./_components/app-header";
import { DashboardNav } from "./_components/dashboard-nav";

// import { useSession } from "next-auth/react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  // const { data, status } = useSession();
  // console.log({ Session: data, status });
  return (
    <div>
      <AppHeader />
      <main className="max-w-6xl mx-auto pt-4 w-full  px-4">
        <DashboardNav />
        {children}
      </main>
    </div>
  );
}

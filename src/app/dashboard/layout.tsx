"use client";

import { ReactNode } from "react";
import AppHeader from "./_components/app-header";
// import { useSession } from "next-auth/react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  // const { data, status } = useSession();
  // console.log({ Session: data, status });
  return (
    <div>
      <AppHeader />
      {children}
    </div>
  );
}

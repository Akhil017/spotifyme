import { ReactNode } from "react";
import AppHeader from "./_components/app-header";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <AppHeader />
      {children}
    </div>
  );
}

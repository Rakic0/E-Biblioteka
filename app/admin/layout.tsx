import type { Metadata } from "next";
import Aside from "./components/Aside";

export const metadata: Metadata = {
  title: "Admin page",
  description: "Elektrosnka Biblioteka",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex items-center justify-center my-72 gap-52">
      <Aside />
      <div className="admin__background w-[60.4rem] min-h-[51.1rem] rounded-3xl p-16">
        {children}
      </div>
    </main>
  );
}

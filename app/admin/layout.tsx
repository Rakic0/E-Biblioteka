import type { Metadata } from "next";
import Aside from "./components/Aside";
import { ToastContainer } from "react-toastify";

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
    <main className="my-72 flex items-center justify-center gap-52">
      <Aside />
      <div className="admin__background min-h-[51.1rem] w-[60.4rem] rounded-3xl p-16 ">
        {children}
      </div>
      <ToastContainer />
    </main>
  );
}

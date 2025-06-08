import Footer from "@/components/lms/Footer";
import NavBar from "@/components/lms/NavBar";
import { authOptions } from "@/config/auth";
import { getAuthUser } from "@/config/useAuth";
import { getServerSession } from "next-auth";
import React, { ReactNode } from "react";

export default async function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = (await getAuthUser()) || null;
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <NavBar user={user} />
      {children}
      <Footer />
    </div>
  );
}

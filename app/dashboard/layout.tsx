import type React from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user: authUser },
  } = await supabase.auth.getUser();

  if (!authUser) {
    redirect("/auth/login");
  }

  // Fetch user data from public.users table
  const { data: userData } = await supabase
    .from("users")
    .select("*")
    .eq("id", authUser.id)
    .single();

  const user = {
    full_name: userData?.full_name || authUser.user_metadata?.full_name || null,
    email: authUser.email || null,
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <DashboardSidebar user={user} />
      <main className="flex-1 overflow-y-auto ml-64">{children}</main>
    </div>
  );
}

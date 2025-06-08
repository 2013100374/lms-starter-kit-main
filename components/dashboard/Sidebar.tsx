"use client";
import React from "react";
import Link from "next/link";
import {
  Bell,
  BookOpenCheck,
  DollarSign,
  Home,
  LayoutGrid,
  Lock,
  Plus,
  Settings,
  User,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "../global/Logo";
import { signOut } from "next-auth/react";
import { UserRole } from "@prisma/client";
import { getRoutesByGroup } from "@/config/protected-routes";

export default function Sidebar({ role }: { role: UserRole }) {
  async function handleLogout() {
    try {
      await signOut();
      router.push("/auth");
    } catch (error) {
      console.log(error);
    }
  }
  const router = useRouter();
  const pathname = usePathname();
  const routeGroups = getRoutesByGroup(role);
  return (
    <div className="h-screen w-[220px] lg:w-[280px] border-r bg-muted/40">
      <div className="flex h-full flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Logo href="/dashboard" />
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1 overflow-auto">
          <nav className="grid items-start gap-2 px-2 text-sm font-medium lg:px-4">
            {/* Admin actions */}
            {role === "ADMIN" && (
              <Button className="mt-4" asChild>
                <Link href="/dashboard/users/new">
                  <Plus className="w-4 h-4 mr-2" />
                  Add User
                </Link>
              </Button>
            )}

            {/* Grouped navigation items */}
            {Array.from(routeGroups.entries()).map(([group, routes]) => (
              <div key={group} className="space-y-1">
                {group !== "Other" && (
                  <h4 className="text-xs font-semibold text-muted-foreground px-3 py-2">
                    {group}
                  </h4>
                )}
                {routes.map((route, i) => {
                  const Icon = route.icon;
                  const isActive = route.href === pathname;
                  return (
                    <Link
                      key={i}
                      href={route.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                        isActive && "bg-muted text-primary"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{route.title}</span>
                      {route.isNew && (
                        <span className="ml-auto text-xs bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full">
                          New
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            ))}
          </nav>
        </div>
        <div className="border-t p-4">
          <Button onClick={handleLogout} size="sm" className="w-full">
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

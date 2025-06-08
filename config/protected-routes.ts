// config/routes.ts

import { UserRole } from "@prisma/client";
import {
  Home,
  LayoutGrid,
  BookOpenCheck,
  Lock,
  Settings,
  Users,
  BookOpen,
  UserPen,
  Monitor,
  HandHeart,
} from "lucide-react";

export type Route = {
  title: string;
  href: string;
  icon: any;
  roles?: UserRole[]; // Which roles can access this route
  group?: string; // Optional grouping for related routes
  isNew?: boolean; // Optional flag for new features
};

export const routes: Route[] = [
  // Dashboard - accessible to all
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
    roles: ["USER", "ADMIN"],
  },

  // Content Management - admin only
  {
    title: "Categories",
    href: "/dashboard/categories",
    icon: LayoutGrid,
    roles: ["ADMIN"],
    group: "Content",
  },
  {
    title: "Category Listing",
    href: "/dashboard/category-listing",
    icon: LayoutGrid,
    roles: ["ADMIN"],
    group: "Content",
  },
  {
    title: "Change Logs",
    href: "/dashboard/change-logs",
    icon: LayoutGrid,
    roles: ["ADMIN"],
    group: "Content",
  },
  {
    title: "Blogs",
    href: "/dashboard/blogs",
    icon: BookOpenCheck,
    roles: ["ADMIN"],
    group: "Content",
  },
  {
    title: "Blog Categories",
    href: "/dashboard/blog-categories",
    icon: BookOpen,
    roles: ["ADMIN"],
    group: "Content",
  },

  {
    title: "Users",
    href: "/dashboard/users",
    icon: Users,
    roles: ["ADMIN"],
    group: "Management",
  },
  // Settings - accessible to all
  {
    title: "Change Password",
    href: "/dashboard/settings/change-password",
    icon: Lock,
    roles: ["USER", "ADMIN"],
    group: "Settings",
  },
  {
    title: "Update Profile",
    href: "/dashboard/settings/profile",
    icon: UserPen,
    roles: ["USER", "ADMIN"],
    group: "Settings",
  },
  {
    title: "Feedback",
    href: "/dashboard/settings/feedback",
    icon: HandHeart,
    roles: ["ADMIN", "USER"],
    group: "Settings",
  },
  {
    title: "Showcases",
    href: "/dashboard/settings/showcases",
    icon: Monitor,
    roles: ["ADMIN", "USER"],
    group: "Settings",
  },
];

// Helper function to get routes for a specific role
export const getRoutesByRole = (role: UserRole) => {
  return routes.filter((route) => route.roles?.includes(role));
};

// Helper function to get routes by group for a specific role
export const getRoutesByGroup = (role: UserRole) => {
  const userRoutes = getRoutesByRole(role);
  const groups = new Map<string, Route[]>();

  userRoutes.forEach((route) => {
    const group = route.group || "Other";
    if (!groups.has(group)) {
      groups.set(group, []);
    }
    groups.get(group)?.push(route);
  });

  return groups;
};

// Helper to check if a user has access to a specific route
export const hasRouteAccess = (route: Route, role: UserRole) => {
  return route.roles?.includes(role);
};

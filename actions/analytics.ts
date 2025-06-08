"use server";

import { db } from "@/prisma/db";
import {
  DollarSign,
  LayoutGrid,
  LucideProps,
  Users,
  Users2,
} from "lucide-react";
export type AnalyticsProps = {
  title: string;
  total: number;
  href: string;
  icon: any;
  isCurrency?: boolean;
};

export async function getDashboardStats() {
  try {
    const users = await db.user.count();
    const categories = await db.category.count();
    const blogCategories = await db.blogCategory.count();
    const blogs = await db.blog.count();
    const stats = {
      users,
      categories,
      blogCategories,
      blogs,
    };

    return stats;
  } catch (error) {
    console.log(error);
    return null;
  }
}

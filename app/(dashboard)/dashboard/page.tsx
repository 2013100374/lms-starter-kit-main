import { getDashboardStats } from "@/actions/analytics";
import AnalyticsDashboard from "@/components/dashboard/AnalyticsCards";
import WelcomeSection from "@/components/dashboard/WelcomeMessage";
import OverViewCard from "@/components/OverViewCard";
import { getAuthUser } from "@/config/useAuth";
import { redirect } from "next/navigation";
export default async function Dashboard() {
  const user = await getAuthUser();
  const role = user?.role;
  if (!user) {
    redirect("/auth");
  }
  // In your dashboard page
  const defaultStats = {
    users: 156,
    categories: 12,
    blogCategories: 8,
    blogs: 45,
  };
  const stats = (await getDashboardStats()) || defaultStats;

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <WelcomeSection
        user={{
          name: user?.name ?? "",
          image: user?.image,
          role: user?.role ?? "USER",
        }}
      />
      {role === "ADMIN" && (
        <div className="space-y-6">
          <AnalyticsDashboard stats={stats} />
        </div>
      )}
    </main>
  );
}

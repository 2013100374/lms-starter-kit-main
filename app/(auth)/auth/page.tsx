import LoginForm from "@/components/auth/login-form";
import Link from "next/link";

export default async function AuthPage({
  searchParams,
}: {
  searchParams: Promise<{
    returnUrl?: string;
  }>;
}) {
  const resolvedParams = await searchParams;
  const returnUrl = resolvedParams.returnUrl || "/dashboard";
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-950 text-gray-300">
      <div className="w-full max-w-md p-8">
        <div className="bg-gray-900 rounded-lg p-8 shadow-xl">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-semibold text-gray-200">
                Welcome Back
              </h1>
              <p className="text-gray-400 text-sm max-w-xs mx-auto">
                Continue with Google or GitHub to automatically set up your
                account, access all features and content
              </p>
            </div>

            <div className="w-full space-y-4 pt-4">
              <LoginForm returnUrl={returnUrl} />
            </div>

            <div className="text-center text-sm text-gray-500 pt-4">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="text-cyan-500 hover:text-cyan-400 transition-colors"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

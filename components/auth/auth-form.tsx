"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { usePathname } from "next/navigation";

interface AuthFormProps {
  onSuccess?: () => void;
}

export default function AuthForm({ onSuccess }: AuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const pathname = usePathname();
  const returnUrl = pathname == "/" ? "/dashboard" : pathname;
  console.log(returnUrl);
  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    // Implement Google sign-in logic here
    try {
      // Authentication logic would go here
      signIn("google", { callbackUrl: returnUrl });
      console.log("Google sign-in initiated");
      onSuccess?.();
    } catch (error) {
      console.error("Google sign-in failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGithubSignIn = async () => {
    setIsLoading(true);
    try {
      signIn("github", { callbackUrl: returnUrl });
      // Authentication logic would go here
      console.log("GitHub sign-in initiated");
      onSuccess?.();
    } catch (error) {
      console.error("GitHub sign-in failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full space-y-3">
      <Button
        variant="outline"
        className="w-full bg-transparent border border-gray-700 hover:bg-gray-800 hover:text-gray-200 text-gray-200 flex items-center justify-center gap-2 py-6"
        onClick={handleGoogleSignIn}
        disabled={isLoading}
      >
        <GoogleIcon className="h-5 w-5" />
        <span>Continue with Google</span>
      </Button>

      <Button
        variant="outline"
        className="w-full bg-transparent border border-gray-700 hover:bg-gray-800 hover:text-gray-200 text-gray-200 flex items-center justify-center gap-2 py-6"
        onClick={handleGithubSignIn}
        disabled={isLoading}
      >
        <Github className="h-5 w-5" />
        <span>Continue with GitHub</span>
      </Button>
    </div>
  );
}

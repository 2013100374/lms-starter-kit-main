"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { signIn } from "next-auth/react";

export default function LoginForm({ returnUrl }: { returnUrl: string }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    // Implement Google sign-in logic here
    try {
      signIn("google", { callbackUrl: returnUrl });
    } catch (error) {
      console.error("Google sign-in failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGithubSignIn = async () => {
    setIsLoading(true);
    // Implement GitHub sign-in logic here
    try {
      signIn("github", { callbackUrl: returnUrl });
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
        className="w-full bg-transparent border border-gray-700 hover:bg-gray-800 text-gray-200 flex items-center justify-center gap-2 py-6 hover:text-gray-200"
        onClick={handleGoogleSignIn}
        disabled={isLoading}
      >
        <GoogleIcon className="h-5 w-5" />
        <span>Continue with Google</span>
      </Button>

      <Button
        variant="outline"
        className="w-full bg-transparent border border-gray-700 hover:bg-gray-800 text-gray-200 flex items-center justify-center gap-2 py-6 hover:text-gray-200"
        onClick={handleGithubSignIn}
        disabled={isLoading}
      >
        <Github className="h-5 w-5" />
        <span>Continue with GitHub</span>
      </Button>
    </div>
  );
}

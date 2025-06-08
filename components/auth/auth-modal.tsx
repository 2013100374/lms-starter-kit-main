"use client";

import type React from "react";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import AuthForm from "@/components/auth/auth-form";
import Link from "next/link";
import { Mail } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";

interface AuthModalProps {
  trigger?: React.ReactNode;
}

export default function AuthModal({ trigger }: AuthModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <Button variant="default">Sign In</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-0 border-gray-800 bg-gray-950">
        <div className="bg-gray-900 rounded-lg p-8 w-full">
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
              <AuthForm onSuccess={() => setOpen(false)} />
            </div>

            <div className="text-sm text-gray-500 pt-4">
              Need help?{" "}
              <Link
                href="/contact"
                className="text-cyan-500 hover:text-cyan-400 transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

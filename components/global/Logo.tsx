import Link from "next/link";
import React from "react";
import HubStackLogo from "./kit-logo";

export default function Logo({
  variant = "light",
  href = "/",
}: {
  variant?: "dark" | "light";
  href?: string;
}) {
  if (variant === "light") {
    return (
      <Link href="/" className="flex items-center space-x-2">
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
          <div className="h-6 w-6 rounded-full bg-black flex items-center justify-center">
            <div className="h-4 w-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>
        </div>
        <span className="text-xl font-bold">N Academy</span>
      </Link>
    );
  } else {
    return (
      <Link href="/" className="flex items-center space-x-2">
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
          <div className="h-6 w-6 rounded-full bg-black flex items-center justify-center">
            <div className="h-4 w-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>
        </div>
        <span className="text-xl font-bold">N Academy</span>
      </Link>
    );
  }
}

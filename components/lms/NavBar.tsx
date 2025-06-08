"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import AuthModal from "../auth/auth-modal";
import { AuthUser } from "@/config/useAuth";
import { UserDropdownMenu } from "../UserDropdownMenu";

export default function NavBar({ user }: { user: AuthUser | null }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <nav className="relative z-10 px-6 py-4 md:px-16 flex justify-between items-center">
        {/* Logo on the left */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <div className="h-6 w-6 rounded-full bg-black flex items-center justify-center">
              <div className="h-4 w-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            </div>
          </div>
          <span className="text-xl font-bold">Next.js Academy</span>
        </Link>

        {/* Desktop Navigation - Centered Links */}
        <div className="hidden md:flex items-center justify-center space-x-8 flex-1 mx-4">
          <a href="#" className="hover:text-purple-400 transition duration-300">
            Courses
          </a>
          <a href="#" className="hover:text-purple-400 transition duration-300">
            Career Paths
          </a>
          <a href="#" className="hover:text-purple-400 transition duration-300">
            For Enterprises
          </a>
          <a href="#" className="hover:text-purple-400 transition duration-300">
            About
          </a>
        </div>

        {/* CTA Button on the right */}
        <div className="hidden md:block">
          {user && user.id ? (
            <UserDropdownMenu
              username={user.name || "User"}
              email={user.email || ""}
              avatarUrl={user.image || undefined}
            />
          ) : (
            <AuthModal
              trigger={
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md hover:opacity-90 transition duration-300">
                  Sign In
                </button>
              }
            />
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-8 md:hidden">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={24} />
          </button>
          <a
            href="#"
            className="text-2xl hover:text-purple-400 transition duration-300"
          >
            Courses
          </a>
          <a
            href="#"
            className="text-2xl hover:text-purple-400 transition duration-300"
          >
            Career Paths
          </a>
          <a
            href="#"
            className="text-2xl hover:text-purple-400 transition duration-300"
          >
            For Enterprises
          </a>
          <a
            href="#"
            className="text-2xl hover:text-purple-400 transition duration-300"
          >
            About
          </a>
          {user && user.id ? (
            <UserDropdownMenu
              username={user.name || "User"}
              email={user.email || ""}
              avatarUrl={user.image || undefined}
            />
          ) : (
            <AuthModal
              trigger={
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md hover:opacity-90 transition duration-300">
                  Sign In
                </button>
              }
            />
          )}
        </div>
      )}
    </div>
  );
}

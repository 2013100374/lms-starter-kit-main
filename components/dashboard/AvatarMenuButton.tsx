"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getInitials } from "@/lib/generateInitials";
import { LogOut } from "lucide-react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export function AvatarMenuButton({ session }: { session: Session }) {
  const user = session.user;
  const initials = getInitials(user.name ?? "");
  const router = useRouter();
  async function handleLogout() {
    try {
      await signOut();
      router.push("/auth");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Avatar>
          <AvatarImage src={user.image ?? ""} alt={user.name ?? ""} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="flex items-center space-x-3 pb-3 border-b ">
            <Avatar>
              <AvatarImage src={user?.image ?? ""} alt={user.name ?? ""} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div className="">
              <h2 className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0">
                {user?.name}
              </h2>
              <p>{user.email}</p>
            </div>
          </div>
          <div className="flex space-x-6 items-center py-6">
            <Button
              className="w-full"
              onClick={() => handleLogout()}
              variant={"outline"}
            >
              <LogOut className="h-4 w-4 mr-2" />
              <span>Logout</span>
            </Button>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "@aws-amplify/auth";
import { useRouter } from "next/navigation";

export const SignoutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut();
      await fetch("/auth/logout", { method: "POST" });
      router.push("/auth/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Button type="button" className=" bg-fuchsia-700 cursor-pointer" onClick={handleSignOut}>
        Logout
      </Button>
    </div>
  );
};

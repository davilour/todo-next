"use client"

import { AuthSession } from "@/lib/session";
import { createContext, useContext } from "react";

const AuthContext = createContext<AuthSession | null>(null);


export function AuthViewModelProvider({
  session,
  children,
}: {
  session: AuthSession
  children: React.ReactNode
}) {
  return (
    <AuthContext.Provider value={session}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext(){
    const session = useContext(AuthContext);
    if (!session) {
        throw new Error("Auth context is not defined");
    }
    return session;
}

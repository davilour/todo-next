import { Toaster } from "sonner";
import "./globals.css";
import AmplifyConfig from "@/lib/AmplifyConfig";
import React from "react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-gray-900`}>
        <AmplifyConfig />
        <>
          <Toaster position="top-right" />
          {children}
        </>
      </body>
    </html>
  );
}

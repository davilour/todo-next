import React from "react";

export default async function Layout({
  children,
  navbar,
}: Readonly<{
  children: React.ReactNode;
  navbar: React.ReactNode;
}>) {
  return (
    <>
      <body className="antialiased bg-gray-900">
        <>
          {navbar}
          {children}
        </>
      </body>
    </>
  );
}
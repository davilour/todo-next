import React from "react";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="antialiased bg-gray-900">
        <>
          {children}
        </>
      </div>
    </>
  );
}
import { Toaster } from "sonner";
import { Navbar } from "../../components/NavBar";
import "./globals.css";
import AmplifyConfig from "@/lib/AmplifyConfig";

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
          <Toaster position="top-right"  />
          <Navbar />
          {children}
        </>
      </body>
    </html>
  );
}

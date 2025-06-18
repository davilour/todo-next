
import { Navbar } from "../../components/NavBar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-gray-500`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

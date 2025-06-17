
import "./globals.css";
import Posts from "./posts/page";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Posts/>
        {children}
      </body>
    </html>
  );
}

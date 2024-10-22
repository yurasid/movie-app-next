import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Movie App",
  description: "Movie App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-2xl font-bold">Movie App</div>
            <ul className="flex space-x-6">
              <li>
                <Link href="/movies" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                  Movies
                </Link>
              </li>
              <li>
                <Link href="/cinemas" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                  Cinemas
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/Styles/globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ESI Projects",
  description: "A website that showcases the projects made by ESI students",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " w-screen max-w-full overflow-x-hidden "}>
      <div className="relative overflow-x-hidden">
          <div className="main">
              <div className="gradient" />
          </div>
          <div className="app scroll-smooth">
              <NavBar />
              {children}
          </div>
      </div>
      </body>
    </html>
  );
}

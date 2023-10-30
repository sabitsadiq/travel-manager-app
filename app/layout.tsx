import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import SideBar from "@/components/SideBar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Travel Manager",
  description: "Dashboard that manages the task of an organisation or client",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="w-full"> {children}</main>
      </body>
    </html>
  );
}

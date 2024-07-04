import { Inter } from "next/font/google";
import "./globals.css";
import { icons } from "react-icons/lib";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Md. Hasan Mahmud",
  description: "Md. Hasan Mahmud portfolio",
  icons: "/logo.jpg",
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

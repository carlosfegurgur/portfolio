import type { Metadata } from "next";
import "./globals.css";
import { montserrat, openSans } from "./fonts";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";

export const metadata: Metadata = {
  title: "Carlos Fegurgur | Frontend Developer",
  description: "Portfolio site of Carlos Fegurgur, Frontend Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

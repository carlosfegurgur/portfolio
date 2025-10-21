import type { Metadata } from "next";
import "./globals.css";
import { montserrat, openSans } from "./fonts";
import { Navbar, Footer } from "./components/layout/index";
import { ThemeProvider } from "./context/ThemeContext";

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
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

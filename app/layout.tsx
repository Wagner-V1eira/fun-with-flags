import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { Header, Footer } from "./components";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400","700"],
});

export const metadata: Metadata = {
  title: "Fun With Flags",
  description: "Flags of the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.className} antialiased`}>
      <Header />
      <main className="flex-1">  
        {children}
      </main>
      <Footer />
      </body>
    </html>
  );
}

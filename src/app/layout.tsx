import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

// components
import Header from "./components/header";
import Footer from "./components/footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "400", 
"700"] });

export const metadata: Metadata = {
  title: "Jessica Masuga Consulting",
  description: "I’m an expert storyteller who creates a broad range of impactful, high-quality healthcare communications programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce store",
  description: "nextjs ecommerce store project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <main className="container w-[98%] lg:w-[80%] md:w-[90%] m-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';
import LayoutWrapper from "@/Components/LayoutWrapper/LayoutWrapper";
import AOSProvider from "@/Components/AOSProvider/AOSProvider";
import LenisProvider from "@/Components/LocomotiveScroll/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vectux Academy",
  description: "AI and Data Analytics Training for Businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutWrapper>
          <LenisProvider>
            <AOSProvider>
              <Navbar />
              <section className='overflow-x-hidden'>
                {children}
              </section>
              <Footer />
            </AOSProvider>
          </LenisProvider>
        </LayoutWrapper>
      </body>
    </html>
  );
}

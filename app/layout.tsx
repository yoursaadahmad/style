import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import CartProvider from "./components/Providers";
import ShoppingCartModal from "./components/ShoppingCartModal";
import FooterPage from "./components/Footer";


import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import NewSignIn from "./components/NewSignIn";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StyleWorld.",
  description: "Top Fashion for a top Price",
};
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps){
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      
        <CartProvider>
        <NavBar />
        
        <ShoppingCartModal />
        
        
          
          
        {children}
        <Toaster />
        </CartProvider>
        
        
        
        <FooterPage />
        </body>
    </html>
  );
}

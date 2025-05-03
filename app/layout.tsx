import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";


import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";


const open_sans = Open_Sans ({subsets:["latin" , "latin-ext"], display:'swap'});

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Carlos Alberto Rodriguez ",
  description: "Aplicación web desarrollada por OmniLogic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
        <meta charSet="UTF-8" />
      <body
        className={inter.className}>
          <Header />
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>{children}</ThemeProvider>
          <Footer/>
          <Toaster/>
      </body>
    </html>
  );
}

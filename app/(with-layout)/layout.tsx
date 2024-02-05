import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReactQueryClientProvider from "@/components/ReactQueryClientProvider";
import 'tailwindcss/tailwind.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OS Client Portal",
  description: "Aplication using React Query to get Movies from TMDB",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ReactQueryClientProvider>
      <html lang="en">
        <body>
        <header className="h-14 bg-osBackgroundBlue flex flex-end justify-between">
          <nav className="flex flex-row h-full items-center w-1/2 ml-4">
            <a href="/">
              <h2 className="font-inter font-medium text-base text-white mr-4">Home</h2>
            </a>
            <a href="/contact">
              <h2 className="font-inter font-medium text-base text-white mr-4">Contact us</h2>
            </a>
            <a href="/login">
              <h2 className="font-inter font-medium text-base text-white">Login</h2>
            </a>
          </nav>
          <div className="flex flex-row mr-4 items-center">
              <h1 className="text-2xl font-inter font-extrabold text-white">Only</h1>
              <h1 className="text-2xl font-inter font-extrabold text-osOrange">Sport</h1>
          </div>
        </header>
        <div>
        <main>{children}</main>
        </div>
              </body> 
    </html>
      </ReactQueryClientProvider>   
  ); 
}

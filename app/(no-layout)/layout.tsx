import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReactQueryClientProvider from "@/components/ReactQueryClientProvider";
import 'tailwindcss/tailwind.css';


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ReactQueryClientProvider>
        <html lang="en">
          <body>
            <div>
              <main>{children}</main>
            </div>
          </body>
        </html>
      </ReactQueryClientProvider>   
  ); 
}

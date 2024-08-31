import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { BootstrapClient } from "@/components/BootstrapClient/BootstrapClient";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
import ComponentProvider from "./provider/ComponentProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Melo | Digital Music Distribution - Sell Your Music Online",
  openGraph: {
    title: "Melo | Digital Music Distribution - Sell Your Music Online",
    description:
      "Melo is the best digital music distribution company. It can spread your music on various platforms like Spotify, Apple, Amazon, Tidal, TikTok, YouTube, and more.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="apple-touch-icon" sizes="32x32" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      <body className={inter.className}>
        <Suspense fallback={null}>

          <BootstrapClient />
          <ComponentProvider>
            {children}
          </ComponentProvider>
          <ToastContainer
            position="top-right"
            closeButton={false}
            autoClose={2500}
          />
        </Suspense>
      </body>
    </html>
  );
}




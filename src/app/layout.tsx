"use client";

import { Inter } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import { SpotifyAPIProvider } from "./_components/api/spotify/SpotifyAPIContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="main">
          <Theme>
            <SpotifyAPIProvider>{children}</SpotifyAPIProvider>
          </Theme>
        </main>
      </body>
    </html>
  );
}

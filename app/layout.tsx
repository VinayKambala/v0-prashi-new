import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
// Import the premium header
import PremiumHeader from "@/components/premium-header"
import DynamicLayout from "@/components/dynamic-layout"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Prashi Group",
  description: "On the Move Always",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Fallback for favicon if not using Metadata API */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} bg-cream dark:bg-obsidian transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <DynamicLayout>
            <div className="flex flex-col min-h-screen">
              <PremiumHeader />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </DynamicLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}

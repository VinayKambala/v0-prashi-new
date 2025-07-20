import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
// Import the premium header
import PremiumHeader from "@/components/premium-header"
import PremiumFooter from "@/components/premium-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <PremiumHeader />
            <main className="flex-1 pt-20 md:pt-24">{children}</main>
            <PremiumFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

const DARK_ROUTES = ["/projects", "/properties"]

export default function DynamicLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const isDarkRoute = DARK_ROUTES.some((route) => pathname.startsWith(route))

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkRoute)
  }, [isDarkRoute])

  return <>{children}</>
}
"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface LogoProps {
  variant?: "default" | "symbol-only" | "text-only"
  size?: "sm" | "md" | "lg"
  className?: string
  textColor?: "light" | "dark" // Used to adjust text color based on header background
  showSymbol?: boolean
}

export default function Logo({
  variant = "default",
  size = "md",
  className = "",
  textColor = "light",
  showSymbol = true,
}: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10", // Using h-10 w-10 for the image container, as the source image looks about 40x40 px
    lg: "h-12 w-12",
  }

  const textSizeClasses = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
  }

  // Determine text colors based on the header's background color
  const prashiColor = "text-yellow-600" // Consistent gold for 'Prashi'
  const groupColor = textColor === "light" ? "text-white" : "text-gray-800"
  const taglineColor = textColor === "light" ? "text-gray-400" : "text-gray-600"

  if (variant === "symbol-only") {
    return (
      <Link href="/" className={`relative z-10 ${className}`}>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <div className={`relative ${sizeClasses[size]} flex-shrink-0`}>
            <img src="/logo.svg" alt="Prashi Group Logo Symbol" className="h-full w-full object-contain" />
          </div>
        </motion.div>
      </Link>
    )
  }

  if (variant === "text-only") {
    return (
      <Link href="/" className={`relative z-10 ${className}`}>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <div className="flex flex-col items-start">
            <span className={`${textSizeClasses[size]} font-bold ${prashiColor}`}>
              Prashi <span className={`${groupColor} font-normal`}>group</span>
            </span>
            <span className={`text-xs ${taglineColor}`}>On the Move Always</span>
          </div>
        </motion.div>
      </Link>
    )
  }

  return (
    <Link href="/" className={`relative z-10 flex-shrink-0 ${className}`}>
      <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        {showSymbol && (
          <div className={`relative ${sizeClasses[size]} flex-shrink-0`}>
            <img src="/logo.svg" alt="Prashi Group Logo Symbol" className="h-full w-full object-contain" />
          </div>
        )}
        <div className="flex flex-col items-start">
          <span className={`${textSizeClasses[size]} font-bold ${prashiColor}`}>
            Prashi <span className={`${groupColor} font-normal`}>group</span>
          </span>
          <span className={`text-xs ${taglineColor}`}>On the Move Always</span>
        </div>
      </motion.div>
    </Link>
  )
}

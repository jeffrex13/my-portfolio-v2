import { cn } from "@/lib/utils"
import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { SiteHeader } from "@/components/site-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Jeffrey Cureg | Front-end Developer",
  description:
    "Portfolio of Jeffrey Cureg, a front-end developer with a passion for building beautiful and user-friendly websites",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-[#1a1a1a] text-white")}>
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}

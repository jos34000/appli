"use client"
import { useEffect } from "react"
import "./globals.css"

export default function RootLayout({ children }) {
  useEffect(() => {
    const pathsThatRequireToken = [
      "/home",
      "/patients",
      "/rdv",
      "/consults",
      "/stats",
    ]
    if (typeof window !== "undefined") {
      const path = window.location.pathname
      if (pathsThatRequireToken.includes(path)) {
        const token = localStorage.getItem("Cookie")
        if (!token) {
          window.location.href = "/"
        }
      }
    }
  }, [])
  return (
    <html lang="en">
      <body> {children}</body>
    </html>
  )
}

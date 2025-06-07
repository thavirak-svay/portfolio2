import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ui/ThemeProvider"
import { StagewiseToolbarWrapper } from "@/components/ui/StagewiseToolbarWrapper"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "DevBackend | Professional Backend Developer Portfolio",
  description:
    "Professional portfolio showcasing backend development skills including API development, database architecture, and scalable systems",
  keywords: [
    "backend developer",
    "API development",
    "database architecture",
    "Node.js",
    "Python",
    "microservices",
    "full-stack",
    "portfolio",
  ],
  authors: [{ name: "DevBackend" }],
  creator: "DevBackend",
  openGraph: {
    title: "DevBackend | Professional Backend Developer Portfolio",
    description:
      "Professional portfolio showcasing backend development skills including API development, database architecture, and scalable systems",
    url: "https://devbackend.vercel.app",
    siteName: "DevBackend Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevBackend | Professional Backend Developer Portfolio",
    description: "Professional portfolio showcasing backend development skills",
    creator: "@devbackend",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
        <StagewiseToolbarWrapper />
      </body>
    </html>
  )
}

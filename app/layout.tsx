import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/context/theme-context"
import { LanguageProvider } from "@/context/language-context"
import { AnimationProvider } from "@/context/animation-context"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bingkuan Liu | 刘炳宽",
  description:
    "Bingkuan Liu is a Ph.D. student in Atmospheric Science at Fudan University, working on Antarctic sea-ice prediction and AI-based forecasting.",
  icons: {
    icon: "/weather-icons-59-svgrepo-com.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <AnimationProvider>
              <div className="flex flex-col min-h-screen">
                <Navigation />
                <main className="flex-1 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-6">
                  {children}
                </main>
              </div>
            </AnimationProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

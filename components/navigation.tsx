"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/context/language-context"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import Image from "next/image"
import { useTheme } from "@/context/theme-context"
import { useAnimation } from "@/context/animation-context"
import { Menu, X } from "lucide-react"

interface NavItem {
  title: {
    en: string
    zh: string
  }
  href: string
}

const NAV_ITEMS: NavItem[] = [
  { title: { en: "Home", zh: "首页" }, href: "/" },
  { title: { en: "Resume", zh: "简历" }, href: "/resume" },
  { title: { en: "Publications", zh: "出版物" }, href: "/publications" },
  { title: { en: "Blogs", zh: "博客" }, href: "/blogs" },
  { title: { en: "Projects", zh: "项目" }, href: "/projects" },
]

function isNavItemActive(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`))
}

export function Navigation() {
  const pathname = usePathname()
  const { language } = useLanguage()
  const { theme } = useTheme()
  const { enabled } = useAnimation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }
  
  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      enabled && "transition-all duration-300 ease-out"
    )}>
      <div className="container max-w-4xl mx-auto grid h-16 grid-cols-[1fr_auto_1fr] items-center px-4">
        <div className="col-start-1 flex items-center justify-start">
          <Link href="/" className={cn(
            "flex items-center gap-0 group",
            enabled && "transition-all duration-300 ease-out"
          )}>
            <div className={cn(
              "flex items-center justify-center w-10 h-10",
              enabled && "transition-transform duration-300 group-hover:rotate-12"
            )}>
              <Image 
                src="/weather-icons-59-svgrepo-com.svg" 
                alt="Weather Icon" 
                width={32} 
                height={32} 
                className={cn(
                  theme === "dark" ? "invert" : "",
                  enabled && "transition-all duration-300 ease-out"
                )}
              />
            </div>
            <span className={cn(
              "font-bold text-lg hidden sm:inline-block",
              enabled && "transition-transform duration-300 ease-out group-hover:translate-x-1"
            )}>{language === "en" ? "Bingkuan Liu" : "刘炳宽（Bingkuan Liu）"}</span>
          </Link>
        </div>
        <nav className="col-start-2 hidden items-center justify-center space-x-6 text-sm font-medium md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-foreground/80 py-1 px-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:w-0 hover:after:w-full",
                enabled && "after:transition-all after:duration-300",
                isNavItemActive(pathname, item.href)
                  ? "text-foreground border-b-2 border-primary"
                  : "text-foreground/60"
              )}
            >
              {item.title[language]}
            </Link>
          ))}
        </nav>
        <div className={cn(
          "col-start-3",
          "flex items-center justify-end gap-4",
          enabled && "transition-all duration-300 ease-out"
        )}>
          <ThemeToggle />
          <LanguageSwitcher />
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden focus:outline-none"
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden p-4 bg-background border-t">
          <nav className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "transition-colors hover:text-foreground/80 py-2 px-2",
                  isNavItemActive(pathname, item.href)
                    ? "text-foreground font-bold border-l-4 border-primary pl-2"
                    : "text-foreground/60"
                )}
              >
                {item.title[language]}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/log", label: "Dev Log" },
  { href: "/skills", label: "Skills" },
  { href: "/setup", label: "Setup" },
  { href: "/links", label: "Links" },
  { href: "/contact", label: "Contact" },
]

export function SiteNav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="border-b border-border bg-retro-deep/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between py-3">
          <Link href="/" className="font-mono text-sm text-retro-gold retro-glow-gold">
            {">"}_dev_portfolio
          </Link>
          <div className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    px-3 py-1.5 text-sm font-mono transition-all
                    ${
                      isActive
                        ? "text-retro-gold bg-retro-slate border border-border"
                        : "text-muted-foreground hover:text-foreground"
                    }
                  `}
                >
                  {isActive && "// "}
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center justify-between py-3">
          <Link href="/" className="font-mono text-sm text-retro-gold retro-glow-gold">
            {">"}_dev
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="font-mono text-xs text-muted-foreground border border-border px-3 py-1.5 hover:text-foreground transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? "[close]" : "[menu]"}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden flex flex-col gap-1 pb-4 animate-slide-up">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`
                    px-3 py-2 text-sm font-mono block transition-colors
                    ${
                      isActive
                        ? "text-retro-gold bg-retro-slate border-l-2 border-retro-gold"
                        : "text-muted-foreground hover:text-foreground border-l-2 border-transparent"
                    }
                  `}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}

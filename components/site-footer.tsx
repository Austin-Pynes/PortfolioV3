"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export function SiteFooter() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null)
  const [time, setTime] = useState("")

  useEffect(() => {
    fetch("/api/visitors", { method: "POST" })
      .then((r) => r.json())
      .then((d) => setVisitorCount(d.count))
      .catch(() => setVisitorCount(1042))

    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      )
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="border-t border-border bg-retro-deep mt-12">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Nav links */}
          <div>
            <p className="font-mono text-xs text-retro-gold mb-3">// Navigation</p>
            <div className="flex flex-col gap-1.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/projects", label: "Projects" },
                { href: "/log", label: "Dev Log" },
                { href: "/skills", label: "Skills" },
                { href: "/setup", label: "Setup" },
                { href: "/links", label: "Links" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="text-center">
            <p className="font-mono text-xs text-retro-teal mb-3">// Stats</p>
            <div className="inline-flex flex-col gap-2">
              <div className="retro-panel px-4 py-2">
                <p className="font-mono text-xs text-muted-foreground mb-0.5">Visitors</p>
                <p className="font-mono text-lg text-retro-gold">
                  {visitorCount !== null
                    ? String(visitorCount).padStart(6, "0")
                    : "------"}
                </p>
              </div>
              <div className="retro-panel px-4 py-2">
                <p className="font-mono text-xs text-muted-foreground mb-0.5">Local Time</p>
                <p className="font-mono text-lg text-retro-teal">{time || "--:--:--"}</p>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="md:text-right">
            <p className="font-mono text-xs text-retro-rose mb-3">// Built With</p>
            <div className="flex flex-wrap gap-2 md:justify-end">
              {[
                { text: "React", color: "text-retro-teal border-retro-teal/30" },
                { text: "Next.js", color: "text-retro-lime border-retro-lime/30" },
                { text: "TypeScript", color: "text-retro-gold border-retro-gold/30" },
                { text: "Tailwind", color: "text-retro-rose border-retro-rose/30" },
                { text: "Coded by hand", color: "text-foreground border-border" },
              ].map((badge) => (
                <span
                  key={badge.text}
                  className={`${badge.color} border px-2 py-0.5 font-mono text-[10px]`}
                >
                  {badge.text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-4 border-t border-border flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-mono text-xs text-muted-foreground">
            &copy; 2026 // All rights reserved
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Best viewed on any screen // Made with lots of late nights
          </p>
        </div>
      </div>
    </footer>
  )
}

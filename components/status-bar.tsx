"use client"

import { useEffect, useState } from "react"

export function StatusBar() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="bg-retro-slate border-b border-border overflow-hidden">
      <div className="animate-marquee whitespace-nowrap py-1 inline-flex">
        {[0, 1].map((copy) => (
          <span key={copy} className="inline-flex items-center gap-8 px-4 font-mono text-xs text-muted-foreground">
            <span>
              <span className="text-retro-gold">SYS</span> // Welcome to my portfolio
            </span>
            <span className="text-border">|</span>
            <span>
              <span className="text-retro-teal">STATUS</span> // Online
            </span>
            <span className="text-border">|</span>
            <span>
              <span className="text-retro-rose">BUILD</span> // v3.0
            </span>
            <span className="text-border">|</span>
            <span>
              <span className="text-retro-lime">STACK</span> // React + Next.js + TypeScript
            </span>
            <span className="text-border">|</span>
            <span>
              <span className="text-retro-gold">DATE</span> // {mounted ? new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "Loading..."}
            </span>
            <span className="text-border">|</span>
            <span>
              <span className="text-retro-teal">MOOD</span> // Coding something cool
            </span>
            <span className="mr-8" />
          </span>
        ))}
      </div>
    </div>
  )
}

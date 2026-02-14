"use client"

import { useEffect, useState, useCallback } from "react"

const titles = [
  "Year 8 Developer",
  "React Enthusiast",
  "Code Wizard",
  "King Of Breaking Code",
  "Future Engineer",
  "Open Source Fan",
]

export function Typewriter() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const tick = useCallback(() => {
    const currentTitle = titles[titleIndex]

    if (!isDeleting) {
      setDisplayText(currentTitle.slice(0, displayText.length + 1))
      if (displayText.length === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 2000)
        return
      }
    } else {
      setDisplayText(currentTitle.slice(0, displayText.length - 1))
      if (displayText.length === 0) {
        setIsDeleting(false)
        setTitleIndex((prev) => (prev + 1) % titles.length)
        return
      }
    }
  }, [displayText, isDeleting, titleIndex])

  useEffect(() => {
    const timeout = setTimeout(tick, isDeleting ? 40 : 80)
    return () => clearTimeout(timeout)
  }, [tick, isDeleting])

  return (
    <span className="font-mono text-retro-gold">
      {displayText}
      <span className="animate-blink">_</span>
    </span>
  )
}

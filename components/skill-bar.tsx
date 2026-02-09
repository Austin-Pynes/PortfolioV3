"use client"

import { useEffect, useState } from "react"

const getLabel = (lvl: number) => {
  if (lvl >= 90) return "Master"
  if (lvl >= 70) return "Advanced"
  if (lvl >= 50) return "Intermediate"
  if (lvl >= 30) return "Learning"
  return "Beginner"
}

const getColor = (lvl: number) => {
  if (lvl >= 70) return "from-retro-teal/60 to-retro-teal"
  if (lvl >= 50) return "from-retro-gold/60 to-retro-gold"
  return "from-retro-rose/60 to-retro-rose"
}

export function SkillBar({ name, level }: { name: string; level: number }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => setWidth(level), 200)
    return () => clearTimeout(timeout)
  }, [level])

  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-xs text-foreground w-28 shrink-0 text-right">
        {name}
      </span>
      <div className="flex-1 bg-retro-deep border border-border h-5 relative overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${getColor(level)} transition-all duration-700 ease-out`}
          style={{ width: `${width}%` }}
        />
        <span className="absolute inset-0 flex items-center justify-center font-mono text-[9px] text-foreground/80 mix-blend-difference">
          {width}%
        </span>
      </div>
      <span className="font-mono text-[10px] text-muted-foreground w-20">
        {getLabel(level)}
      </span>
    </div>
  )
}

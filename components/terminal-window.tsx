import type { ReactNode } from "react"

export function TerminalWindow({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="retro-panel overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 bg-retro-deep border-b border-border">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-retro-rose/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-retro-gold/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-retro-lime/80" />
        </div>
        <span className="font-mono text-xs text-muted-foreground ml-2">{title}</span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  )
}

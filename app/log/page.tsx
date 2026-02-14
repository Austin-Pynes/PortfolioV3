"use client"

import { PageHeader } from "@/components/page-header"
import { useState } from "react"

const logEntries = [
  {
    date: "Feb 8, 2026",
    title: "Launched my new portfolio",
    mood: "Hyped",
    content: [
      "It's finally done! After about 3 weeks of working on this portfolio site, I've got it to a point where I'm happy with it. Clean design, proper routing, responsive layout -- everything I wanted from the start.",
      "I learned a lot about CSS layout and Next.js routing while building this. The hardest part was definitely getting the design system to feel consistent.",
      "Shoutout to all the retro web archives I looked through for inspiration. The early internet was wild.",
    ],
    tags: ["React", "Next.js", "CSS", "milestone"],
  },
  {
    date: "Jan 29, 2026",
    title: "TypeScript is actually amazing??",
    mood: "Mind blown",
    content: [
      "I've been avoiding TypeScript for months because it looked scary with all the angle brackets and stuff. But I finally sat down and started learning it properly and... it's actually incredible?",
      "The way it catches errors BEFORE you even run the code? I spent 2 hours debugging a bug last week that TypeScript would have caught instantly. I'm converted.",
      "Still confused about generics though. What even IS a <T>?? I'll figure it out eventually.",
    ],
    tags: ["TypeScript", "learning"],
  },
]

const moodColors: Record<string, string> = {
  Hyped: "text-retro-gold",
  "Mind blown": "text-retro-teal",
  Proud: "text-retro-lime",
  Exhausted: "text-retro-rose",
  Legendary: "text-retro-gold",
  Pain: "text-retro-rose",
  Excited: "text-retro-teal",
}

const allTags = Array.from(new Set(logEntries.flatMap((e) => e.tags)))

export default function LogPage() {
  const [tagFilter, setTagFilter] = useState<string | null>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const filtered = tagFilter
    ? logEntries.filter((e) => e.tags.includes(tagFilter))
    : logEntries

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <PageHeader
        tag="dev_log"
        title="Dev Log"
        description="My coding journey, documented. Thoughts, progress, failures, and wins."
      />

      {/* Tag filters */}
      <div className="flex items-center gap-1.5 flex-wrap mb-8">
        <button
          type="button"
          onClick={() => setTagFilter(null)}
          className={`font-mono text-xs px-2.5 py-1 border transition-all ${
            tagFilter === null
              ? "border-retro-gold text-retro-gold bg-retro-gold/5"
              : "border-border text-muted-foreground hover:text-foreground"
          }`}
        >
          All ({logEntries.length})
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setTagFilter(tagFilter === tag ? null : tag)}
            className={`font-mono text-xs px-2.5 py-1 border transition-all ${
              tagFilter === tag
                ? "border-retro-teal text-retro-teal bg-retro-teal/5"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>

      {/* Entries */}
      <div className="space-y-4">
        {filtered.map((entry, i) => {
          const isExpanded = expandedIndex === i
          const showPreview = !isExpanded && entry.content.length > 1

          return (
            <article
              key={i}
              className="retro-panel overflow-hidden transition-all hover:border-retro-gold/30"
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-border">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(logEntries.length - logEntries.indexOf(entry)).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-xs text-retro-gold">{entry.date}</span>
                </div>
                <span className={`font-mono text-xs ${moodColors[entry.mood] || "text-muted-foreground"}`}>
                  {entry.mood}
                </span>
              </div>

              <div className="p-5">
                <h2 className="font-bold text-foreground mb-3">{entry.title}</h2>
                <div className="space-y-2">
                  {(isExpanded ? entry.content : [entry.content[0]]).map((p, j) => (
                    <p key={j} className="text-sm text-muted-foreground leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                {showPreview && (
                  <button
                    type="button"
                    onClick={() => setExpandedIndex(i)}
                    className="font-mono text-xs text-retro-teal mt-3 hover:text-retro-gold transition-colors"
                  >
                    Read more ({entry.content.length - 1} more paragraphs)
                  </button>
                )}
                {isExpanded && entry.content.length > 1 && (
                  <button
                    type="button"
                    onClick={() => setExpandedIndex(null)}
                    className="font-mono text-xs text-retro-rose mt-3 hover:text-retro-gold transition-colors"
                  >
                    Show less
                  </button>
                )}

                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-border">
                  {entry.tags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setTagFilter(tagFilter === tag ? null : tag)}
                      className={`font-mono text-[10px] border px-2 py-0.5 transition-all cursor-pointer ${
                        tagFilter === tag
                          ? "border-retro-teal text-retro-teal"
                          : "border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {/* End */}
      <div className="retro-panel p-5 mt-8 text-center">
        <p className="font-mono text-sm text-muted-foreground">
          End of log. More entries coming soon...
        </p>
        <span className="font-mono text-retro-gold animate-blink inline-block mt-1">_</span>
      </div>
    </div>
  )
}

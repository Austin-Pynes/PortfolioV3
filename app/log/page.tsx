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
  {
    date: "Jan 15, 2026",
    title: "Weather Dashboard is complete",
    mood: "Proud",
    content: [
      "Finished my weather dashboard project today! It pulls data from the OpenWeather API and shows the current weather plus a 5-day forecast. I even added animated weather icons.",
      "The hardest part was handling all the API edge cases. What happens when the API is down? What about rate limiting? I learned about error handling and loading states which was super useful.",
    ],
    tags: ["React", "API", "project"],
  },
  {
    date: "Dec 28, 2025",
    title: "Christmas coding marathon results",
    mood: "Exhausted",
    content: [
      "Spent most of the Christmas break coding (between family stuff obviously). Here's what I accomplished: Fixed 12 bugs in my Discord bot. Started learning Next.js App Router. Redesigned my todo app's UI. Started planning this portfolio site.",
      "My new year's resolution: ship more projects and stop abandoning them halfway through.",
    ],
    tags: ["reflection", "goals"],
  },
  {
    date: "Dec 10, 2025",
    title: "My first pull request got merged",
    mood: "Legendary",
    content: [
      "I submitted a pull request to fix a typo in the docs of a real open source project... and they MERGED IT. My code is now officially part of a project that thousands of people use.",
      "OK fine it was just a typo fix. But still! I'm technically an open source contributor now.",
    ],
    tags: ["open-source", "milestone", "git"],
  },
  {
    date: "Nov 20, 2025",
    title: "The Great CSS Incident of 2025",
    mood: "Pain",
    content: [
      "Spent FOUR HOURS trying to centre a div. Tried margin: auto, text-align: center, flexbox, grid, position: absolute... nothing worked.",
      "Turns out I had a typo in my class name. It was .contaner instead of .container. Lesson learned: always check your spelling before questioning your entire understanding of CSS.",
    ],
    tags: ["CSS", "debugging"],
  },
  {
    date: "Oct 5, 2025",
    title: "Started learning React",
    mood: "Excited",
    content: [
      "Today I wrote my first React component! It was just a button that counts how many times you've clicked it, but it felt like magic. The whole concept of state and components and JSX is so cool.",
      "useState makes sense. useEffect does NOT. Why does my effect run twice?? I'll figure it out... eventually.",
    ],
    tags: ["React", "learning", "beginner"],
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

"use client"

import { PageHeader } from "@/components/page-header"
import { useState } from "react"

const linkCategories = [
  {
    id: "learn",
    label: "Learn to Code",
    links: [
      { name: "freeCodeCamp", url: "https://freecodecamp.org", desc: "The best free resource for learning web development. I started here." },
      { name: "The Odin Project", url: "https://theodinproject.com", desc: "Another amazing free curriculum. More project-based." },
      { name: "MDN Web Docs", url: "https://developer.mozilla.org", desc: "The encyclopedia of web development. I use this literally every day." },
      { name: "Codecademy", url: "https://codecademy.com", desc: "Interactive coding lessons. Great for Python and JavaScript basics." },
      { name: "Scratch", url: "https://scratch.mit.edu", desc: "Where it all began for me. Still great for learning logic and game design." },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    links: [
      { name: "VS Code", url: "https://code.visualstudio.com", desc: "The best code editor. Fight me." },
      { name: "GitHub", url: "https://github.com", desc: "Where all the code lives. Essential for any developer." },
      { name: "Vercel", url: "https://vercel.com", desc: "Free hosting for your Next.js sites. This site is hosted here." },
      { name: "Figma", url: "https://figma.com", desc: "Design tool. I use it to plan my UIs before I code them." },
      { name: "Coolors", url: "https://coolors.co", desc: "Colour palette generator. Super useful when you're bad at picking colours." },
    ],
  },
  {
    id: "youtube",
    label: "YouTube",
    links: [
      { name: "Fireship", url: "https://youtube.com/@fireship", desc: "Short, fast, and funny coding videos. '100 seconds of X' is amazing." },
      { name: "Web Dev Simplified", url: "https://youtube.com/@WebDevSimplified", desc: "Kyle explains web dev concepts really clearly. Helped me learn React." },
      { name: "The Coding Train", url: "https://youtube.com/@TheCodingTrain", desc: "Daniel Shiffman makes creative coding SO fun." },
      { name: "Traversy Media", url: "https://youtube.com/@TraversyMedia", desc: "Crash courses on basically everything. My go-to for new frameworks." },
      { name: "NetworkChuck", url: "https://youtube.com/@NetworkChuck", desc: "Makes networking and Linux actually interesting." },
    ],
  },
  {
    id: "fun",
    label: "Fun & Inspiration",
    links: [
      { name: "CSS Zen Garden", url: "http://csszengarden.com", desc: "Shows how powerful CSS is -- same HTML, completely different designs." },
      { name: "Hacker News", url: "https://news.ycombinator.com", desc: "Tech news and interesting articles. Warning: time sink." },
      { name: "CodePen", url: "https://codepen.io", desc: "Amazing CSS and JS experiments by talented developers." },
      { name: "GeoCities Archive", url: "https://geocities.restorativland.org", desc: "What inspired this site's retro feel. Browse preserved 90s websites." },
      { name: "neal.fun", url: "https://neal.fun", desc: "Interactive web experiments that are insanely creative." },
    ],
  },
]

export default function LinksPage() {
  const [activeCategory, setActiveCategory] = useState("learn")
  const category = linkCategories.find((c) => c.id === activeCategory) ?? linkCategories[0]

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <PageHeader
        tag="links"
        title="Cool Links"
        description="My favourite corners of the internet. Resources, tools, channels, and inspiration."
      />

      {/* Disclaimer */}
      <div className="retro-panel p-3 mb-8">
        <p className="font-mono text-xs text-muted-foreground">
          Not affiliated with any of these. Just resources I personally use and recommend. Links open in new tabs.
        </p>
      </div>

      {/* Category tabs */}
      <div className="flex items-center gap-1 mb-6 flex-wrap">
        {linkCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={`font-mono text-xs px-3 py-1.5 border transition-all ${
              activeCategory === cat.id
                ? "border-retro-gold text-retro-gold bg-retro-gold/5"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Links */}
      <div className="space-y-3 mb-12">
        {category.links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block retro-panel p-4 transition-all hover:border-retro-gold/30 group"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-sm text-foreground group-hover:text-retro-gold transition-colors">
                  {link.name}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{link.desc}</p>
              </div>
              <span className="font-mono text-xs text-muted-foreground shrink-0 mt-1 group-hover:text-retro-teal transition-colors">
                -&gt;
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Web Badges */}
      <div className="retro-panel p-5 text-center">
        <p className="font-mono text-xs text-muted-foreground mb-4">
          // web_badges (every good site had these)
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { text: "MADE WITH REACT", color: "text-retro-teal border-retro-teal/30" },
            { text: "NEXT.JS POWERED", color: "text-retro-lime border-retro-lime/30" },
            { text: "JAVASCRIPT", color: "text-retro-gold border-retro-gold/30" },
            { text: "ANY BROWSER", color: "text-foreground border-border" },
            { text: "POWERED BY CAFFEINE", color: "text-retro-rose border-retro-rose/30" },
            { text: "NO COOKIES", color: "text-retro-gold border-retro-gold/30" },
          ].map((badge) => (
            <span
              key={badge.text}
              className={`${badge.color} border px-3 py-1 font-mono text-[10px] font-bold`}
            >
              {badge.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

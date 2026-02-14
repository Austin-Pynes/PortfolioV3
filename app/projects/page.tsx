"use client"

import { PageHeader } from "@/components/page-header"
import { useState } from "react"
import type { Metadata } from "next"

const projects = [
  {
    name: "Space Invaders Clone",
    description:
      "My first game! A Space Invaders clone with levels, a high score system, and sound effects I made myself.",
    tech: ["Python", "Game"],
    status: "Complete",
    year: "2025",
    category: "game",
  },
  {
    name: "This Website",
    description:
      "The portfolio you're looking at right now. Built with React, Next.js, and Tailwind CSS. My most ambitious web project yet.",
    tech: ["React", "Next.js", "Tailwind"],
    status: "Active",
    year: "2025-2026",
    category: "web",
  },
]

const categories = ["all", "web", "game", "bot", "tool"] as const
type Category = (typeof categories)[number]

const statusStyles: Record<string, string> = {
  Complete: "text-retro-lime border-retro-lime/30 bg-retro-lime/5",
  Active: "text-retro-teal border-retro-teal/30 bg-retro-teal/5",
  "In Progress": "text-retro-gold border-retro-gold/30 bg-retro-gold/5",
  Retired: "text-muted-foreground border-border bg-muted/5",
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Category>("all")

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter)

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <PageHeader
        tag="projects"
        title="My Projects"
        description="Things I've built with my own two hands and a keyboard. Games, websites, bots, and tools."
      />

      {/* Stats */}
      <div className="flex items-center gap-6 md:gap-10 flex-wrap mb-8">
        <div>
          <p className="font-mono text-2xl font-bold text-retro-gold">{projects.length}</p>
          <p className="font-mono text-xs text-muted-foreground">Total</p>
        </div>
        <div>
          <p className="font-mono text-2xl font-bold text-retro-lime">
            {projects.filter((p) => p.status === "Complete").length}
          </p>
          <p className="font-mono text-xs text-muted-foreground">Complete</p>
        </div>
        <div>
          <p className="font-mono text-2xl font-bold text-retro-teal">
            {projects.filter((p) => p.status === "Active").length}
          </p>
          <p className="font-mono text-xs text-muted-foreground">Active</p>
        </div>
        <div>
          <p className="font-mono text-2xl font-bold text-retro-rose">
            {projects.filter((p) => p.status === "In Progress").length}
          </p>
          <p className="font-mono text-xs text-muted-foreground">In Progress</p>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex items-center gap-1 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`font-mono text-xs px-3 py-1.5 border transition-all ${
              filter === cat
                ? "border-retro-gold text-retro-gold bg-retro-gold/5"
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
            }`}
          >
            {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
            {cat === "all" && ` (${projects.length})`}
            {cat !== "all" && ` (${projects.filter((p) => p.category === cat).length})`}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {filtered.map((project, i) => (
          <div
            key={project.name}
            className="retro-panel p-5 transition-all hover:border-retro-gold/30 group"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-muted-foreground uppercase">
                  {project.category}
                </span>
                <span className="text-border font-mono text-[10px]">/</span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {project.year}
                </span>
              </div>
              <span
                className={`font-mono text-[10px] border px-2 py-0.5 ${statusStyles[project.status]}`}
              >
                {project.status}
              </span>
            </div>

            <h3 className="font-bold text-foreground mb-2 group-hover:text-retro-gold transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] border border-border text-muted-foreground px-2 py-0.5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming */}
      <div className="retro-panel p-5 border-l-2 border-retro-gold/40 mb-8">
        <p className="font-mono text-xs text-retro-gold mb-3">// upcoming</p>
        <ul className="space-y-2">
          {[
            "A multiplayer browser game",
            "A Spotify playlist analyzer",
            "Piano simulator",
            "Android app",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-retro-teal font-mono text-xs mt-0.5">+</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="retro-panel p-5 text-center">
        <p className="font-bold text-foreground mb-1">Want to see the code?</p>
        <p className="text-sm text-muted-foreground mb-3">All my projects are open source on GitHub.</p>
        <span className="inline-block font-mono text-sm px-4 py-2 bg-retro-gold text-retro-deep cursor-pointer hover:bg-retro-gold/90 transition-colors">
          Visit My GitHub
        </span>
      </div>
    </div>
  )
}
